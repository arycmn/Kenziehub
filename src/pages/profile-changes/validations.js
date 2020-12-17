import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email("email invalido").required("Campo obrigatorio"),
  name: yup
    .string()
    .min(3, "O nome deve conter no mínimo 3 letras")
    .required("Campo obrigatorio"),
  bio: yup.string().required("Campo obrigatorio"),
  contact: yup.string().required("Campo obrigatorio"),
  password: yup.string().optional(),
  password_confirm: yup
    .string()
    .optional()
    .oneOf([yup.ref("password")], "A senha deve ser igual"),
  course_module: yup.string().required("Campo obrigatorio"),
});
