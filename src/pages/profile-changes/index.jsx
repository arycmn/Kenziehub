import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector } from "react-redux";
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

// import { mockData } from "../../helper/mockprofile";

import { api } from "../../services/API";

const ProfileChanges = () => {
  // const [profile, setprofile] = useState(mockData);
  const { profile, token } = useSelector((state) => state);
  console.log(profile);
  console.log(token);

  const schema = yup.object().shape({
    email: yup.string().email("email invalido").required("Campo obrigatório"),
    name: yup
      .string()
      .min(3, "O nome deve conter no mínimo 3 letras")
      .required("Campo obrigatorio"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    old_password: yup
      .string()
      .matches(`${profile.password}`, "A senha não confere"),
    password: yup
      .string()
      .min(6, "Senha deve conter no mínimo 6 dígitos")
      .required("Campo obrigatório"),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password")], "A senha deve ser igual"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAvatarChange = (e) => {
    const data = new FormData();

    data.append("avatar", e.target.files[0]);
  };

  const handleForm = (data) => {
    const { avatar_url, ...profile } = data;

    // api.patch("/profiles/avatar", { avatar_url }).then((res) => console.log(res));

    api
      .put("/profiles/profile", { ...profile })
      .then((res) => console.log(res));
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
            <img src={profile.avatar_url} alt={profile.name} />
          </label>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </Avatar>
        <Field>
          <Title htmlFor="name">Nome</Title>
          <Input id="name" name="name" value={profile.name} ref={register} />
          <span>{errors.name?.message}</span>
        </Field>
        <Field>
          <Title htmlFor="email">Email</Title>
          <Input id="email" name="email" value={profile.email} ref={register} />
          <span>{errors.email?.message}</span>
        </Field>
        <Field>
          <Title htmlFor="course_module">Módulo</Title>
          <Options
            id="course_module"
            value={profile.course_module}
            name="course_module"
            ref={register}
            defaultValue={profile.module_course}
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
          <Bio id="bio" name="bio" value={profile.bio} ref={register} />
          <span>{errors.bio?.message}</span>
        </Field>
        <Field>
          <Title htmlFor="contact">Contato</Title>
          <Input
            id="contact"
            name="contact"
            value={profile.contact}
            ref={register}
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

        <SubmitButton>Salvar</SubmitButton>
      </Form>
    </Container>
  );
};

export default ProfileChanges;
