import { useForm } from "react-hook-form";
import {
  Container,
  PageLogin,
  FormLogin,
  InfoLog,
  InputLog,
  ButtonLog,
  Image,
  FormContainer,
} from "./styled";
import { api } from "../../services/API";
import { useDispatch } from "react-redux";
import { getTokenThunk } from "../../store/modules/token/thunks";
import { getProfileThunk } from "../../store/modules/profile/thunks";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import ImageLogin from "../../images/ImageLogin.jpg";

const Login = ({ setIsAuth }) => {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().email("email invalido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha deve conter no mínimo 6 dígitos")
      .required("Campo obrigatório"),
  });
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleForm = (data) => {
    api
      .post("/sessions", { ...data })
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        dispatch(getTokenThunk(res.data.token));
        setIsAuth(true);
        history.push("/profile");
        dispatch(getProfileThunk(res.data.user));
      })
      .catch((err) =>
        setError("user_login", {
          message: "Email ou Senha incorreta",
        })
      );
  };

  return (
    <>
      <Container>
        <Image image={ImageLogin}></Image>
        <FormContainer>
          <PageLogin>
            <FormLogin onSubmit={handleSubmit(handleForm)}>
              <InfoLog>Email</InfoLog>
              <InputLog placeholder="Email" ref={register} name="email" />
              <p>{errors.email?.message}</p>
              <InfoLog>Senha</InfoLog>
              <InputLog placeholder="Senha" ref={register} name="password" />
              <p>{errors.password?.message}</p>
              <ButtonLog type="submit">Entrar</ButtonLog>
              <p>{errors.user_login?.message}</p>
            </FormLogin>
          </PageLogin>
        </FormContainer>
      </Container>
    </>
  );
};

export default Login;
