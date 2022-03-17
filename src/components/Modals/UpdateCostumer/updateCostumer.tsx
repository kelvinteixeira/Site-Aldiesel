import React, { useState, useEffect } from 'react';

import { ClientInfoSchema } from '../../../utils/Yup/schema';
import { Form, Modal, Row, Col } from 'react-bootstrap';
import * as Styled from './updateCostumer.styles';
import { Formik, ErrorMessage } from 'formik';
import { api } from '../../../api';
import { CostumerItems } from '../../../shared/GlobalTypes';
import { AldieselButton } from '../../AldieselButton/aldieselButton';

type ModalDeleteCostumerProps = {
  idCostumer: number,
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

export function ModalUpdateCostumer(params: ModalDeleteCostumerProps) {
  const [showModal, setShowModal] = useState(false)
  const [costumers, setCostumers] = useState([])

  useEffect(() => {
    api.get(`/clientes/encontrar/${params.idCostumer}`)
      .then((response) => setCostumers(response.data))
  }, [params.idCostumer])

  function onSubmit(values: FormValues, actions: FormActions) {
    api.put(`/clientes/atualizar/${params.idCostumer
      }`, {
      name: values.name,
      phone: values.phone,
      street: values.street,
      houseNumber: values.houseNumber,
      district: values.district,
      city: values.city,
      state: values.state,
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

        {costumers.map((costumer: CostumerItems) => (
          <Formik
            key={costumer.id}
            initialValues={{
              name: costumer.name,
              phone: costumer.phone,
              street: costumer.street,
              houseNumber: costumer.houseNumber,
              district: costumer.district,
              state: costumer.state,
              city: costumer.city,
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

                  <Styled.DivButtons>
                    <AldieselButton type="submit" title='Atualizar'></AldieselButton>
                  </Styled.DivButtons>
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

