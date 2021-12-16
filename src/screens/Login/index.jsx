import FormularioLogin from '../../components/FormularioLogin'
import CardLogin from '../../components/CardLogin'
import Logo from '../../Assets/logo.png'
import './login.css'

export default function Login() {

  return (
    <>
      <CardLogin>
        <img  src={Logo} alt="img da Aldisel"></img>
        <FormularioLogin />
      </CardLogin>
    </>
  )
}