import * as Yup from 'yup'

export const SignupSchema = Yup.object().shape({
  usuario: Yup.string().required('Usuúario é obrigatório'),
  senha: Yup.string().required('Senha é obrigatória'),
})