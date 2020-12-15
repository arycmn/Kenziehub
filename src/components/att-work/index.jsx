import { useState } from "react";
import Popup from "reactjs-popup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { api } from "../../services/API";
import { getProfileThunk } from "../../store/modules/profile/thunks";
import { Modal } from "../add-tech/style";
import { Button } from "../../pages/profile/style";

const AttWork = ({ id }) => {
  const { token, profile } = useSelector((state) => state);
  const [changeWorks, setChangeWorks] = useState({});
  const dispatch = useDispatch();

  const findWork = () => {
    const find = profile.works.find((work) => work.id === id);
    setChangeWorks(find);
    console.log("executei");
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
        const attWork = profile.works.find(
          (work) =>
            work.id === res.data.id &&
            ((work.title = res.data.title),
            (work.description = res.data.description),
            (work.deploy_url = res.data.deploy_url))
        );
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
        onOpen={findWork}
        trigger={
          <Button className="button">
            {" "}
            <img
              alt="edit"
              src="https://img.icons8.com/clouds/70/000000/edit.png"
            />
          </Button>
        }
        modal
        nested
      >
        {(close) => (
          <Modal>
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header">Atualizar Trabalho</div>
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
                      onChange={(e) =>
                        setChangeWorks({ title: e.target.value })
                      }
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
                    />
                    <span>{errors.deploy_url?.message}</span>
                  </div>
                  <button type="submit">Enviar</button>
                </form>
              </div>

              <div className="actions"></div>
            </div>
          </Modal>
        )}
      </Popup>
    </>
  );
};

export default AttWork;
