import React, { useState } from 'react'

import { Form, Button, Modal, Row, Col, Spinner } from 'react-bootstrap'
import { Formik, Field, ErrorMessage, FieldArray } from 'formik'
// import { AddCarSchema } from '../../utils/schema'
import { currentDate } from '../../../utils/data'
import { BsGear, BsPin } from "react-icons/bs";
import { FiTool } from "react-icons/fi";
import styled from 'styled-components'
import { api } from '../../../api'

export function ModalRegisterServiceOrder(params) {
  const [showModal, setShowModal] = useState(false)

  function onSubmit(values, actions, indexDtcs) {
    api.post(`/clientes/ordemdeservico/adicionar`, {
      diagnostico: values.diagnostico,
      situacao: values.situacao,
      mecanico: values.mecanico,
      data_alteracao: currentDate,
      id_carros: params.id_carro
    })
    values.dtcsInfo.map(info => (
      api.post(`/clientes/ordemdeservico/dtc/adicionar`, {
        codigo: info.codigo,
        dtc: info.dtc,
        estado: info.estado,
        procedimentos: info.procedimentos,
        id_carro: params.id_carro
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
    < Container >
      <Modal backdrop="static" show={params.show} onHide={params.onHide} id_car='true' centered >
        <Modal.Header closeButton></Modal.Header>
        <Formik
          initialValues={{
            diagnostico: '',
            situacao: '',
            mecanico: '',
            dtcsInfo: ['', '', '', '', '', '', '', '', '', '',],
            procedimentos: ['', '', '', '', '', '', '', '', '',]
          }}
          // validationSchema={AddCarSchema}
          onSubmit={onSubmit}
        >
          {props => (
            <Form onSubmit={props.handleSubmit} >
              <CardContent>
                <Title> <FiToolStyled /> Informações iniciais</Title>

                <FormGroupStyled >
                  <Form.Label >Diagnóstico</Form.Label>
                  <Field as='textarea' name='diagnostico' className='form-control input textareasSimples' />
                  <ErrorMessage name='diagnostico'>
                    <MsgError>diagnóstico é obrigátorio</MsgError>
                  </ErrorMessage>
                </FormGroupStyled>

                
                <Row>
                  <Col>
                    <FormGroupStyled >
                      <Form.Label>Mecânico responsável</Form.Label>
                      <FieldStyled name='mecanico' />
                      <ErrorMessage name='mecanico'>
                        {msg => <MsgError>Mecânico é obrigátorio</MsgError>}
                      </ErrorMessage>
                    </FormGroupStyled>
                  </Col>
                  <Col xs={4}>
                    <FormGroupStyled >
                      <Form.Label>Situação</Form.Label>
                      <FieldStyled name='situacao' />
                      <ErrorMessage name='situacao'>
                        {msg => <MsgError>Situação é obrigátorio</MsgError>}
                      </ErrorMessage>
                    </FormGroupStyled>
                  </Col>

                </Row>
                <Title ><BsGearStyled /> DTCs </Title>


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
                            <FieldStyled name={`dtcsInfo.${indexDtcs}.codigo`} />
                          </Col>
                          <Col>
                            <FieldStyled name={`dtcsInfo.${indexDtcs}.dtc`} />
                          </Col>
                          <Col xs={3}>
                            <FieldStyled name={`dtcsInfo.${indexDtcs}.estado`} />
                          </Col>
                        </Row>
                      ))}
                    </div>

                  )}
                />

                <Title ><BsPinStyled /> Procedimentos </Title>


                <FieldArray
                  name="dtcsInfo"
                  render={arrayHelpers => (
                    <div>
                      {props.values.dtcsInfo.map((detalhes, indexDetalhes) => (
                        <Row className='mb-1' key={indexDetalhes}>
                          <Col >
                            <FieldStyled name={`dtcsInfo.${indexDetalhes}.procedimentos`} />
                          </Col>
                        </Row>
                      ))}
                    </div>
                  )}
                />

                <ButtonStyled type="submit" variant="outline-primary">Enviar</ButtonStyled>
                <hr />

              </CardContent>
            </Form>
          )}
        </Formik >
      </Modal>

      <Modal centered size='sm' className="no-print" show={showModal} onHide={() => setShowModal(false)}>
        <SpinnerStyled animation="border" variant='danger' />
        <Modal.Title> <SubTitle>Cadastrando Ordem de serviço...</SubTitle></Modal.Title>
      </Modal>

    </Container >
  )
}

const SpinnerStyled = styled(Spinner)`
  margin: auto;
  margin-top: 2rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const CardContent = styled.div`
  padding: 3rem, 2rem;
  margin: 1rem 3rem 1rem 3rem;
`;

const Title = styled.h3`
  text-align: center;
  padding-top: 1rem;
  color: #8e9cca;
  font-weight: bold;
`;

const SubTitle = styled.h6`
  text-align: center;
  color: #000;
  font-weight: bold;
  display: inherit;
  line-height: 3rem;
  padding-bottom: 1rem;
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

const FiToolStyled = styled(FiTool)`
  color: #8e9cca;
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

const BsGearStyled = styled(BsGear)`
  color: #8e9cca;
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;
const BsPinStyled = styled(BsPin)`
  color: #8e9cca;
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

const MsgError = styled.span`
  color: red;
  font-size: 0.6rem;
  font-weight: bold;
`;
