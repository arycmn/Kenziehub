import { PageLogin, BoxLogin, Info, Input, Button } from "./styled";

const Login = () => {
  return (
    <>
      <PageLogin>
        <BoxLogin>
          <Info>Usuário</Info>
          <Input />
          <Info>Senha</Info>
          <Input />
          <Button>Entrar</Button>
        </BoxLogin>
      </PageLogin>
    </>
  );
};

export default Login;
