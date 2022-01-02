import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Field, ErrorMessage } from 'formik'
import { ModalValidacao } from '../ModalValidacao'
import { Form, Button } from 'react-bootstrap'
import { SignupSchema } from '../../utils/schema'
import { STORAGE_KEY } from '../../utils/auth'
import { token } from '../../utils/token'
import Logo from '../../Assets/logo.png'
import './formularioLogin.css'

export default function FormularioLogin() {
  const [show, setShow] = useState(false)
  const history = useHistory()

  function handleClose() {
    setShow(false)
  }

  function onSubmit(values, actions) {
    if (values.usuario === process.env.REACT_APP_USUARIO && values.senha === process.env.REACT_APP_SENHA) {
      localStorage.setItem(STORAGE_KEY, token())
      history.push('/dashboard')
    } else {
      setShow(true)
    }
  }

  return (
    <div className='container-login'>
      <div className='form-login'>
        <img src={Logo} alt="img da Aldisel"></img>
        <Formik
          initialValues={{
            usuario: '',
            senha: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={onSubmit}
          >
          {props => (

            <Form onSubmit={props.handleSubmit} >

              <Form.Group className="inputLogin" >
                <Form.Label >Usuário</Form.Label>
                <ErrorMessage name='usuario'/>
                <Field name='usuario' className='form-control' />
              </Form.Group>

              <Form.Group className="mb-3 inputLogin">
                <Form.Label>Senha</Form.Label>
                <ErrorMessage name='senha' />
                <Field name='senha' className='form-control' type="password" />
              </Form.Group>

              <Button className='btn-login' type="submit" variant="outline-danger">Entrar</Button>

            </Form >
          )}
        </Formik>

        <ModalValidacao show={show} titulo='Ops... Algo deu errado!' subtitulo='Usúario ou senha podem estar errados' close={handleClose} />
      </div>
    </div>
  )
}
