import { useForm } from "react-hook-form";
import axios from "axios";
import { PageLogin, FormLogin, InfoLog, InputLog, ButtonLog } from "./styled";

const Login = () => {
  const { register, handleSubmit, _watch, _errors } = useForm();

  const handleForm = (data) => {
    console.log(data);
    axios.get("/users").then((res) => console.log(res.data));
  };

  return (
    <>
      <PageLogin>
        <FormLogin onSubmit={handleSubmit(handleForm)}>
          <InfoLog>Usuário</InfoLog>
          <InputLog placeholder="Usuário" ref={register} name="user" />
          <InfoLog>Senha</InfoLog>
          <InputLog placeholder="Senha" ref={register} name="password" />
          <ButtonLog type="submit">Entrar</ButtonLog>
        </FormLogin>
      </PageLogin>
    </>
  );
};

export default Login;
