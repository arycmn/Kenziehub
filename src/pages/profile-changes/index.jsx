import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Container,
  Bio,
  Field,
  Form,
  Title,
  Input,
  Options,
  SubmitButton,
  LineButton,
  LineAvatar,
  Error,
} from "./style";
import { schema } from "./validations";
import { getProfileThunk } from "../../store/modules/profile/thunks";
import Header from "../../components/header";
import { message } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { getDevThunk } from "../../store/modules/devs/thunks";
import { allDevsThunk } from "../../store/modules/allDevs/thunks";

import { api } from "../../services/API";
const ProfileChanges = () => {
  const { profile, token } = useSelector((state) => state);
  const [profileChange, setProfileChange] = useState(profile);
  const [loading, setLoad] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const defaultAvatar =
    "https://img.icons8.com/clouds/500/000000/test-account.png";

  const handleAvatarChange = (e) => {
    const data = new FormData();
    data.append("avatar", e.target.files[0]);
    api
      .patch("/users/avatar", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProfileChange({ ...profileChange, avatar_url: res.data.avatar_url });
        dispatch(getProfileThunk(res.data));
        message.success("Imagem atualizada com sucesso");

        setError("user_avatar", {
          message: "",
        });
      })
      .catch((err) =>
        setError("user_avatar", {
          message: "Não foi possível adicionar a foto",
        })
      );
  };

  const handleForm = (data) => {
    const { password_confirm, ...profile } = data;
    setLoad(true);

    api
      .put(
        "/profile",
        { ...profile },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setLoad(false);
        dispatch(allDevsThunk());
        dispatch(getDevThunk(1));
        dispatch(getProfileThunk(profileChange));
        setError("user_avatar", {
          message: "",
        });

        history.push("/profile");
        message.success("Atualizado com sucesso");
      })
      .catch((err) => {
        message.error("Erro na atualização");

        setError("user_changes", {
          message: err.response.data.message,
        });
      });
  };
  const options = [
    {
      value: "Primeiro módulo (Introdução ao Frontend)",
    },
    {
      value: "Segundo módulo (Frontend Avançado)",
    },
    {
      value: "Terceiro módulo (Introdução ao Backend)",
    },
    {
      value: "Quarto módulo (Backend Avançado)",
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit(handleForm)}>
          <LineAvatar>
            <Avatar>
              <label htmlFor="avatar">
                <img
                  src={profile.avatar_url ? profile.avatar_url : defaultAvatar}
                  alt={profile.name}
                />
              </label>
              <input
                id="avatar"
                type="file"
                accept="image/*"
                ref={register}
                name="avatar_url"
                onChange={handleAvatarChange}
              />

              <Error>{errors.user_avatar?.message}</Error>
            </Avatar>
          </LineAvatar>
          <Field>
            <Title htmlFor="name">Nome</Title>
            <Input
              id="name"
              name="name"
              value={profileChange.name}
              ref={register}
              onChange={(e) =>
                setProfileChange({ ...profileChange, name: e.target.value })
              }
              inputMode="text"
            />
            <Error>{errors.name?.message}</Error>
          </Field>
          <Field>
            <Title htmlFor="email">Email</Title>
            <Input
              id="email"
              name="email"
              value={profileChange.email}
              ref={register}
              onChange={(e) =>
                setProfileChange({ ...profileChange, email: e.target.value })
              }
              inputMode="email"
            />
            <Error>{errors.email?.message}</Error>
          </Field>
          <Field>
            <Title htmlFor="course_module">Módulo</Title>
            <Options
              id="course_module"
              name="course_module"
              ref={register}
              defaultValue={profileChange.course_module}
              onChange={(e) =>
                setProfileChange({
                  ...profileChange,
                  course_module: e.target.value,
                })
              }
            >
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.value}
                </option>
              ))}
            </Options>
            <Error>{errors.course_module?.message}</Error>
          </Field>
          <Field>
            <Title htmlFor="bio">Bio</Title>
            <Bio
              id="bio"
              name="bio"
              value={profileChange.bio}
              ref={register}
              onChange={(e) =>
                setProfileChange({ ...profileChange, bio: e.target.value })
              }
              inputMode="text"
            />
            <Error>{errors.bio?.message}</Error>
          </Field>
          <Field>
            <Title htmlFor="contact">Contato</Title>
            <Input
              id="contact"
              name="contact"
              value={profileChange.contact}
              ref={register}
              onChange={(e) =>
                setProfileChange({ ...profileChange, contact: e.target.value })
              }
              inputMode="text"
            />
            <Error>{errors.contact?.message}</Error>
          </Field>
          <Field>
            <Title htmlFor="old_password">Senha antiga</Title>
            <Input
              id="old_password"
              name="old_password"
              type="password"
              ref={register}
              inputMode="text"
            />
            <Error>{errors.old_password?.message}</Error>
          </Field>
          <Field>
            <Title htmlFor="password" name="password">
              Nova senha
            </Title>
            <Input
              id="password"
              type="password"
              name="password"
              ref={register}
              inputMode="text"
            />
            <Error>{errors.password?.message}</Error>
          </Field>
          <Field>
            <Title htmlFor="password" name="password">
              Confirmação Nova senha
            </Title>
            <Input
              id="password_confirm"
              type="password"
              name="password_confirm"
              ref={register}
              inputMode="text"
            />
            <Error>{errors.password_confirm?.message}</Error>
          </Field>
          <LineButton>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? <Loading3QuartersOutlined spin /> : "Salvar"}
            </SubmitButton>
            <Error>{errors.user_changes?.message}</Error>
          </LineButton>
        </Form>
      </Container>
    </>
  );
};
export default ProfileChanges;
