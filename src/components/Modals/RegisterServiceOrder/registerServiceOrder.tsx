import React, { useState } from 'react'

import { Formik, Field, ErrorMessage, FieldArray } from 'formik';
import { FormActions } from '../../../shared/GlobalTypes';
import { Form, Modal, Row, Col } from 'react-bootstrap';
import * as Styled from './registerServiceOrder.styles';
// import { AddCarSchema } from '../../utils/schema';
import { currentDate } from '../../../utils/data';
import { api } from '../../../api';

type ModalRegisterServiceOrderProps = {
  idCar: number | undefined,
  onHide: () => void
  show: boolean
}

type FormValues = {
  situation: string,
  diagnosis: string,
  mechanic: string,
  dtcsInfo: any
}

type DtcsInfoItems = {
  actions: Array<string>
  code: string,
  dtc: string,
  dtcState: string
  idServiceOrder: number,
}

export function ModalRegisterServiceOrder(params: ModalRegisterServiceOrderProps) {
  const [showModal, setShowModal] = useState(false)

  function onSubmit(values: FormValues, actions: FormActions) {
    api.post(`/ordemdeservico/adicionar`, {
      diagnosis: values.diagnosis,
      situation: values.situation,
      mechanin: values.mechanic,
      changeDate: currentDate,
      idCar: params.idCar
    })
    values.dtcsInfo.map((info: any) => (
      api.post(`/dtc/adicionar`, {
        code: info.code,
        dtc: info.dtc,
        dtcState: info.dtcState,
        idServiceOrder: params.idCar,
        actions: info.actions,
      })
    ))
    actions.setSubmitting(false)
    actions.resetForm()
    setShowModal(true)
    setTimeout(() => {
      setShowModal(false)
      params.onHide()
      // window.location.reload();
    }, 1000);
  }

  return (
    < Styled.Container >
      <Modal backdrop="static" show={params.show} onHide={params.onHide} id_car='true' centered >
        <Modal.Header closeButton></Modal.Header>
        <Formik
          initialValues={{
            diagnosis: '',
            situation: '',
            mechanic: '',
            dtcsInfo: ['', '', '', '', '', '', '', '', '', '',],
            actions: ['', '', '', '', '', '', '', '', '',]
          }}
          // validationSchema={AddCarSchema}
          onSubmit={onSubmit}
        >
          {props => (
            <Form onSubmit={props.handleSubmit} >
              <Styled.CardContent>
                <Styled.Title> <Styled.FiToolStyled /> Informações iniciais</Styled.Title>

                <Styled.FormGroupStyled >
                  <Form.Label >Diagnóstico</Form.Label>
                  <Field as='textarea' name='diagnostico' className='form-control input textareasSimples' />
                  <ErrorMessage name='diagnostico'>
                    {msg => <Styled.MsgError>diagnóstico é obrigátorio</Styled.MsgError>}
                  </ErrorMessage>
                </Styled.FormGroupStyled>

                <Row>
                  <Col>
                    <Styled.FormGroupStyled >
                      <Form.Label>Mecânico responsável</Form.Label>
                      <Styled.FieldStyled name='mecanico' />
                      <ErrorMessage name='mecanico'>
                        {msg => <Styled.MsgError>Mecânico é obrigátorio</Styled.MsgError>}
                      </ErrorMessage>
                    </Styled.FormGroupStyled>
                  </Col>
                  <Col xs={4}>
                    <Styled.FormGroupStyled >
                      <Form.Label>Situação</Form.Label>
                      <Styled.FieldStyled name='situacao' />
                      <ErrorMessage name='situacao'>
                        {msg => <Styled.MsgError>Situação é obrigátorio</Styled.MsgError>}
                      </ErrorMessage>
                    </Styled.FormGroupStyled>
                  </Col>

                </Row>
                <Styled.Title ><Styled.BsGearStyled /> DTCs </Styled.Title>

                <Row>
                  <Col xs={2}>
                    <Form.Label>Código</Form.Label>
                  </Col>
                  <Col>
                    <Form.Label>Dtc</Form.Label>
                  </Col>
                  <Col xs={3}>
                    <Form.Label>Situação</Form.Label>
                  </Col>
                  <Col xs={1}>
                    <Form.Label></Form.Label>
                  </Col>
                </Row>
                <FieldArray
                  name="dtcsInfo"
                  render={arrayHelpers => (
                    <div>
                      {props.values.dtcsInfo.map((dtcs, indexDtcs) => (
                        <Row className='mb-1' key={indexDtcs}>
                          <Col xs={2}>
                            <Styled.FieldStyled name={`dtcsInfo.${indexDtcs}.code`} />
                          </Col>
                          <Col>
                            <Styled.FieldStyled name={`dtcsInfo.${indexDtcs}.dtc`} />
                          </Col>
                          <Col xs={3}>
                            <Styled.FieldStyled name={`dtcsInfo.${indexDtcs}.dtcState`} />
                          </Col>
                        </Row>
                      ))}
                    </div>

                  )}
                />

                <Styled.Title ><Styled.BsPinStyled /> Procedimentos </Styled.Title>


                <FieldArray
                  name="dtcsInfo"
                  render={arrayHelpers => (
                    <div>
                      {props.values.dtcsInfo.map((detalhes, indexDetalhes) => (
                        <Row className='mb-1' key={indexDetalhes}>
                          <Col >
                            <Styled.FieldStyled name={`dtcsInfo.${indexDetalhes}.procedimentos`} />
                          </Col>
                        </Row>
                      ))}
                    </div>
                  )}
                />

                <Styled.ButtonStyled type="submit" variant="outline-primary">Enviar</Styled.ButtonStyled>
                <hr />

              </Styled.CardContent>
            </Form>
          )}
        </Formik >
      </Modal>

      <Modal centered size='sm' className="no-print" show={showModal} onHide={() => setShowModal(false)}>
        <Styled.SpinnerStyled animation="border" variant='danger' />
        <Modal.Title> <Styled.SubTitle>Cadastrando Ordem de serviço...</Styled.SubTitle></Modal.Title>
      </Modal>

    </Styled.Container >
  )
}