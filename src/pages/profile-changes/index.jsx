import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Container,
  Form,
  Field,
  Title,
  Avatar,
  Input,
  Bio,
  Options,
  SubmitButton,
} from "./style";
import { schema } from "./validations";

import { api } from "../../services/API";

const ProfileChanges = () => {
  const { profile } = useSelector((state) => state);

  const [user, setUser] = useState(profile);

  const history = useHistory();

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const defaultAvatar =
    "https://www.ecp.org.br/wp-content/uploads/2017/12/default-avatar-1.png";

  const handleAvatarChange = (e) => {
    setUser({ ...user, avatar_url: URL.createObjectURL(e.target.files[0]) });

    const data = new FormData();
    data.append("avatar", e.target.files[0]);

    api
      .patch("/users/avatar", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleForm = (data) => {
    const { password_confirm, ...profile } = data;

    api
      .put("/profile", { ...profile })
      .then(() => history.push("/profile"))
      .catch(() => setError("old_password", { message: "Senha incorreta" }));
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
    <Container>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Avatar>
          <label htmlFor="avatar">
            <img
              src={user.avatar_url ? user.avatar_url : defaultAvatar}
              alt={user.name}
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
        </Avatar>

        <Field>
          <Title htmlFor="name">Nome</Title>
          <Input
            id="name"
            name="name"
            value={user.name}
            ref={register}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <span>{errors.name?.message}</span>
        </Field>

        <Field>
          <Title htmlFor="email">Email</Title>
          <Input
            id="email"
            name="email"
            value={user.email}
            ref={register}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <span>{errors.email?.message}</span>
        </Field>

        <Field>
          <Title htmlFor="course_module">Módulo</Title>
          <Options
            id="course_module"
            name="course_module"
            ref={register}
            defaultValue={profile.course_module}
            onChange={(e) =>
              setUser({ ...user, course_module: e.target.value })
            }
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.value}
              </option>
            ))}
          </Options>
          <span>{errors.course_module?.message}</span>
        </Field>

        <Field>
          <Title htmlFor="bio">Bio</Title>
          <Bio
            id="bio"
            name="bio"
            value={user.bio}
            ref={register}
            onChange={(e) => setUser({ ...user, bio: e.target.value })}
          />
          <span>{errors.bio?.message}</span>
        </Field>

        <Field>
          <Title htmlFor="contact">Contato</Title>
          <Input
            id="contact"
            name="contact"
            value={user.contact}
            ref={register}
            onChange={(e) => setUser({ ...user, contact: e.target.value })}
          />
          <span>{errors.contact?.message}</span>
        </Field>

        <Field>
          <Title htmlFor="old_password">Senha antiga</Title>
          <Input
            id="old_password"
            name="old_password"
            type="password"
            ref={register}
          />
          <span>{errors.old_password?.message}</span>
        </Field>

        <Field>
          <Title htmlFor="password" name="password">
            Nova senha
          </Title>
          <Input id="password" type="password" name="password" ref={register} />
          <span>{errors.password?.message}</span>
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
          />
          <span>{errors.password_confirm?.message}</span>
        </Field>

        <SubmitButton type="submit">Salvar</SubmitButton>
      </Form>
    </Container>
  );
};

export default ProfileChanges;
