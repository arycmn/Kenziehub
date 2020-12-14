import { api } from "../../services/API";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
      <PageSignIn>
        <FormSignIn onSubmit={handleSubmit(handleForm)}>
          <InfoSign>Email</InfoSign>
          <InputSign placeholder="Email" name="email" ref={register} />
          <p>{errors.email?.message}</p>

          <InfoSign>Nome</InfoSign>
          <InputSign placeholder="Nome" name="name" ref={register} />
          <p>{errors.name?.message}</p>

          <InfoSign>Bio</InfoSign>
          <InputSign placeholder="Sobre você" name="bio" ref={register} />
          <p>{errors.bio?.message}</p>

          <InfoSign>Contact</InfoSign>
          <InputSign placeholder="Contato" name="contact" ref={register} />
          <p>{errors.contact?.message}</p>

          <InfoSign>Senha</InfoSign>
          <InputSign placeholder="Senha" name="password" ref={register} />
          <p>{errors.password?.message}</p>

          <InfoSign>Confirme a senha</InfoSign>
          <InputSign
            placeholder="confirme a senha"
            name="password_confirm"
            ref={register}
          />
          <p>{errors.password_confirm?.message}</p>

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
          <p>{errors.course_module?.message}</p>

          <ButtonSign type="submit">Enviar cadastro</ButtonSign>
          <p>{errors.user_register?.message}</p>
        </FormSignIn>
      </PageSignIn>
    </>
  );
};

export default SignUp;
