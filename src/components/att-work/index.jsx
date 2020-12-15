import Popup from "reactjs-popup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { api } from "../../services/API";
import { getProfileThunk } from "../../store/modules/profile/thunks";

const AttWork = ({ id }) => {
  const { token, profile } = useSelector((state) => state);

  const dispatch = useDispatch();

  const schema = yup.object().shape({
    title: yup.string().optional(),
    description: yup
      .string()
      .min(3, "sua descrição deve conter no mínimo 3 letras")
      .optional(),
    deploy_url: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Deve ser uma url"
      )
      .optional("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .put(`/users/works/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setError("user_works", {
          message: "",
        });

        const attWork = profile.techs.find(
          (tech) => tech.id === res.data.id && (tech.status = res.data.status)
        );
        console.log(attWork);
        dispatch(getProfileThunk({ ...profile, works: [...profile.works] }));
      })
      .catch((err) =>
        setError("user_works", {
          message: "Você ja criou essa tecnologia, tente atualiza-lá",
        })
      );
  };

  return (
    <>
      <Popup
        trigger={<button className="button"> Atualizar Trabalho </button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">Atualizar Trabalho</div>
            <div className="content">
              <form onSubmit={handleSubmit(handleForm)}>
                <label htmlFor="title">Título</label>
                <input type="text" name="title" id="title" ref={register} />
                <span>{errors.title?.message}</span>

                <label htmlFor="description">Descrição</label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  ref={register}
                />
                <span>{errors.description?.message}</span>

                <label htmlFor="deploy_url">Url</label>
                <input
                  type="url"
                  name="deploy_url"
                  id="deploy_url"
                  ref={register}
                />
                <span>{errors.deploy_url?.message}</span>
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

export default AttWork;
