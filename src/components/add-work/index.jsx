import { Modal } from "./style";
import { api } from "../../services/API";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { getProfileThunk } from "../../store/modules/profile/thunks";
import Popup from "reactjs-popup";
import * as yup from "yup";

const PopupExample = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    deploy_url: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Deve ser uma url"
      )
      .required("Campo obrigatório"),
  });

  const { profile, token } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAddWork = (data) => {
    api
      .post("/users/works", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(
          getProfileThunk({ ...profile, works: [...profile.works, res.data] })
        );

        reset({
          title: "",
          description: "",
          deploy_url: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Popup
      trigger={<button className="button"> Adicionar Trabalho </button>}
      modal
      nested
    >
      {(close) => (
        <Modal>
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Adicionar Trabalho </div>
          <div className="content">
            <form onSubmit={handleSubmit(handleAddWork)}>
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
        </Modal>
      )}
    </Popup>
  );
};
export default PopupExample;
