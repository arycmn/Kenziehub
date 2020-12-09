import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  PageSignIn,
  FormSignIn,
  InfoSign,
  InputSign,
  ButtonSign,
  SelectSign,
} from "./styled";

const SignIn = () => {
  const history = useHistory();
  const { register, handleSubmit, _watch, _errors } = useForm();

  const handleForm = (data) => {
    axios
      .post("/users", { ...data })
      .then((res) => history.push("/login"))
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <>
      <PageSignIn>
        <FormSignIn onSubmit={handleSubmit(handleForm)}>
          <InfoSign>Email</InfoSign>
          <InputSign placeholder="Email" name="email" ref={register} />
          <InfoSign>Senha</InfoSign>
          <InputSign placeholder="Senha" name="password" ref={register} />
          <InfoSign>Nome</InfoSign>
          <InputSign placeholder="Nome" name="name" ref={register} />
          <InfoSign>Bio</InfoSign>
          <InputSign placeholder="Sobre você" name="bio" ref={register} />
          <InfoSign>Contact</InfoSign>
          <InputSign placeholder="Contato" name="contact" ref={register} />
          <InfoSign>Course Module</InfoSign>

          <SelectSign name="course_module" ref={register}>
            <option value="">Selecione o Módulo</option>
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
          </SelectSign>
          <ButtonSign type="submit">Enviar cadastro</ButtonSign>
        </FormSignIn>
      </PageSignIn>
    </>
  );
};

export default SignIn;
