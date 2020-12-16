import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { api } from "../../services/API";
import { getProfileThunk } from "../../store/modules/profile/thunks";
import { StyledPopup } from "../add-tech/style";
import { Button } from "../../pages/profile/style";
import { message } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";

const AttTech = ({ id }) => {
  const [loading, setLoad] = useState(false);
  const { token, profile } = useSelector((state) => state);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    status: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, setError, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    setLoad(true);

    api
      .put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoad(false);
        message.success("Tecnologia atualizada com sucesso");

        setError("user_tech", {
          message: "",
        });

        profile.techs.find(
          (tech) => tech.id === res.data.id && (tech.status = res.data.status)
        );

        dispatch(getProfileThunk({ ...profile, techs: [...profile.techs] }));
      })
      .catch((err) => {
        setLoad(false);
        message.error("Erro ao atualizar tecnologia");

        setError("user_tech", {
          message: "Você ja criou essa tecnologia, tente atualiza-lá",
        });
      });
  };

  return (
    <>
      <StyledPopup
        trigger={
          <Button className="button" title="Atualizar tecnologia">
            {" "}
            <img
              alt="edit"
              src="https://img.icons8.com/clouds/80/000000/edit.png"
            />{" "}
          </Button>
        }
        modal
        nested
      >
        {(close) => (
          <>
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header">
              Atualizar nível
              <img
                alt="update"
                src="https://img.icons8.com/clouds/300/000000/available-updates.png"
              />
            </div>
            <div className="content">
              <form onSubmit={handleSubmit(handleForm)}>
                <select name="status" ref={register}>
                  <option value="">Selecione o nível</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
                <p>{errors.status?.message}</p>
                <button type="submit" disabled={loading}>
                  {loading ? <Loading3QuartersOutlined spin /> : "Atualizar"}
                </button>
              </form>
            </div>
            <div className="actions"></div>
          </>
        )}
      </StyledPopup>
    </>
  );
};

export default AttTech;
