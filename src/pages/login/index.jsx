import { useForm } from "react-hook-form";
import { PageLogin, FormLogin, InfoLog, InputLog, ButtonLog } from "./styled";
import { api } from "../../services/API";
import { useDispatch } from "react-redux";
import { getTokenThunk } from "../../store/modules/token/thunks";
import { getProfile } from "../../store/modules/profile/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

const Login = () => {
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
        dispatch(getProfile(res.data.user));
        history.push("/profile");
      })
      .catch((err) =>
        setError("user_login", {
          message: "Email ou Senha incorreta",
        })
      );
  };

  return (
    <>
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
    </>
  );
};

export default Login;
