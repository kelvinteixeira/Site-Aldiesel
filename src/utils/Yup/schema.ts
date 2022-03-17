import * as Yup from 'yup'

export const SigninSchema = Yup.object().shape({
  user: Yup.string().required(),
  password: Yup.string().required(),
})

export const ClientInfoSchema = Yup.object().shape({
  name: Yup.string().required(),
  phone: Yup.string().required(),
  street: Yup.string().required(),
  houseNumber: Yup.string().required(),
  district: Yup.string().required(),
  state: Yup.string().required(),
  city: Yup.string().required(),
})

export const RegisterCarSchema = Yup.object().shape({
  model: Yup.string().required(),
  licensePlate: Yup.string().required(),
  year: Yup.string().required(),
  color: Yup.string().required(),
  problem: Yup.string().required(),
})
