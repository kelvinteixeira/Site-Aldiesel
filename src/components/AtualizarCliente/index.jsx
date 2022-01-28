import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { Form, Button, Modal, Row, Col, Spinner } from 'react-bootstrap'
import { Formik, Field, ErrorMessage } from 'formik'
import { UpdateClient } from '../../utils/schema'
import { AiOutlineHome } from "react-icons/ai";
import styled from 'styled-components'
import { api } from '../../api'

export default function AtualizarDadosCliente() {
  const [showModal, setShowModal] = useState(false)
  const [clientes, setClientes] = useState([])
  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    api.get(`/clientes/encontrar/${id}`)
      .then((response) => setClientes(response.data))
  }, [id])

  function onSubmit(values, actions) {
    api.put(`/clientes/atualizar/${id}`, {
      nome: values.nome,
      telefone: values.telefone,
      endereco_rua: values.rua,
      endereco_numero: values.numero,
      endereco_bairro: values.bairro,
      endereco_cidade: values.cidade,
      endereco_estado: values.estado,
    })
    actions.setSubmitting(false)
    actions.resetForm()
    setShowModal(true)
    setTimeout(() => {
      history.push('/dashboard')
    }, 1500)
  }

  return (
    < Container >
      {clientes.map((cliente, index) => (
        <Card key={index}>
          <Formik
            initialValues={{
              nome: cliente.nome,
              telefone: cliente.telefone,
              rua: cliente.endereco_rua,
              numero: cliente.endereco_numero,
              bairro: cliente.endereco_bairro,
              estado: cliente.endereco_estado,
              cidade: cliente.endereco_cidade,
            }}
            validationSchema={UpdateClient}
            onSubmit={onSubmit}
          >
            {props => (
              <Form onSubmit={props.handleSubmit} >
                <CardContent>

                  <Title>Atualização de dados</Title>
                  <SubTitle>Cliente: {cliente.nome}</SubTitle>

                  <Row className='mb-1'>
                    <Col xs={8}>
                      <FormGroupStyled>
                        <Form.Label > Nome Completo</Form.Label>
                        <FieldStyled name='nome' />
                        <ErrorMessage name='nome'>
                          {msg => <MsgError>Nome é obrigátorio</MsgError>}
                        </ErrorMessage>
                      </FormGroupStyled>
                    </Col>

                    <Col>
                      <FormGroupStyled>
                        <Form.Label>Telefone</Form.Label>
                        <FieldStyled name='telefone' />
                        <ErrorMessage name='telefone'>
                          {msg => <MsgError>Telefone é obrigátorio</MsgError>}
                        </ErrorMessage>
                      </FormGroupStyled>
                    </Col>
                  </Row>

                  <Title>  <AiOutlineHomeStyled /> Informações do endereço</Title>

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
      ))}
    
      <Modal centered size='xs' className="no-print" show={showModal} onHide={() => setShowModal(false)}>
        <SpinnerStyled animation="border" variant='danger' />
        <Modal.Title> <Title>Cliente Atulizado</Title></Modal.Title>
        <Modal.Body><SubTitle>Redirecionando para o pátio</SubTitle></Modal.Body>
      </Modal>

    </Container >
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
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

const Title = styled.h4`
  text-align: center;
  padding-top: 2rem;
  color: #8e9cca;
  font-weight: bold;
  margin-bottom: 0;
`;

const SubTitle = styled.h6`
  text-align: center;
  color: #000;
  font-weight: bold;
  display: inherit;
  line-height: 3rem;
  margin-bottom: 0;
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
  font-size: 30px;
  margin-bottom: .5rem;
`;

const MsgError = styled.span`
  color: red;
  font-size: 0.6rem;
  font-weight: bold;
`;

const SpinnerStyled = styled(Spinner)`
  margin: auto;
  margin-top: 2rem;
`;