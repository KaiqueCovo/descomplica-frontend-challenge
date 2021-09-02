import * as yup from 'yup';

export const StudentValidationSchema = yup.object({
  name: yup.string().required(),
  cpf: yup.string().matches(/[\d]{3}\.[\d]{3}\.[\d]{3}-[\d]{2}/, "CPF Inválido").required(),
  email: yup.string().email().required()
});

