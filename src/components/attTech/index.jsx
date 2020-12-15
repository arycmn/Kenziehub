import Popup from "reactjs-popup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { api } from "../../services/API";
import { getProfileThunk } from "../../store/modules/profile/thunks";

const AttTech = ({ id }) => {
  const { token, profile } = useSelector((state) => state);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    status: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setError("user_tech", {
          message: "",
        });

        const attTech = profile.techs.find(
          (tech) => tech.id === res.data.id && (tech.status = res.data.status)
        );
        dispatch(getProfileThunk({ ...profile, techs: [...profile.techs] }));
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
        trigger={<button className="button"> Atualizar tecnologia </button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">Atualizar nível</div>
            <div className="content">
              <form onSubmit={handleSubmit(handleForm)}>
                <select name="status" ref={register}>
                  <option value="">Selecione o nível</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
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

export default AttTech;
