import { useForm } from "react-hook-form";
import { PageLogin, FormLogin, InfoLog, InputLog, ButtonLog } from "./styled";
import { api } from "../../services/API";
import { useSelector, useDispatch } from "react-redux";
import { getTokenThunk } from "../../store/modules/token/thunks";

const Login = () => {
  const { register, handleSubmit, _watch, _errors } = useForm();

  const selector = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const handleForm = (data) => {
    api
      .post("/sessions", { ...data })
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        dispatch(getTokenThunk(res.data.token));
        //props.setAuth(true)
        //history.push("/users")
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const mostraToken = () => {
    console.log(selector);
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
        <button onClick={mostraToken}>Button ttest token</button>
      </PageLogin>
    </>
  );
};

export default Login;
