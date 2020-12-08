import { PageLogin, FormLogin, InfoLog, InputLog, ButtonLog } from "./styled";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
  };

  return (
    <>
      <PageLogin>
        <FormLogin onSubmit={handleSubmit}>
          <InfoLog>Usuário</InfoLog>
          <InputLog />
          <InfoLog>Senha</InfoLog>
          <InputLog />
          <ButtonLog type="submit">Entrar</ButtonLog>
        </FormLogin>
      </PageLogin>
    </>
  );
};

export default Login;
