import Popup from "reactjs-popup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { api } from "../../services/API";
import { getProfileThunk } from "../../store/modules/profile/thunks";

const AddTech = () => {
  const { token, profile } = useSelector((state) => state);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio"),
    status: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setError("user_tech", {
          message: "",
        });
        dispatch(
          getProfileThunk({ ...profile, techs: [...profile.techs, res.data] })
        );
      })
      .catch((err) =>
        setError("user_tech", {
          message: "Você ja criou essa tecnologia, tente atualiza-lá",
        })
      );
  };

  return (
    <>
      <Popup
        trigger={<button className="button"> Adicionar tecnologia </button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">Adicionar tecnologia</div>
            <div className="content">
              <form onSubmit={handleSubmit(handleForm)}>
                <input
                  placeholder="Nome da Tecnologia"
                  name="title"
                  ref={register}
                />
                <select name="status" ref={register}>
                  <option value="">Selecione o nível</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
                <p>{errors.user_tech?.message}</p>
                <button type="submit">Enviar</button>
              </form>
            </div>

            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  close();
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
};

export default AddTech;
