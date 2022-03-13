import * as Yup from 'yup'
import { FcHighPriority } from "react-icons/fc";

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
  collor: Yup.string().required(),
  problem: Yup.string().required(),
})

export const FormularioOsSchema = Yup.object().shape({
  cliente: Yup.string().required(<FcHighPriority />),
  telefone: Yup.string().required(<FcHighPriority />),
  osNumero: Yup.string().required(<FcHighPriority />),
  mecanico: Yup.string().required(<FcHighPriority />),
  modeloCarro: Yup.string().required(<FcHighPriority />),
  placa: Yup.string().required(<FcHighPriority />),
  ano: Yup.string().required(<FcHighPriority />),
  cor: Yup.string().required(<FcHighPriority />),
  descricaoProblema: Yup.string().required(<FcHighPriority />),
  diagnostico: Yup.string().required(<FcHighPriority />),
})