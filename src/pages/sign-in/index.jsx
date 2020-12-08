import {
  PageSignIn,
  FormSignIn,
  InfoSign,
  InputSign,
  ButtonSign,
} from "./styled";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
  };

  return (
    <>
      <PageSignIn>
        <FormSignIn onSubmit={handleSubmit}>
          <InfoSign>Email</InfoSign>
          <InputSign />
          <InfoSign>Senha</InfoSign>
          <InputSign />
          <InfoSign>Nome</InfoSign>
          <InputSign />
          <InfoSign>Bio</InfoSign>
          <InputSign />
          <InfoSign>Contact</InfoSign>
          <InputSign />
          <InfoSign>Course Module</InfoSign>
          <InputSign type="select" />
          <ButtonSign type="submit">Enviar cadastro</ButtonSign>
        </FormSignIn>
      </PageSignIn>
    </>
  );
};

export default SignIn;
