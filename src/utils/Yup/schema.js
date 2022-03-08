import * as Yup from 'yup'
import { FcHighPriority } from "react-icons/fc";

export const SigninSchema = Yup.object().shape({
  user: Yup.string().required(),
  password: Yup.string().required(),
})

export const SingupSchema = Yup.object().shape({
  nome: Yup.string().required(),
  telefone: Yup.string().required(),
  rua: Yup.string().required(),
  numero: Yup.string().required(),
  bairro: Yup.string().required(),
  cidade: Yup.string().required(),
  estado: Yup.string().required(),
})

export const AddCarSchema = Yup.object().shape({
  modelo: Yup.string().required(),
  placa: Yup.string().required(),
  ano: Yup.string().required(),
  cor: Yup.string().required(),
  problema: Yup.string().required(),
})

export const UpdateClient = Yup.object().shape({
  nome: Yup.string().required(),
  telefone: Yup.string().required(),
  rua: Yup.string().required(),
  numero: Yup.string().required(),
  bairro: Yup.string().required(),
  cidade: Yup.string().required(),
  estado: Yup.string().required(),
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