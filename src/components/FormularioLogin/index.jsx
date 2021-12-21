import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { STORAGE_KEY } from '../../utils/auth'

import { Form, FloatingLabel, Container, Button } from 'react-bootstrap'
import { ModalLoger } from '../Modal'
// import LoadSpinner from '../../components/LoadSpinner'



export default function FormularioLogin() {
  const [show, setShow] = useState(false);
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  const handleShow = () => setShow(true);
  const history = useHistory()
  

  const rand = () => {
    return Math.random().toString(36).substr(2)
  }

  const token = () => {
    return rand() + rand()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      if (usuario === 'tuba' && senha === '123456') {
        localStorage.setItem(STORAGE_KEY, token())
        history.push('/dashboard')
      } else {
        window.alert('Usuário ou senha inválidos')
      }
    }, 3000)
  }


  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="validationUsuario">
          <FloatingLabel controlId="floatingInput" label="Usuário">
            <Form.Control onChange={e => setUsuario(e.target.value)} type="text" placeholder="tuba" required />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationSenha">
          <FloatingLabel controlId="floatingPassword" label="Senha">
            <Form.Control onChange={e => setSenha(e.target.value)} type="password" placeholder="Senha" required />
            <Form.Control.Feedback type="invalid">
              Por favor insira uma senha válida
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Button type="submit" onClick={handleShow} variant="outline-primary">
          Entrar
        </Button>
      </Form >

      {show ? <ModalLoger show="show" titulo="Seja bem vindo!" subtitulo="Carregando as informações, por favor aguarde." /> : null}

    </Container>
  )
}
