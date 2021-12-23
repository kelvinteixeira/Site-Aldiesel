import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { STORAGE_KEY } from '../../utils/auth'
import { token } from '../../utils/token'
import './formularioLogin.css'

import { Form, Container, Button } from 'react-bootstrap'
import { ModalLoger } from '../Modal'

export default function FormularioLogin() {
  const [show, setShow] = useState(false);
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  const handleShow = () => setShow(true);
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      if (usuario === 'tuba' && senha === '123456') {
        localStorage.setItem(STORAGE_KEY, token())
        history.push('/dashboard')
      } else {
        window.alert('Usuário ou senha inválidos')
      }
      setShow(false)
    }, 3000)
  }


  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 inputLogin" controlId="validationUsuario">
          <Form.Control size='sm' onChange={e => setUsuario(e.target.value)} type="text" placeholder="tuba" required />
        </Form.Group>
        <Form.Group className="mb-3 inputLogin" controlId="validationSenha">
          <Form.Control size='sm' onChange={e => setSenha(e.target.value)} type="password" placeholder="Senha" required />
        </Form.Group>
        <Button type="submit" onClick={handleShow} variant="outline-primary">
          Entrar
        </Button>
      </Form >

      {show ? <ModalLoger show="show" titulo="Seja bem vindo!" subtitulo="Verificando credenciais, aguarde." /> : null}

    </Container>
  )
}
