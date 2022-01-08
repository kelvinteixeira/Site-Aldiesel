import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Form, Button, Modal } from 'react-bootstrap'
import { IoMdLogIn, IoMdLock } from "react-icons/io";
import { Formik, Field, ErrorMessage } from 'formik'
import { SignupSchema } from '../../utils/schema'
import { STORAGE_KEY } from '../../utils/auth'
import { token } from '../../utils/token'
import Logo from '../../Assets/logo.png'
import styled from 'styled-components'

export default function FormularioLogin() {
  const [showModal, setShowModal] = useState(false)
  const history = useHistory()

  function handleClose() {
    setShowModal(false)
  }

  function onSubmit(values, actions) {
    if (values.usuario === process.env.REACT_APP_USUARIO && values.senha === process.env.REACT_APP_SENHA) {
      localStorage.setItem(STORAGE_KEY, token())
      history.push('/dashboard')
    }
    if (values.usuario === process.env.REACT_APP_USUARIO2 && values.senha === process.env.REACT_APP_SENHA) {
      localStorage.setItem(STORAGE_KEY, token())
      history.push('/dashboard')
    } else {
      setShowModal(true)
    }
  }

  return (
    < Container >
      <ImgLogo src={Logo} alt="img da Aldiesil" />
      <Card>
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
              <CardContent>

                <Title>Entrar na sua conta</Title>

                <FormGroupStyled >
                  <IoMdLogInStyled />
                  <Form.Label  >Usuário</Form.Label>
                  <FieldStyled name='usuario' />
                  <ErrorMessage name='usuario'>
                    {msg => <MsgError>Usuário é obrigátorio</MsgError>}
                  </ErrorMessage>
                </FormGroupStyled>

                <FormGroupStyled>
                  <IoMdLockStyled />
                  <Form.Label>Senha</Form.Label>
                  <FieldStyled name='senha' type="password" />
                  <ErrorMessage name='senha'>
                    {msg => <MsgError>senha é obrigátorio</MsgError>}
                  </ErrorMessage>
                </FormGroupStyled>

                <ButtonStyled type="submit" variant="outline-primary">Entrar</ButtonStyled>
                <hr />

              </CardContent>
            </Form>
          )}
        </Formik >
      </Card>

      <Modal centered size='xs' className="no-print" show={showModal} onHide={handleClose}>
        <Modal.Title> <Title>Algo deu errado! </Title></Modal.Title>

        <Modal.Body><SubTitle>Usúario ou senha podem estar errados</SubTitle></Modal.Body>
        <Modal.Footer>
          <ButtonStyled variant='outline-primary' onClick={handleClose}>Fechar</ButtonStyled>
        </Modal.Footer>
      </Modal>

    </Container >
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh ;
`;

const Card = styled.div`
  width: 25rem;
  height: 25rem;
  border: 0.15rem solid #8e9cca;
  border-radius: 0.6rem;
  background-color: white;
  box-shadow: 0.15rem 0.2rem 0.4rem 0.1rem #6776ac;
`;

const CardContent = styled.div`
  padding: 3rem, 2rem;
  margin: 1rem 3rem 1rem 3rem;
`;

const ImgLogo = styled.img`
  width: 22rem;
`;

const Title = styled.h3`
  text-align: center;
  padding: 2rem 0 1rem 0;
  color: #8e9cca;
  font-weight: bold;
`;

const SubTitle = styled.h6`
  text-align: center;
  color: #8e9cca;
  font-weight: bold;
`;

const FormGroupStyled = styled(Form.Group)`
  text-align: left;
`

const FieldStyled = styled(Field)`
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 0.1rem solid #8e9cca;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.5s ease-in-out;
  outline: none;
  font-family: 'Poppins', sans-serif;
  
  :hover {
    border: 0.1rem solid #000;
  }
  `

const ButtonStyled = styled(Button)`
  color: #8e9cca;
  border-color: #8e9cca;
  margin-top: 2rem;
  width: 100%;
  transition: ease-in-out 0.5s;
  font-weight: bold;
  :hover{
   background-color: #8e9cca ;
   border-color: #000 ;

  }
`;

const IoMdLogInStyled = styled(IoMdLogIn)`
  color: #8e9cca;
`;

const IoMdLockStyled = styled(IoMdLock)`
  color: #8e9cca;
`;

const MsgError = styled.span`
  color: red;
  font-size: 0.7rem;
  font-weight: bold;
`;
