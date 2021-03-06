import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { api } from "../../services/API";
import { getProfileThunk } from "../../store/modules/profile/thunks";
import { StyledPopup } from "./style";
import { Button } from "../../pages/profile/style";
import { message } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";

const AttWork = ({ id }) => {
  const { token, profile } = useSelector((state) => state);
  const [changeWorks, setChangeWorks] = useState({});
  const [loading, setLoad] = useState(false);

  const dispatch = useDispatch();

  const findWork = () => {
    const find = profile.works.find((work) => work.id === id);
    setChangeWorks(find);
  };

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
    setLoad(true);

    api
      .put(`/users/works/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoad(false);
        message.success("Trabalho atualizado com sucesso");

        setError("user_works", {
          message: "",
        });

        profile.works.find(
          (work) =>
            work.id === res.data.id &&
            ((work.title = res.data.title),
            (work.description = res.data.description),
            (work.deploy_url = res.data.deploy_url))
        );
        dispatch(getProfileThunk({ ...profile, works: [...profile.works] }));
      })
      .catch((err) => {
        message.error("Erro ao atualizar trabalho");

        setError("user_works", {
          message: "Você ja criou essa tecnologia, tente atualiza-lá",
        });
      });
  };

  return (
    <>
      <StyledPopup
        onOpen={findWork}
        trigger={
          <Button className="button" title="Atualizar trabalho">
            {" "}
            <img
              alt="edit"
              src="https://img.icons8.com/clouds/80/000000/edit.png"
            />
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
              <div> Atualizar Trabalho</div>
              <img
                alt="work"
                src="https://img.icons8.com/clouds/350/000000/refresh.png"
              />
            </div>
            <div className="content">
              <form onSubmit={handleSubmit(handleForm)}>
                <div>
                  <label htmlFor="title">Título</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={changeWorks.title}
                    ref={register}
                    onChange={(e) => setChangeWorks({ title: e.target.value })}
                    inputMode="text"
                  />
                  <span>{errors.title?.message}</span>
                </div>
                <div>
                  <label htmlFor="description">Descrição</label>
                  <textarea
                    type="text"
                    name="description"
                    value={changeWorks.description}
                    onChange={(e) =>
                      setChangeWorks({
                        ...changeWorks,
                        description: e.target.value,
                      })
                    }
                    id="description"
                    ref={register}
                    inputMode="text"
                  />
                  <span>{errors.description?.message}</span>
                </div>
                <div>
                  <label htmlFor="deploy_url">Url</label>
                  <input
                    type="url"
                    name="deploy_url"
                    value={changeWorks.deploy_url}
                    onChange={(e) =>
                      setChangeWorks({
                        ...changeWorks,
                        deploy_url: e.target.value,
                      })
                    }
                    id="deploy_url"
                    ref={register}
                    inputMode="url"
                  />
                  <span>{errors.deploy_url?.message}</span>
                </div>
                <button type="submit" disabled={loading}>
                  {loading ? <Loading3QuartersOutlined spin /> : "Atualizar"}
                </button>
              </form>
            </div>
          </>
        )}
      </StyledPopup>
    </>
  );
};

export default AttWork;
