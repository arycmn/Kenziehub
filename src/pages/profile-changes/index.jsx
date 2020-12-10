import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
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

import { mockData } from "../../helper/mockUser";

const ProfileChanges = () => {
  const [user, setUser] = useState(mockData);

  const schema = yup.object().shape({});

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    // requisição de API
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Avatar>
          <label htmlFor="avatar">
            <img src={user.avatar_url} alt={user.name} />
          </label>
          <input id="avatar" type="file" accept="image/*" />
        </Avatar>
        <Field>
          <Title htmlFor="name">Nome</Title>
          <Input id="name" value={user.name} />
        </Field>
        <Field>
          <Title htmlFor="email">Email</Title>
          <Input id="email" value={user.email} />
        </Field>
        <Field>
          <Title htmlFor="course_module">Módulo</Title>
          <Options id="course_module" value={user.course_module}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </Options>
        </Field>
        <Field>
          <Title htmlFor="bio">Bio</Title>
          <Bio id="bio" value={user.bio} />
        </Field>
        <Field>
          <Title htmlFor="contact">Contato</Title>
          <Input id="contact" value={user.contact} />
        </Field>
        <Field>
          <Title htmlFor="old_password">Senha antiga</Title>
          <Input id="old_password" type="password" />
        </Field>
        <Field>
          <Title htmlFor="password">Nova senha</Title>
          <Input id="password" type="password" />
        </Field>

        <SubmitButton>Salvar</SubmitButton>
      </Form>
    </Container>
  );
};

export default ProfileChanges;
