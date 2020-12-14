import { Modal } from "./style";
import { api } from "../../services/API";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Popup from "reactjs-popup";
import * as yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProfileThunk } from "../../store/modules/profile/thunks";

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

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deploy_url, setDeployUrl] = useState("");

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAddWork = (data) => {
    api
      .post("/users/works", data)
      .then((res) => {
        setTitle("");
        setDescription("");
        setDeployUrl("");
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
              <input
                type="text"
                name="title"
                id="title"
                ref={register}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <span>{errors.title?.message}</span>
              <label htmlFor="description">Descrição</label>
              <textarea
                type="text"
                name="description"
                id="description"
                ref={register}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <span>{errors.description?.message}</span>
              <label htmlFor="deploy_url">Url</label>
              <input
                type="url"
                name="deploy_url"
                id="deploy_url"
                ref={register}
                value={deploy_url}
                onChange={(e) => setDeployUrl(e.target.value)}
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
