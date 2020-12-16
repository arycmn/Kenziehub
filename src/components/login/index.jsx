import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormLogin,
  InfoLog,
  InputLog,
  ButtonLog,
  ButtonCloseLog,
  Image,
  FormContainer,
  ErrorParagraph,
  StyledPopup,
  Column,
  Line,
} from "./styled";
import { ButtonLogin } from "../../pages/home/style";
import { api } from "../../services/API";
import { useDispatch } from "react-redux";
import { getTokenThunk } from "../../store/modules/token/thunks";
import { getProfileThunk } from "../../store/modules/profile/thunks";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { validateThunk } from "../../store/modules/auth/thunks";

import ImageLogin from "../../images/ImageLogin.jpg";

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

  const [loading, setLoad] = useState(false);

  const handleForm = (data) => {
    setLoad(true);

    api
      .post("/sessions", { ...data })
      .then((res) => {
        message.success("Logado com sucesso");
        window.localStorage.setItem("token", res.data.token);
        dispatch(getTokenThunk(res.data.token));
        dispatch(validateThunk(true));
        dispatch(getProfileThunk(res.data.user));
        setLoad(false);
        history.push("/profile");
      })
      .catch((err) => {
        setLoad(false);
        message.error("Erro no login");

        setError("user_login", {
          message: "Email ou Senha incorreta",
        });
      });
  };

  return (
    <>
      <StyledPopup
        trigger={<ButtonLogin className="button"> Login </ButtonLogin>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <div className="header">
              <ButtonCloseLog className="close" onClick={close}>
                &times;
              </ButtonCloseLog>
            </div>
            <div className="content">
              <Image src={ImageLogin}></Image>
              <FormContainer>
                <FormLogin onSubmit={handleSubmit(handleForm)}>
                  <Column>
                    <InfoLog>Email</InfoLog>
                    <InputLog placeholder="Email" ref={register} name="email" />
                    <ErrorParagraph>{errors.email?.message}</ErrorParagraph>
                  </Column>
                  <Column>
                    {" "}
                    <InfoLog>Senha</InfoLog>
                    <InputLog
                      placeholder="Senha"
                      ref={register}
                      name="password"
                    />
                    <ErrorParagraph>{errors.password?.message}</ErrorParagraph>
                  </Column>
                  <Line>
                    <ButtonLog type="submit" disabled={loading}>
                      {loading ? <Loading3QuartersOutlined spin /> : "Entrar"}
                    </ButtonLog>
                    <ErrorParagraph>
                      {errors.user_login?.message}
                    </ErrorParagraph>
                  </Line>
                </FormLogin>
              </FormContainer>
            </div>
          </div>
        )}
      </StyledPopup>
    </>
  );
};

export default Login;
