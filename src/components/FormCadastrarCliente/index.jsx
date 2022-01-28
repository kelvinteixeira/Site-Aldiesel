import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Form, Button, Modal, Row, Col } from 'react-bootstrap'
import { Formik, Field, ErrorMessage } from 'formik'
import { SinginSchema } from '../../utils/Yup/schema'
import { AiOutlineHome, AiOutlineCheckCircle } from "react-icons/ai";
import { GoInfo } from "react-icons/go";
import styled from 'styled-components'
import { api } from '../../api'
import { dataAtual } from '../../utils/data'

export default function FormularioCadastrarCliente() {
  const [showModal, setShowModal] = useState(false)
  const history = useHistory()


  const goToDashboard = () => history.push('/dashboard')

  function handleClose() {
    setShowModal(false)
  }

  function onSubmit(values, actions) {
    api.post('/clientes/adicionar', {
      nome: values.nome,
      telefone: values.telefone,
      endereco_rua: values.rua,
      endereco_numero: values.numero,
      endereco_bairro: values.bairro,
      endereco_cidade: values.cidade,
      endereco_estado: values.estado,
      entrada: dataAtual
    })
    actions.setSubmitting(false)
    actions.resetForm()
    setShowModal(true)
  }

  return (
    < Container >
      <Card>
        <Formik
          initialValues={{
            nome: '',
            telefone: '',
            rua: '',
            numero: '',
            bairro: '',
            estado: '',
            cidade: '',
          }}
          validationSchema={SinginSchema}
          onSubmit={onSubmit}
        >
          {props => (
            <Form onSubmit={props.handleSubmit} >
              <CardContent>

                <Title> <GoInfoStyled /> Informações do cliente</Title>

                <Row>
                  <Col xs={8}>
                    <FormGroupStyled className='mb-3'>
                      <Form.Label > Nome Completo</Form.Label>
                      <FieldStyled name='nome' />
                      <ErrorMessage name='nome'>
                        {msg => <MsgError>Nome é obrigátorio</MsgError>}
                      </ErrorMessage>
                    </FormGroupStyled>
                  </Col>

                  <Col>
                    <FormGroupStyled className='mb-3' >
                      <Form.Label>Telefone</Form.Label>
                      <FieldStyled name='telefone' />
                      <ErrorMessage name='telefone'>
                        {msg => <MsgError>Telefone é obrigátorio</MsgError>}
                      </ErrorMessage>
                    </FormGroupStyled>
                  </Col>
                </Row>

                <SubTitle>  <AiOutlineHomeStyled /> Informações do endereço</SubTitle>

                <Row>
                  <Col xs={9}>
                    <FormGroupStyled >
                      <Form.Label>Rua</Form.Label>
                      <FieldStyled name='rua' />
                      <ErrorMessage name='rua'>
                        {msg => <MsgError>Rua é obrigátorio</MsgError>}
                      </ErrorMessage>
                    </FormGroupStyled>
                  </Col>
                  <Col>
                    <FormGroupStyled >
                      <Form.Label>nº</Form.Label>
                      <FieldStyled name='numero' />
                      <ErrorMessage name='numero'>
                        {msg => <MsgError>Número é obrigátorio</MsgError>}
                      </ErrorMessage>
                    </FormGroupStyled>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FormGroupStyled >
                      <Form.Label>Bairro</Form.Label>
                      <FieldStyled name='bairro' />
                      <ErrorMessage name='bairro'>
                        {msg => <MsgError>Bairro é obrigátorio</MsgError>}
                      </ErrorMessage>
                    </FormGroupStyled>
                  </Col>
                  <Col>
                    <FormGroupStyled >
                      <Form.Label>Cidade</Form.Label>
                      <FieldStyled name='cidade' />
                      <ErrorMessage name='cidade'>
                        {msg => <MsgError>Cidade é obrigátorio</MsgError>}
                      </ErrorMessage>
                    </FormGroupStyled>

                  </Col>
                  <Col>
                    <FormGroupStyled >
                      <Form.Label>Estado</Form.Label>
                      <FieldStyled name='estado' />
                      <ErrorMessage name='estado'>
                        {msg => <MsgError>Estado é obrigátorio</MsgError>}
                      </ErrorMessage>
                    </FormGroupStyled>
                  </Col>
                </Row>

                <ButtonStyled type="submit" variant="outline-primary">Cadastrar</ButtonStyled>
                <hr />

              </CardContent>
            </Form>
          )}
        </Formik >
      </Card>

      <Modal centered size='xs' className="no-print" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <AiOutlineCheckCircleStyled />
        <Modal.Title> <TitleModal>Cliente cadastrado com sucesso!</TitleModal></Modal.Title>
        <Modal.Body><SubTitle>Deseja cadastrar um novo cliente?</SubTitle></Modal.Body>
        <Modal.Footer>
          <DivModalFooter>
            <ButtonModalStyled variant='outline-primary' onClick={handleClose}>Confirmar</ButtonModalStyled>
            <ButtonModalStyled variant='outline-primary' onClick={goToDashboard}>Cancelar</ButtonModalStyled>
          </DivModalFooter>
        </Modal.Footer>
      </Modal>

    </Container >
  )
}

const AiOutlineCheckCircleStyled = styled(AiOutlineCheckCircle)`
  text-align: center;
  color: #218629;
  font-size: 2rem;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  width: 35rem;
  height: auto;
  border: 0.15rem solid #8e9cca;
  border-radius: 0.6rem;
  background-color: white;
  box-shadow: 0.15rem 0.2rem 0.4rem 0.1rem #6776ac;
`;

const CardContent = styled.div`
  padding: 3rem, 2rem;
  margin: 1rem 3rem 1rem 3rem;
`;

const Title = styled.h3`
  text-align: center;
  padding: 2rem 0 1rem 0;
  color: #8e9cca;
  font-weight: bold;
`;

const TitleModal = styled.h3`
  text-align: center;
  padding: 0 2.5rem 0 2.5rem;
  color: #000000;
  font-weight: bold;
`;

const SubTitle = styled.h5`
  text-align: center;
  color: #8e9cca;
  font-weight: bold;
  display: inherit;
  line-height: 3rem;
`;

const FormGroupStyled = styled(Form.Group)`
  text-align: left;
`

const FieldStyled = styled(Field)`
  width: 100%;
  height: 1.5rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.8rem;
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
  margin-top: 3rem;
  width: 100%;
  transition: ease-in-out 0.5s;
  font-weight: bold;
  :hover{
   background-color: #8e9cca ;
   border-color: #000 ;

  }
`;

const AiOutlineHomeStyled = styled(AiOutlineHome)`
  color: #8e9cca;
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

const GoInfoStyled = styled(GoInfo)`
  color: #8e9cca;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const DivModalFooter = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
margin: auto;
`;

const ButtonModalStyled = styled(Button)`
  color: #8e9cca;
  border-color: #8e9cca;
  width: 100%;
  margin-right: 1rem;
  transition: ease-in-out 0.5s;
  font-weight: bold;
  :hover{
   background-color: #8e9cca ;
   border-color: #000 ;

  }
`;
const MsgError = styled.span`
  color: red;
  font-size: 0.6rem;
  font-weight: bold;
`;
