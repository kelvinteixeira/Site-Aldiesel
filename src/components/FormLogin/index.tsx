import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { STORAGE_KEY } from '../../utils/Authorization/auth';
import { token } from '../../utils/Authorization/token';
import { SigninSchema } from '../../utils/Yup/schema';
import { Form, Modal } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import Logo from '../../Assets/logo.png';

import * as Styled from './formLogin.styles'

type MyFormValues = {
  user: string,
  password: string
}

export default function FormLogin() {

  const [showModal, setShowModal] = useState(false)
  const history = useHistory()

  const initialValues: MyFormValues = {
    user: '',
    password: ''
  }

  
  function singin(values: MyFormValues) {
    console.log('singIn')
    if (values.user === process.env.REACT_APP_USER && values.password === process.env.REACT_APP_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, token())
      history.push('/dashboard')
    }
    if (values.user === process.env.REACT_APP_USER2 && values.password === process.env.REACT_APP_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, token())
      history.push('/dashboard')
    } else {
      setShowModal(true)
    }
  }

  return (
    < Styled.Container >
      <Styled.ImgLogo src={Logo} alt="img da Aldiesil" />
      <Styled.Card>
        <Formik
          initialValues={initialValues}
          validationSchema={SigninSchema}
          onSubmit={singin}

        >
          {props => (
            <Form onSubmit={props.handleSubmit} >
              <Styled.CardContent>

                <Styled.Title>Entrar na sua conta</Styled.Title>

                <Styled.FormGroupStyled className='mb-2' >
                  <Styled.IoMdLogInStyled />
                  <Form.Label  >Usuário</Form.Label>
                  <Styled.FieldStyled name='user' />
                  <ErrorMessage name='user'>
                    {msg => <Styled.MsgError>Usuário é obrigátorio</Styled.MsgError>}
                  </ErrorMessage>
                </Styled.FormGroupStyled>

                <Styled.FormGroupStyled className='mb-2'>
                  <Styled.IoMdLockStyled />
                  <Form.Label>Senha</Form.Label>
                  <Styled.FieldStyled name='password' type="password" />
                  <ErrorMessage name='password'>
                    {msg => <Styled.MsgError>senha é obrigátorio</Styled.MsgError>}
                  </ErrorMessage>
                </Styled.FormGroupStyled>

                <Styled.ButtonStyled type="submit" variant="outline-primary">Entrar</Styled.ButtonStyled>
                <hr />

              </Styled.CardContent>
            </Form>
          )}
        </Formik >
      </Styled.Card>

      <Modal centered className="no-print" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Styled.FiAlertCircleStyled />
        <Modal.Title> <Styled.TitleModal>Algo deu errado!</Styled.TitleModal></Modal.Title>

        <Modal.Body><Styled.SubTitle>Usúario ou senha inválidos</Styled.SubTitle></Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

    </Styled.Container >
  )
}

