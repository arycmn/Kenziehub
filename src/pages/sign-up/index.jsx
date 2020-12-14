import { api } from "../../services/API";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Container,
  FormSignIn,
  InfoSign,
  InputSign,
  ButtonSign,
  FormContainer,
  SelectSign,
  ErrorParagraph,
} from "./styled";
import imageSignup from "../../images/imageSignup.jpg";

const SignUp = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("email invalido").required("Campo obrigatório"),
    name: yup
      .string()
      .min(3, "O nome deve conter no mínimo 3 letras")
      .required("Campo obrigatorio"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
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

  const handleForm = (data) => {
    api
      .post("/users", { ...data })
      .then((res) => history.push("/login"))
      .catch((err) =>
        setError("user_register", {
          message: "Email já existe",
        })
      );
  };

  return (
    <>
      <Container image={imageSignup}>
        <FormContainer>
          <FormSignIn onSubmit={handleSubmit(handleForm)}>
            <InfoSign>Email</InfoSign>
            <InputSign placeholder="Email" name="email" ref={register} />
            <ErrorParagraph>{errors.email?.message}</ErrorParagraph>

            <InfoSign>Nome</InfoSign>
            <InputSign placeholder="Nome" name="name" ref={register} />
            <ErrorParagraph>{errors.name?.message}</ErrorParagraph>

            <InfoSign>Bio</InfoSign>
            <InputSign placeholder="Sobre você" name="bio" ref={register} />
            <ErrorParagraph>{errors.bio?.message}</ErrorParagraph>

            <InfoSign>Contact</InfoSign>
            <InputSign placeholder="Contato" name="contact" ref={register} />
            <ErrorParagraph>{errors.contact?.message}</ErrorParagraph>

            <InfoSign>Senha</InfoSign>
            <InputSign placeholder="Senha" name="password" ref={register} />
            <ErrorParagraph>{errors.password?.message}</ErrorParagraph>

            <InfoSign>Confirme a senha</InfoSign>
            <InputSign
              placeholder="confirme a senha"
              name="password_confirm"
              ref={register}
            />
            <ErrorParagraph>{errors.password_confirm?.message}</ErrorParagraph>

            <InfoSign>Módulo do curso</InfoSign>
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
            <ErrorParagraph>{errors.course_module?.message}</ErrorParagraph>

            <ButtonSign type="submit">Enviar cadastro</ButtonSign>
            <ErrorParagraph>{errors.user_register?.message}</ErrorParagraph>
          </FormSignIn>
        </FormContainer>
      </Container>
    </>
  );
};

export default SignUp;
