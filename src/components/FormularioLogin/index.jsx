import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { STORAGE_KEY } from '../../utils/auth'

import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import LoadSpinner from '../../components/LoadSpinner'



export default function FormularioLogin() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)

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
        setLoading(false)
      }
    }, 2000)
    setLoading(true)
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
        <Button type="submit" variant="outline-primary">
          Entrar
        </Button>
      </Form >
      {loading ? <LoadSpinner texto="Seja Bem vindo!"></LoadSpinner> : null}
    </Container>
  )
}
