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
import { AldieselButton } from '../../../components/AldieselButton/aldieselButton';

export type FormValues = {
  costumer: string,
  phone: string,
  model: string,
  licensePlate: string,
  year: string,
  color: string,
  problem: string,
  diagnosis: string,
  situation: string,
  mechanic: string,
}


export function FormServiceOrder() {
  const [serviceOrder, setServiceOrder] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [costumers, setCostumers] = useState([])
  const [cars, setCars] = useState([])
  const [dtcs, setDtcs] = useState([])
  const history = useHistory()
  const { id } = useParams<{ id: string }>()

  function gerarOs() {
    window.print()
    setTimeout(() => {
      history.push('/dashboard')
    })
  }

  useEffect(() => {
    api.get(`/clientes/encontrar/${id}`)
      .then((response) => setCostumers(response.data))
    api.get(`/ordemdeservico/listar`)
      .then(response => setServiceOrder(response.data))
    api.get(`/carros/listar`)
      .then(response => setCars(response.data))
    api.get(`/dtc/listar`)
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
      situacao: values.situation,
      mecanico: values.mechanic,
      carro_problema: values.problem,
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
                    costumer: costumer.name,
                    phone: costumer.phone,
                    model: car.model,
                    licensePlate: car.licensePlate,
                    year: car.year,
                    color: car.color,
                    problem: car.problem,
                    diagnosis: order.diagnosis,
                    situation: order.situation,
                    mechanic: order.mechanic,
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
                            <ErrorMessage name='costumer' />
                            <Styled.FieldStyled disabled name='costumer' className='form-control input' />
                          </Form.Group>
                        </Col>

                        <Col>
                          <Form.Group>
                            <Form.Label>Telefone</Form.Label>
                            <ErrorMessage name='phone' />
                            <Styled.FieldStyled disabled name='phone' className='form-control input' />
                          </Form.Group>
                        </Col>

                        <Col>
                          <Form.Group>
                            <Form.Label>situacao</Form.Label>
                            <Styled.FieldStyled className='form-control input' name='situation' aria-label="situacaoDTC" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row >
                        <Col xs={4}>
                          <Form.Group>
                            <Form.Label>Mecânico responsável</Form.Label>
                            <ErrorMessage name='mechanic' />
                            <Styled.FieldStyled name='mechanic' className='form-control input' />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Modelo do carro</Form.Label>
                            <ErrorMessage name='model' />
                            <Styled.FieldStyled disabled name='model' className='form-control input' />
                          </Form.Group>
                        </Col>
                        <Col xs={2}>
                          <Form.Group>
                            <Form.Label>Placa</Form.Label>
                            <ErrorMessage name='licensePlate' />
                            <Styled.FieldStyled disabled name='licensePlate' className='form-control input' />
                          </Form.Group>
                        </Col>
                        <Col xs={1}>
                          <Form.Group>
                            <Form.Label>Ano</Form.Label>
                            <ErrorMessage name='year' />
                            <Styled.FieldStyled disabled name='year' className='form-control input' />
                          </Form.Group>
                        </Col>
                        <Col xs={2}>
                          <Form.Group>
                            <Form.Label>Cor</Form.Label>
                            <ErrorMessage name='color' />
                            <Styled.FieldStyled disabled name='color' className='form-control input' />
                          </Form.Group>
                        </Col>

                      </Row>

                      <h6 className='form-title' >Descrição do problema</h6>
                      <Form.Group>
                        <Field name='problem' className='form-control input textareasSimples' as='textarea' />
                      </Form.Group>

                      <h6 className='form-title' >Diagnóstico</h6>
                      <Form.Group>
                        <Field name='diagnosis' className=' form-control input textareasSimples' as='textarea' />
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
                          <AldieselButton
                            className='no-print btn'
                            disabled={!props.isValid}
                            type="submit"
                            title='Atualizar Ordem de Serviço'>
                        </AldieselButton>
                        <AldieselButton
                          className='no-print btn'
                          onClick={gerarOs}
                          disabled={!props.isValid}
                          type="button"
                          title='Imprimir'>
                        </AldieselButton>
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

