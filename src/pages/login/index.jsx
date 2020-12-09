import { useForm } from "react-hook-form";
import axios from "axios";
import { PageLogin, FormLogin, InfoLog, InputLog, ButtonLog } from "./styled";

const Login = () => {
  const { register, handleSubmit, _watch, _errors } = useForm();

  const handleForm = (data) => {
    axios
      .post("/sessions", { ...data })
      .then((res) => {
        window.localStorage.setItem("authToken", res.data.token);
        //props.setAuth(true)
        //history.push("/users")
      })
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <>
      <PageLogin>
        <FormLogin onSubmit={handleSubmit(handleForm)}>
          <InfoLog>Email</InfoLog>
          <InputLog placeholder="Email" ref={register} name="email" />
          <InfoLog>Senha</InfoLog>
          <InputLog placeholder="Senha" ref={register} name="password" />
          <ButtonLog type="submit">Entrar</ButtonLog>
        </FormLogin>
      </PageLogin>
    </>
  );
};

export default Login;
