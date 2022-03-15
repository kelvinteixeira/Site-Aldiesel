import React, { useState, useEffect } from 'react';

// import { FormularioOsSchema } from '../../utils/schema';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col, Form, Modal } from 'react-bootstrap';
import { currentDate, currentHour } from '../../../utils/data';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Styled from '../Styles/formServiceOrder.styles';
import Logo from '../../../Assets/logo.png'
import { api } from '../../../api';
import '../Styles/formOs.css'
import { CarItems, FormActions, CostumerItems, ServiceOrderItems, DtcItems } from '../../../shared/GlobalTypes';

export type FormValues = {
  cliente: string,
  telefone: string,
  modeloCarro: string,
  placa: string,
  ano: string,
  cor: string,
  problema: string,
  diagnostico: string,
  situacao: string,
  mecanico: string,
}


export function FormServiceOrder() {
  const [serviceOrder, setServiceOrder] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [costumers, setCostumers] = useState([])
  const [cars, setCars] = useState([])
  const [dtcs, setDtcs] = useState([])
  const history = useHistory()
  const { id } = useParams<{id: string}>()

  function gerarOs() {
    window.print()
    setTimeout(() => {
      history.push('/dashboard')
    })
  }

  useEffect(() => {
    api.get(`/clientes/encontrar/${id}`)
      .then((response) => setCostumers(response.data))
    api.get(`/clientes/ordemdeservico/listar`)
      .then(response => setServiceOrder(response.data))
    api.get(`/clientes/carros/listar`)
      .then(response => setCars(response.data))
    api.get(`/clientes/ordemdeservico/dtc/listar`)
      .then(response => setDtcs(response.data))
  }, [id])

  function getDtcsInfo() {
    for (let i = 0; i <= 10; i++) {
      return dtcs.map((info: DtcItems) => (
        <div key={info.id}>
          <Row className='mb-1'>
            <Col xs={1}>
              <Styled.FieldStyled disabled value={info.code} />
            </Col>
            <Col xs={4}>
              <Styled.FieldStyled disabled value={info.dtc} />
            </Col>
            <Col xs={2}>
              <Styled.FieldStyled disabled value={info.dtcState} />
            </Col>
          </Row>
        </div>
      ))
    }
  }

  function getProcedures() {
    for (let i = 0; i <= 10; i++) {
      return dtcs.map((info: DtcItems) => (
        <div key={info.id}>
          <Row className='mb-1'>
            <Col >
              <Styled.FieldStyled value={info.actions} />
            </Col>
          </Row>
        </div>
      ))
    }
  }

  function onSubmit(values: FormValues, actions: FormActions) {
    api.put(`/clientes/atualizar/${id}`, {
      situacao: values.situacao,
      mecanico: values.mecanico,
      carro_problema: values.problema,
    })
    actions.setSubmitting(false)
    actions.resetForm()
    setShowModal(true)
    setTimeout(() => {
      history.push('/dashboard')
    }, 1500)
  }

  return (
    <Styled.Container>
      <img className='print logo' src={Logo} alt="img da Aldisel"></img>
      {costumers.map((costumer: CostumerItems) => {
        return <div key={costumer.id}>
          {cars.map((car: CarItems) => (
            (costumer.id === car.id) &&
            <div key={car.id} >
              {serviceOrder.map((order: ServiceOrderItems) => (
                (order.idCar === car.id) &&
                <Formik
                  key={order.id}
                  initialValues={{
                    cliente: costumer.name,
                    telefone: costumer.phone,
                    modeloCarro: car.model,
                    placa: car.licensePlate,
                    ano: car.year,
                    cor: car.color,
                    problema: car.problem,
                    diagnostico: order.diagnosis,
                    situacao: order.situation,
                    mecanico: order.mechanic,
                  }}
                  // validationSchema={FormularioOsSchema}
                  onSubmit={onSubmit}
                >
                  {props => (
                    <Form onSubmit={props.handleSubmit} className='form mb-3'>
                      <Row >
                        <Col xs={7}>
                          <Form.Group>
                            <Form.Label>Cliente</Form.Label>
                            <ErrorMessage name='cliente' />
                            <Styled.FieldStyled disabled name='cliente' className='form-control input' />
                          </Form.Group>
                        </Col>

                        <Col>
                          <Form.Group>
                            <Form.Label>Telefone</Form.Label>
                            <ErrorMessage name='telefone' />
                            <Styled.FieldStyled disabled name='telefone' className='form-control input' />
                          </Form.Group>
                        </Col>

                        <Col>
                          <Form.Group>
                            <Form.Label>situacao</Form.Label>
                            <Styled.FieldStyled className='form-control input' name='situacao' aria-label="situacaoDTC" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row >
                        <Col xs={4}>
                          <Form.Group>
                            <Form.Label>Mecânico responsável</Form.Label>
                            <ErrorMessage name='mecanico' />
                            <Styled.FieldStyled name='mecanico' className='form-control input' />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Modelo do carro</Form.Label>
                            <ErrorMessage name='modeloCarro' />
                            <Styled.FieldStyled disabled name='modeloCarro' className='form-control input' />
                          </Form.Group>
                        </Col>
                        <Col xs={2}>
                          <Form.Group>
                            <Form.Label>Placa</Form.Label>
                            <ErrorMessage name='placa' />
                            <Styled.FieldStyled disabled name='placa' className='form-control input' />
                          </Form.Group>
                        </Col>
                        <Col xs={1}>
                          <Form.Group>
                            <Form.Label>Ano</Form.Label>
                            <ErrorMessage name='ano' />
                            <Styled.FieldStyled disabled name='ano' className='form-control input' />
                          </Form.Group>
                        </Col>
                        <Col xs={2}>
                          <Form.Group>
                            <Form.Label>Cor</Form.Label>
                            <ErrorMessage name='cor' />
                            <Styled.FieldStyled disabled name='cor' className='form-control input' />
                          </Form.Group>
                        </Col>

                      </Row>

                      <h6 className='form-title' >Descrição do problema</h6>
                      <Form.Group>
                        <Field name='problema' className='form-control input textareasSimples' as='textarea' />
                      </Form.Group>

                      <h6 className='form-title' >Diagnóstico</h6>
                      <Form.Group>
                        <Field name='diagnostico' className=' form-control input textareasSimples' as='textarea' />
                      </Form.Group>
                      <Row>
                        <Col xs={2}>
                          <Form.Label>Código</Form.Label>
                        </Col>
                        <Col>
                          <Form.Label>Dtc</Form.Label>
                        </Col>
                        <Col xs={3}>
                          <Form.Label>SituaçãoDtc</Form.Label>
                        </Col>
                      </Row>
                      {getDtcsInfo()}

                      <h6 className='form-title' >Procedimentos</h6>

                      {getProcedures()}

                      <h6 className='form-title' >Observações adicionais</h6>
                      <Form.Group className='mb-2' controlId="formObservacoes">
                        <Form.Control size="sm" autoComplete='off' as="textarea" rows={12} />
                      </Form.Group>

                      <Styled.DivButtons>
                        <Styled.ButtonStyled className='no-print btn' disabled={!props.isValid} variant="outline-primary" type="submit">
                          Atualizar OS
                        </Styled.ButtonStyled>
                        <Styled.ButtonStyled onClick={gerarOs} className='no-print btn' disabled={!props.isValid} variant="outline-primary" type="button">
                          Imprimir
                        </Styled.ButtonStyled>
                      </Styled.DivButtons>
                    </Form>
                  )}
                </Formik>
              ))}
            </div>
          ))}

          <Modal centered className="no-print" show={showModal} onHide={() => setShowModal(false)}>
            <Styled.SpinnerStyled animation="border" variant='danger' />
            <Modal.Title> <Styled.Title>Ordem de serviço atulizado</Styled.Title></Modal.Title>
            <Modal.Body><Styled.SubTitle>Redirecionando para o pátio</Styled.SubTitle></Modal.Body>
          </Modal>
          <h6 className='print text-right'>{`Ordem de serviço gerada em ${currentDate} ás ${currentHour}`}</h6>
        </div>
      })}
    </Styled.Container >
  )
}

