import { Modal, AddButton } from "./style";
import { useState } from "react";
import { api } from "../../services/API";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { getProfileThunk } from "../../store/modules/profile/thunks";
import { message } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import Popup from "reactjs-popup";
import * as yup from "yup";

const AddWork = () => {
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

  const { register, handleSubmit, errors, reset, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoad] = useState(false);

  const alreadyHasWork = (title) => {
    return profile.works.some((work) => work.title === title);
  };

  const handleAddWork = (data) => {
    setLoad(true);

    if (alreadyHasWork(data.title)) {
      setLoad(false);
      setError("title", { message: "Trabalho já cadastrado" });
    } else {
      api
        .post("/users/works", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          message.success("Trabalho adicionado com sucesso");
          setLoad(false);

          dispatch(
            getProfileThunk({
              ...profile,
              works: [...profile.works, res.data],
            })
          );

          reset({
            title: "",
            description: "",
            deploy_url: "",
          });
        })
        .catch((err) => {
          setLoad(false);
          console.log(err);
          message.error("Erro ao adicionar trabalho");
        });
    }
  };

  return (
    <Popup
      trigger={<AddButton className="add"> Adicionar Trabalho </AddButton>}
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

              <button type="submit" disabled={loading}>
                {loading ? <Loading3QuartersOutlined spin /> : "Adicionar"}
              </button>
            </form>
          </div>
        </Modal>
      )}
    </Popup>
  );
};
export default AddWork;
