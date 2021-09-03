import * as yup from 'yup';
import { validateCPF } from 'utils/validateCPF'

export const StudentValidationSchema = yup.object({
  name: yup.string().required('Campo Nome é obrigatório'),
  cpf: yup.string().min(14).max(14)
  .matches(/[\d]{3}\.[\d]{3}\.[\d]{3}-[\d]{2}/, "CPF Inválido")
  .required('Campo CPF é obrigatório')
  .test("is-cpf", "CPF inválido", value => value ? validateCPF(value) : true),
  email: yup.string().email('E-mail inválido').required('Campo Email é obrigatório')
});

