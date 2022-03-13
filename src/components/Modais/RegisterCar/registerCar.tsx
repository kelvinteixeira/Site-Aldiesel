import React, { useState } from 'react';

import { RegisterCarSchema } from '../../../utils/Yup/schema';
import { Form, Modal, Row, Col } from 'react-bootstrap';
import { Formik, ErrorMessage, Field } from 'formik';
import { dataAtual } from '../../../utils/data';
import { api } from '../../../api';
import * as Styled from './registerCar.styles'

type ModalDeleteCostumerProps = {
  id_costumer: number | undefined,
  onHide: () => void,
  show: boolean
}

type FormValues = {
  model: string,
  licensePlate: string,
  year: string,
  collor: string,
  problem: string,
}

const initialValues: FormValues = {
  model: '',
  licensePlate: '',
  year: '',
  collor: '',
  problem: ''
}

type FormActions = {
  setSubmitting: (props: boolean) => void
  resetForm: () => void
}
export function ModalRegisterCar(params: ModalDeleteCostumerProps) {
  const [showModal, setShowModal] = useState(false)
  function onSubmit(values: FormValues, actions: FormActions) {
    api.post(`/clientes/carros/adicionar/${params.id_costumer
      }`, {
      modelo: values.model,
      placa: values.licensePlate,
      ano: values.year,
      cor: values.collor,
      problema: values.problem,
      id_cliente: params.id_costumer,
      entrada: dataAtual
    })
    actions.setSubmitting(false)
    actions.resetForm()
    setShowModal(true)
    setTimeout(() => {
      setShowModal(false)
      params.onHide()
      window.location.reload();
    }, 1000);
  }

  return (
    < Styled.Container >
      <Modal show={params.show} onHide={params.onHide} id_costumer='true' centered>
        <Modal.Header closeButton></Modal.Header>
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterCarSchema}
          onSubmit={onSubmit}
        >
          {props => (
            <Form onSubmit={props.handleSubmit} >
              <Styled.CardContent>
                <Styled.Title> <Styled.AiFillCarStyled /> Informações do veiculo</Styled.Title>
                <Col xs={7}>
                  <Styled.FormGroupStyled >
                    <Form.Label >Modelo</Form.Label>
                    <Styled.FieldStyled name='model' />
                    <ErrorMessage name='model'>
                      {msg => <Styled.MsgError>Modelo é obrigátorio</Styled.MsgError>}
                    </ErrorMessage>
                  </Styled.FormGroupStyled>
                </Col>

                <Row>
                  <Col>
                    <Styled.FormGroupStyled >
                      <Form.Label>Placa</Form.Label>
                      <Styled.FieldStyled name='licensePlate' />
                      <ErrorMessage name='licensePlate'>
                        {msg => <Styled.MsgError>Placa é obrigátorio</Styled.MsgError>}
                      </ErrorMessage>
                    </Styled.FormGroupStyled>
                  </Col>
                  <Col>
                    <Styled.FormGroupStyled  >
                      <Form.Label>Ano</Form.Label>
                      <Styled.FieldStyled name='year' />
                      <ErrorMessage name='year'>
                        {msg => <Styled.MsgError>Ano é obrigátorio</Styled.MsgError>}
                      </ErrorMessage>
                    </Styled.FormGroupStyled>
                  </Col>
                  <Col>
                    <Styled.FormGroupStyled  >
                      <Form.Label>Cor</Form.Label>
                      <Styled.FieldStyled name='collor' />
                      <ErrorMessage name='collor'>
                        {msg => <Styled.MsgError>Cor é obrigátorio</Styled.MsgError>}
                      </ErrorMessage>
                    </Styled.FormGroupStyled>
                  </Col>
                </Row>

                <Col>
                  <Styled.FormGroupStyled   >
                    <Form.Label>Problema</Form.Label>
                    <Field name='problem' as='textarea' className='form-control' />
                    <ErrorMessage name='problem'>
                      {msg => <Styled.MsgError>Problema é obrigátorio</Styled.MsgError>}
                    </ErrorMessage>
                  </Styled.FormGroupStyled>
                </Col>

                <Styled.ButtonStyled type="submit" variant="outline-primary">Adicionar</Styled.ButtonStyled>
                <hr />

              </Styled.CardContent>
            </Form>
          )}
        </Formik >
      </Modal>

      <Modal centered size='sm' className="no-print" show={showModal} onHide={() => setShowModal(false)}>
        <Styled.SpinnerStyled animation="border" variant='danger' />
        <Modal.Title> <Styled.SubTitle>Cadastrando veiculo...</Styled.SubTitle></Modal.Title>
      </Modal>

    </Styled.Container >
  )
}

