import React, { useState, useEffect } from 'react'

import { Button, Row, Col, Form, Modal, Spinner } from 'react-bootstrap'
import { Formik, Field, ErrorMessage } from 'formik'
// import { FormularioOsSchema } from '../../utils/schema'
import { useParams, useHistory } from 'react-router-dom'
import { dataAtual, horaAtual } from '../../utils/data'
import Logo from '../../Assets/logo.png'
import styled from 'styled-components'
import { api } from '../../api'
import './formOs.css'

export default function GerarOrdemDeServico() {
  const [showModal, setShowModal] = useState(false)
  const [clientes, setClientes] = useState([])
  const [carros, setCarros] = useState([])
  const [ordemDeServico, setOrdemDeServico] = useState([])
  const [dtcs, setDtcs] = useState([])
  const history = useHistory()
  const { id } = useParams()

  function gerarOs() {
    window.print()
    setTimeout(() => {
      history.push('/dashboard')
    })
  }


  useEffect(() => {
    api.get(`/clientes/encontrar/${id}`)
      .then((response) => setClientes(response.data))
    api.get(`/clientes/ordemdeservico/listar`)
      .then(response => setOrdemDeServico(response.data))
    api.get(`/clientes/carros/listar`)
      .then(response => setCarros(response.data))
    api.get(`/clientes/ordemdeservico/dtc/listar`)
      .then(response => setDtcs(response.data))
  }, [id])

  function getDtcsInfo() {
    for (let i = 0; i <= 10; i++) {
      return dtcs.map((info, indexInfo) => (
        <div key={info.id_dtc}>
          <Row className='mb-1'>
            <Col xs={1}>
              <FieldStyled disabled value={info.codigo} />
            </Col>
            <Col xs={4}>
              <FieldStyled disabled value={info.dtc} />
            </Col>
            <Col xs={2}>
              <FieldStyled disabled value={info.estado} />
            </Col>
          </Row>
        </div>
      ))
    }
  }

  function getProcedimentos() {
    for (let i = 0; i <= 10; i++) {
      return dtcs.map((info, indexInfo) => (
        <div key={info.id_dtc}>
          <Row className='mb-1'>
            <Col >
              <FieldStyled value={info.procedimentos} />
            </Col>
          </Row>
        </div>
      ))
    }
  }

  function onSubmit(values, actions) {
    api.put(`/clientes/atualizar/${id}`, {
      situacao: values.situacao,
      mecanico: values.mecanico,
      carro_problema: values.problema,
    })
    api.post(`/clientes/ordemdeservicos/dtc/adicionar/`, {
      codigo: values.grupo,
      dtc: values.grupo,
      estado: values.grupo,
    })

    actions.setSubmitting(false)
    actions.resetForm()
    setShowModal(true)
    setTimeout(() => {
      history.push('/dashboard')
    }, 1500)
  }



  return (
    <Container>
      <img className='print logo' src={Logo} alt="img da Aldisel"></img>
      {clientes.map((cliente, indexCliente) => {
        return <div key={cliente.id_cliente}>
          {carros.map((carro, indexCarro) => (
            (cliente.id_cliente === carro.id_cliente) &&
            <div key={carro.id_carro} >
              {ordemDeServico.map((ordem, indexOs) => (
                (ordem.id_carros === carro.id_carros) &&
                <Formik
                  key={ordem.id_os}
                  initialValues={{
                    cliente: cliente.nome,
                    telefone: cliente.telefone,
                    modeloCarro: carro.modelo,
                    placa: carro.placa,
                    ano: carro.ano,
                    cor: carro.cor,
                    problema: carro.problema,
                    diagnostico: ordem.diagnostico,
                    situacao: ordem.situacao,
                    mecanico: ordem.mecanico,
                  }}
                  // validationSchema={FormularioOsSchema}
                  onSubmit={onSubmit}

                >
                  {props => (
                    <Form onSubmit={props.handleSubmit} className='form mb-3'>
                      {console.log(props.values.codigo)}
                      <Row >
                        <Col xs={7}>
                          <Form.Group>
                            <Form.Label>Cliente</Form.Label>
                            <ErrorMessage name='cliente' />
                            <FieldStyled disabled name='cliente' className='form-control input' />
                          </Form.Group>
                        </Col>

                        <Col>
                          <Form.Group>
                            <Form.Label>Telefone</Form.Label>
                            <ErrorMessage name='telefone' />
                            <FieldStyled disabled name='telefone' className='form-control input' />
                          </Form.Group>
                        </Col>

                        <Col>
                          <Form.Group>
                            <Form.Label>situacao</Form.Label>
                            <FieldStyled className='form-control input' name='situacao' aria-label="situacaoDTC" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row >
                        <Col xs={4}>
                          <Form.Group>
                            <Form.Label>Mecânico responsável</Form.Label>
                            <ErrorMessage name='mecanico' />
                            <FieldStyled name='mecanico' className='form-control input' />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Modelo do carro</Form.Label>
                            <ErrorMessage name='modeloCarro' />
                            <FieldStyled disabled name='modeloCarro' className='form-control input' />
                          </Form.Group>
                        </Col>
                        <Col xs={2}>
                          <Form.Group>
                            <Form.Label>Placa</Form.Label>
                            <ErrorMessage name='placa' />
                            <FieldStyled disabled name='placa' className='form-control input' />
                          </Form.Group>
                        </Col>
                        <Col xs={1}>
                          <Form.Group>
                            <Form.Label>Ano</Form.Label>
                            <ErrorMessage name='ano' />
                            <FieldStyled disabled name='ano' className='form-control input' />
                          </Form.Group>
                        </Col>
                        <Col xs={2}>
                          <Form.Group>
                            <Form.Label>Cor</Form.Label>
                            <ErrorMessage name='cor' />
                            <FieldStyled disabled name='cor' className='form-control input' />
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

                      {/* <FieldArray
                        name="dtcsInfo"
                        render={arrayHelpers => (
                          <div>
                            {props.values.dtcsInfo.map((dtcs, indexDtcs) => (
                              <div key={indexDtcs}>
                                <Row className='mb-1'>
                                  <Col xs={2}>
                                    <FieldStyled name={`dtcsInfo[${indexDtcs}].codigo`} />
                                  </Col>
                                  <Col>
                                    <FieldStyled name={`dtcsInfo.${indexDtcs}.dtc`} />
                                  </Col>
                                  <Col xs={3}>
                                    <FieldStyled name={`dtcsInfo.${indexDtcs}.estado`} />
                                  </Col>
                                </Row>

                              </div>
                            ))}
                          </div>
                        )}
                      /> */}

                        <h6 className='form-title' >Procedimentos</h6>
                        
                        {getProcedimentos()}

                      {/* <Form.Group className='mb-1' controlId="formProcedimentos">
                        <Form.Control className='input' autoComplete='off' type="text" />
                      </Form.Group>
                      <Form.Group className='mb-1' controlId="formProcedimentos">
                        <Form.Control className='input' autoComplete='off' type="text" />
                      </Form.Group>
                      <Form.Group className='mb-1' controlId="formProcedimentos">
                        <Form.Control className='input' autoComplete='off' type="text" />
                      </Form.Group>
                      <Form.Group className='mb-1' controlId="formProcedimentos">
                        <Form.Control className='input' autoComplete='off' type="text" />
                      </Form.Group>
                      <Form.Group className='mb-1' controlId="formProcedimentos">
                        <Form.Control className='input' autoComplete='off' type="text" />
                      </Form.Group>
                      <Form.Group className='mb-1' controlId="formProcedimentos">
                        <Form.Control className='input' autoComplete='off' type="text" />
                      </Form.Group>
                      <Form.Group controlId="formProcedimentos">
                        <Form.Control className='input' autoComplete='off' type="text" />
                      </Form.Group> */}

                      <h6 className='form-title' >Observações adicionais</h6>
                      <Form.Group className='mb-2' controlId="formObservacoes">
                        <Form.Control size="sm" autoComplete='off' as="textarea" rows={12} />
                      </Form.Group>

                      <DivButtons>
                        <ButtonStyled className='no-print btn' disabled={!props.isValid} variant="outline-primary" type="submit">
                          Atualizar OS
                        </ButtonStyled>
                        <ButtonStyled onClick={gerarOs} className='no-print btn' disabled={!props.isValid} variant="outline-primary" type="button">
                          Imprimir
                        </ButtonStyled>
                      </DivButtons>
                    </Form>
                  )}
                </Formik>
              ))}
            </div>
          ))}

          <Modal centered size='xs' className="no-print" show={showModal} onHide={() => setShowModal(false)}>
            <SpinnerStyled animation="border" variant='danger' />
            <Modal.Title> <Title>Ordem de serviço atulizado</Title></Modal.Title>
            <Modal.Body><SubTitle>Redirecionando para o pátio</SubTitle></Modal.Body>
          </Modal>
          <h6 className='print text-right'>{`Ordem de serviço gerada em ${dataAtual} ás ${horaAtual}`}</h6>
        </div>
      })}
    </Container >
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

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
  }`

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


const SpinnerStyled = styled(Spinner)`
  margin: auto;
  margin-top: 2rem;
`;

const DivButtons = styled.div`
  display: inline;
  text-align: center;
`;

const ButtonStyled = styled(Button)`
  color: #8e9cca;
  border-color: #8e9cca;
  transition: ease-in-out 0.5s;
  width: auto;
  font-weight: bold;
  margin-right: 1rem;
  line-height: 1rem;
  :hover{
   background-color: #8e9cca ;
   border-color: #000 ;

  }
`;