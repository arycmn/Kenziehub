import { useState } from "react";
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
  FormContainer,
  SelectSign,
  ErrorParagraph,
  StyledPopup,
  ButtonSign,
} from "./styled";
import imageSignup from "../../images/imageSignup.jpg";
import { message } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { ButtonSingUp } from "../../pages/home/style";

const SingUp = () => {
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

  const [loading, setLoad] = useState(false);

  const handleForm = (data) => {
    setLoad(true);

    api
      .post("/users", { ...data })
      .then((res) => {
        setLoad(false);

        history.push("/login");
        message.success("Cadastrado com sucesso");
      })
      .catch((err) => {
        setLoad(false);
        message.error("Erro no cadastro");

        setError("user_register", {
          message: "Email já existe",
        });
      });
  };
  return (
    <>
      <StyledPopup
        trigger={<ButtonSingUp className="button"> Cadastre-se </ButtonSingUp>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Cadastro </div>
            <div className="content">
              <Container image={imageSignup}>
                <FormContainer>
                  <FormSignIn onSubmit={handleSubmit(handleForm)}>
                    <InfoSign>Email</InfoSign>
                    <InputSign
                      placeholder="Email"
                      name="email"
                      ref={register}
                    />
                    <ErrorParagraph>{errors.email?.message}</ErrorParagraph>

                    <InfoSign>Nome</InfoSign>
                    <InputSign placeholder="Nome" name="name" ref={register} />
                    <ErrorParagraph>{errors.name?.message}</ErrorParagraph>

                    <InfoSign>Bio</InfoSign>
                    <InputSign
                      placeholder="Sobre você"
                      name="bio"
                      ref={register}
                    />
                    <ErrorParagraph>{errors.bio?.message}</ErrorParagraph>

                    <InfoSign>Contact</InfoSign>
                    <InputSign
                      placeholder="Contato"
                      name="contact"
                      ref={register}
                    />
                    <ErrorParagraph>{errors.contact?.message}</ErrorParagraph>

                    <InfoSign>Senha</InfoSign>
                    <InputSign
                      placeholder="Senha"
                      name="password"
                      ref={register}
                    />
                    <ErrorParagraph>{errors.password?.message}</ErrorParagraph>

                    <InfoSign>Confirme a senha</InfoSign>
                    <InputSign
                      placeholder="confirme a senha"
                      name="password_confirm"
                      ref={register}
                    />
                    <ErrorParagraph>
                      {errors.password_confirm?.message}
                    </ErrorParagraph>

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
                    <ErrorParagraph>
                      {errors.course_module?.message}
                    </ErrorParagraph>

                    <ButtonSign type="submit" disabled={loading}>
                      {loading ? (
                        <Loading3QuartersOutlined spin />
                      ) : (
                        "Cadastrar"
                      )}
                    </ButtonSign>
                    <ErrorParagraph>
                      {errors.user_register?.message}
                    </ErrorParagraph>
                  </FormSignIn>
                </FormContainer>
              </Container>
            </div>
          </div>
        )}
      </StyledPopup>
    </>
  );
};

export default SingUp;
