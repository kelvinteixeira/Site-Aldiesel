import React, { useState, useEffect } from 'react';

import { ClientInfoSchema } from '../../../utils/Yup/schema';
import { Form, Modal, Row, Col } from 'react-bootstrap';
import * as Styled from './updateCostumer.styles';
import { Formik, ErrorMessage } from 'formik';
import { api } from '../../../api';

type ModalDeleteCostumerProps = {
  id_costumer: number | undefined,
  onHide: () => void,
  show: boolean
}

type FormActions = {
  setSubmitting: (props: boolean) => void
  resetForm: () => void
}

type FormValues = {
  name: string,
  phone: string
  street: string,
  houseNumber: string,
  district: string,
  city: string,
  state: string
}

type Costumer = {
  id_cliente: number
  nome: string,
  telefone: string,
  endereco_rua: string,
  endereco_numero: string,
  endereco_bairro: string,
  endereco_cidade: string,
  endereco_estado: string
}

export function ModalUpdateCostumer(params: ModalDeleteCostumerProps) {
  const [showModal, setShowModal] = useState(false)
  const [costumers, setCostumers] = useState([])

  useEffect(() => {
    api.get(`/clientes/encontrar/${params.id_costumer
      }`)
      .then((response) => setCostumers(response.data))
  }, [params.id_costumer])

  function onSubmit(values: FormValues, actions: FormActions) {
    api.put(`/clientes/atualizar/${params.id_costumer
      }`, {
      nome: values.name,
      telefone: values.phone,
      endereco_rua: values.street,
      endereco_numero: values.houseNumber,
      endereco_bairro: values.district,
      endereco_cidade: values.city,
      endereco_estado: values.state,
    })
    actions.setSubmitting(false)
    actions.resetForm()
    setShowModal(true)
    setTimeout(() => {
      setShowModal(false)
      params.onHide()
      window.location.reload();
    }, 1500)
  }

  return (
    < Styled.Container >
      <Modal show={params.show} onHide={params.onHide} id_costumer='true' centered>

        {costumers.map((costumer: Costumer) => (
          <Formik
            key={costumer.id_cliente}
            initialValues={{
              name: costumer.nome,
              phone: costumer.telefone,
              street: costumer.endereco_rua,
              houseNumber: costumer.endereco_numero,
              district: costumer.endereco_bairro,
              state: costumer.endereco_estado,
              city: costumer.endereco_cidade,
            }}
            validationSchema={ClientInfoSchema}
            onSubmit={onSubmit}
          >
            {props => (
              <Form onSubmit={props.handleSubmit} >
                <Styled.CardContent>

                  <Styled.Title>Atualização de dados</Styled.Title>

                  <Row className='mb-1'>
                    <Col xs={8}>
                      <Styled.FormGroupStyled>
                        <Form.Label > Nome Completo</Form.Label>
                        <Styled.FieldStyled name='name' />
                        <ErrorMessage name='name'>
                          {msg => <Styled.MsgError>Nome é obrigátorio</Styled.MsgError>}
                        </ErrorMessage>
                      </Styled.FormGroupStyled>
                    </Col>

                    <Col>
                      <Styled.FormGroupStyled>
                        <Form.Label>Telefone</Form.Label>
                        <Styled.FieldStyled name='phone' />
                        <ErrorMessage name='phone'>
                          {msg => <Styled.MsgError>Telefone é obrigátorio</Styled.MsgError>}
                        </ErrorMessage>
                      </Styled.FormGroupStyled>
                    </Col>
                    
                  </Row>

                  <Styled.Title>  <Styled.AiOutlineHomeStyled /> Informações do endereço</Styled.Title>

                  <Row>
                    <Col xs={9}>
                      <Styled.FormGroupStyled >
                        <Form.Label>Rua</Form.Label>
                        <Styled.FieldStyled name='street' />
                        <ErrorMessage name='street'>
                          {msg => <Styled.MsgError>Rua é obrigátorio</Styled.MsgError>}
                        </ErrorMessage>
                      </Styled.FormGroupStyled>
                    </Col>
                    <Col>
                      <Styled.FormGroupStyled >
                        <Form.Label>nº</Form.Label>
                        <Styled.FieldStyled name='houseNumber' />
                        <ErrorMessage name='houseNumber'>
                          {msg => <Styled.MsgError>Número é obrigátorio</Styled.MsgError>}
                        </ErrorMessage>
                      </Styled.FormGroupStyled>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Styled.FormGroupStyled >
                        <Form.Label>Bairro</Form.Label>
                        <Styled.FieldStyled name='district' />
                        <ErrorMessage name='district'>
                          {msg => <Styled.MsgError>Bairro é obrigátorio</Styled.MsgError>}
                        </ErrorMessage>
                      </Styled.FormGroupStyled>
                    </Col>
                    <Col>
                      <Styled.FormGroupStyled >
                        <Form.Label>Cidade</Form.Label>
                        <Styled.FieldStyled name='city' />
                        <ErrorMessage name='city'>
                          {msg => <Styled.MsgError>Cidade é obrigátorio</Styled.MsgError>}
                        </ErrorMessage>
                      </Styled.FormGroupStyled>

                    </Col>
                    <Col>
                      <Styled.FormGroupStyled >
                        <Form.Label>Estado</Form.Label>
                        <Styled.FieldStyled name='state' />
                        <ErrorMessage name='state'>
                          {msg => <Styled.MsgError>Estado é obrigátorio</Styled.MsgError>}
                        </ErrorMessage>
                      </Styled.FormGroupStyled>
                    </Col>
                  </Row>

                  <Styled.ButtonStyled type="submit" variant="outline-primary">Atualizar</Styled.ButtonStyled>
                  <hr />

                </Styled.CardContent>
              </Form>
            )}
          </Formik >
        ))}

        <Modal centered size='sm' className="no-print" show={showModal} onHide={() => setShowModal(false)}>
          <Styled.SpinnerStyled animation="border" variant='danger' />
          <Modal.Title> <Styled.ModalTitle>Atualizando Dados...</Styled.ModalTitle></Modal.Title>
        </Modal>

      </Modal>
    </Styled.Container >
  )
}

