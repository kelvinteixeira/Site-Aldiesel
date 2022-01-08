import * as Yup from 'yup'
import { FcHighPriority } from "react-icons/fc";

Yup.setLocale({
  mixed: {
    default: 'Não é válido',
  },
  number: {
    min: 'DDD com os 9 dígitos',
  },
});

export const SignupSchema = Yup.object().shape({
  usuario: Yup.string().required(),
  senha: Yup.string().required(),
})

export const FormularioOsSchema = Yup.object().shape({
  cliente: Yup.string().required(<FcHighPriority/>),
  telefone: Yup.string().required(<FcHighPriority/>),
  osNumero: Yup.string().required(<FcHighPriority/>),
  mecanico: Yup.string().required(<FcHighPriority/>),
  modeloCarro: Yup.string().required(<FcHighPriority/>),
  placa: Yup.string().required(<FcHighPriority/>),
  ano: Yup.string().required(<FcHighPriority/>),
  cor: Yup.string().required(<FcHighPriority/>),
  descricaoProblema: Yup.string().required(<FcHighPriority/>),
  diagnostico: Yup.string().required(<FcHighPriority/>),
})