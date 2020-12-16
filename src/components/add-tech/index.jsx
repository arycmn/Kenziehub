import { Modal, AddButton } from "./style";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { api } from "../../services/API";
import { getProfileThunk } from "../../store/modules/profile/thunks";
import Popup from "reactjs-popup";
import { message } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";

const AddTech = () => {
  const { token, profile } = useSelector((state) => state);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio"),
    status: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoad] = useState(false);

  const handleForm = (data) => {
    setLoad(true);

    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoad(false);
        message.success("Tecnologia adicionada com sucesso");

        setError("user_tech", {
          message: "",
        });
        dispatch(
          getProfileThunk({ ...profile, techs: [...profile.techs, res.data] })
        );

        reset({
          title: "",
          status: "",
        });
      })
      .catch((err) => {
        setLoad(false);
        message.error("Erro ao adicionar tecnologia");

        setError("user_tech", {
          message: "Você ja criou essa tecnologia, tente atualiza-lá",
        });
      });
  };

  return (
    <>
      <Popup
        trigger={<AddButton> Adicionar Tecnologia </AddButton>}
        modal
        nested
      >
        {(close) => (
          <Modal>
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
                  inputMode="text"
                />
                <span>{errors.title?.message}</span>

                <select name="status" ref={register}>
                  <option value="">Selecione o nível</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
                <p>{errors.status?.message}</p>
                <p>{errors.user_tech?.message}</p>
                <button type="submit" disabled={loading}>
                  {loading ? <Loading3QuartersOutlined spin /> : "Adicionar"}
                </button>
              </form>

              <div className="actions"></div>
            </div>
          </Modal>
        )}
      </Popup>
    </>
  );
};

export default AddTech;
