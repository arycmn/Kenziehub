import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email("email invalido").optional(),
  name: yup.string().optional().min(3, "O nome deve conter no mínimo 3 letras"),
  bio: yup.string().optional(),
  contact: yup.string().optional(),
  password: yup.string().optional(),
  password_confirm: yup
    .string()
    .optional()
    .oneOf([yup.ref("password")], "A senha deve ser igual"),
  course_module: yup.string().optional(),
});
