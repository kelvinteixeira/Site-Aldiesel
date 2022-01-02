import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { STORAGE_KEY } from '../../utils/auth'
import { token } from '../../utils/token'
import './formularioLogin.css'
import { Form, Button } from 'react-bootstrap'
import Logo from '../../Assets/logo.png'


export default function FormularioLogin() {

  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (usuario === 'tuba' && senha === '123456') {
      localStorage.setItem(STORAGE_KEY, token())
      history.push('/dashboard')
    } else {
      window.alert('Usuário ou senha inválidos')
    }
  }

  return (
    <div className='container-login'>
      <div className='form-login'>
        <img src={Logo} alt="img da Aldisel"></img>
        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-1 inputLogin" controlId="validationUsuario">
            <Form.Label >Usuário</Form.Label>
            <Form.Control size='sm' onChange={e => setUsuario(e.target.value)} type="text" placeholder="tuba" required />
          </Form.Group>
          <Form.Group className="mb-3 inputLogin" controlId="validationSenha">
            <Form.Label>Senha</Form.Label>
            <Form.Control size='sm' onChange={e => setSenha(e.target.value)} type="password" placeholder="Senha" required />
          </Form.Group>
          <Button className='btn-login' size='sm' type="submit" variant="outline-danger">
            Entrar
          </Button>
        </Form >
      </div>
    </div>
  )
}
