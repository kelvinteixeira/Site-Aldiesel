import React, { useState, useEffect } from 'react'
import { Button, Row, Col, Form, Container } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import { str_data, str_hora } from '../../utils/data'
import { FormularioOsSchema } from '../../utils/schema'
import { Formik, Field, ErrorMessage } from 'formik'
import { ModalOs } from '../ModalOrdemDeServico'
import { api } from '../../api'
import Logo from '../../Assets/logo.png'
import { Redirect } from 'react-router-dom'

export default function GerarOrdemDeServico() {
  const [show, setShow] = useState(false)
  
  const dataAtual = str_data
  const history = useHistory()
  const { id } = useParams()

  const [cliente, setCliente] = useState([])

  function closeModal() {
    setShow(false)
    history.push('/dashboard')
  }

  function gerarOs() {
    window.print()
    setTimeout(() => {
    history.push('/dashboard')
    },)

  }

  // function onSubmit(values) {
  //   api.put(`/ordemdeservicos/editar/${id}`, {
  //     nome_cliente: values.cliente,
  //     telefone_cliente: values.telefone,
  //     os_numero: values.osNumero,
  //     nome_mecanico: values.mecanico,
  //     carro_modelo: values.modeloCarro,
  //     carro_ano: values.ano,
  //     carro_placa: values.placa,
  //     carro_cor: values.cor,
  //     descricao_problema: values.descricaoProblema,
  //     diagnostico: values.diagnostico,
  //     data_alteracao: dataAtual,
  //   })
  //   setShow(true)
  // }


  useEffect(() => {
    api.get(`/ordemdeservicos/${id}`)
      .then((response) => {
        setCliente(response.data)
      })
      .catch((err) => {
        console.error("Erro" + err)
      })
  }, [id])

  return (
    <Container>
      <img className='print logo' src={Logo} alt="img da Aldisel"></img>
      <h3 className='form-title no-print' >Imprir a OS de {cliente.map(camp => camp.nome_cliente)} </h3>

      {console.log(cliente)}
      {cliente.map(camp => (

        <Formik
          initialValues={{
            cliente: camp.nome_cliente,
            telefone: camp.telefone_cliente,
            osNumero: camp.os_numero,
            mecanico: camp.nome_mecanico,
            modeloCarro: camp.carro_modelo,
            placa: camp.carro_placa,
            ano: camp.carro_ano,
            cor: camp.carro_cor,
            descricaoProblema: camp.descricao_problema,
            diagnostico: camp.diagnostico,
          }}
        // validationSchema={FormularioOsSchema}
        // onSubmit={onSubmit}

        >


          {props => (
            <Form onSubmit={props.handleSubmit} className='form mb-3'>
              <Row className="">
                <Col xs={7}>
                  <Form.Group>
                    <Form.Label>Cliente</Form.Label>
                    <ErrorMessage name='cliente' />
                    <Field disabled name='cliente' className='form-control input' />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group>
                    <Form.Label>Telefone</Form.Label>
                    <ErrorMessage name='telefone' />
                    <Field disabled name='telefone' className='form-control input' />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Número da OS</Form.Label>
                    <ErrorMessage name='osNumero' />
                    <Field disabled name='osNumero' className='form-control input' />
                  </Form.Group>
                </Col>
              </Row>


              <Row >
                <Col xs={4}>
                  <Form.Group>
                    <Form.Label>Mecânico responsável</Form.Label>
                    <ErrorMessage name='mecanico' />
                    <Field disabled  name='mecanico' className='form-control input' />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Modelo do carro</Form.Label>
                    <ErrorMessage name='modeloCarro' />
                    <Field disabled name='modeloCarro' className='form-control input' />
                  </Form.Group>
                </Col>
                <Col xs={2}>
                  <Form.Group>
                    <Form.Label>Placa</Form.Label>
                    <ErrorMessage name='placa' />
                    <Field  disabled name='placa' className='form-control input' />
                  </Form.Group>
                </Col>
                <Col xs={1}>
                  <Form.Group>
                    <Form.Label>Ano</Form.Label>
                    <ErrorMessage name='ano' />
                    <Field disabled name='ano' className='form-control input' />
                  </Form.Group>
                </Col>
                <Col xs={2}>
                  <Form.Group>
                    <Form.Label>Cor</Form.Label>
                    <ErrorMessage name='cor' />
                    <Field disabled name='cor' className='form-control input' />
                  </Form.Group>
                </Col>

              </Row>
              <h6 className='form-title' >Descrição do problema</h6>
              <Form.Group>
                <Field disabled name='descricaoProblema' className='form-control input textarea' as='textarea' />
              </Form.Group>

              <h6 className='form-title' >Diagnóstico</h6>
              <Form.Group>
                <Field disabled name='diagnostico' className='form-control input textarea' as='textarea' />
              </Form.Group>


              <h6 className='form-title' >DTCs</h6>
              <Row className='mb-1'>
                <Col xs={1}>
                  <Form.Group controlId="formGridCodigo">
                    <Form.Label>Código</Form.Label>
                    <Field disabled name='codigo1' className='form-control input' />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGridDTC">
                    <Form.Label>DTC</Form.Label>
                    <Field disabled name='dtc1' className='form-control input' />
                  </Form.Group>
                </Col>
                <Col xs={2}>

                  <Form.Label>Situação</Form.Label>
                  <Form.Select  aria-label="situacaoDTC">
                    <option >Selecione</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                    <option value="Ligado">Ligado</option>
                    <option value="Desligado">Desligado</option>
                  </Form.Select>
                </Col>

                <Col xs={1} >
                  <Form.Group controlId="formGridCodigo">
                    <Form.Label>Código</Form.Label>
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGridDTC">
                    <Form.Label>DTC</Form.Label>
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col xs={2}>
                  <Form.Label>Situação</Form.Label>
                  <Form.Select aria-label="situacaoDTC">
                    <option>Selecione</option>
                    <option value="1">Ativo</option>
                    <option value="2">Inativo</option>
                    <option value="3">Ligado</option>
                    <option value="4">Desligado</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className='mb-1'>
                <Col xs={1}>
                  <Form.Group controlId="formGridCodigo">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGridDTC">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col xs={2}>

                  <Form.Select aria-label="situacaoDTC">
                    <option>Selecione</option>
                    <option value="1">Ativo</option>
                    <option value="2">Inativo</option>
                    <option value="3">Ligado</option>
                    <option value="4">Desligado</option>
                  </Form.Select>
                </Col>

                <Col xs={1} >
                  <Form.Group controlId="formGridCodigo">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGridDTC">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col xs={2}>
                  <Form.Select aria-label="situacaoDTC">
                    <option>Selecione</option>
                    <option value="1">Ativo</option>
                    <option value="2">Inativo</option>
                    <option value="3">Ligado</option>
                    <option value="4">Desligado</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className='mb-1'>
                <Col xs={1}>
                  <Form.Group controlId="formGridCodigo">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGridDTC">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col xs={2}>

                  <Form.Select aria-label="situacaoDTC">
                    <option>Selecione</option>
                    <option value="1">Ativo</option>
                    <option value="2">Inativo</option>
                    <option value="3">Ligado</option>
                    <option value="4">Desligado</option>
                  </Form.Select>
                </Col>

                <Col xs={1} >
                  <Form.Group controlId="formGridCodigo">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGridDTC">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col xs={2}>
                  <Form.Select aria-label="situacaoDTC">
                    <option>Selecione</option>
                    <option value="1">Ativo</option>
                    <option value="2">Inativo</option>
                    <option value="3">Ligado</option>
                    <option value="4">Desligado</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className='mb-1'>
                <Col xs={1}>
                  <Form.Group controlId="formGridCodigo">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGridDTC">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col xs={2}>

                  <Form.Select aria-label="situacaoDTC">
                    <option>Selecione</option>
                    <option value="1">Ativo</option>
                    <option value="2">Inativo</option>
                    <option value="3">Ligado</option>
                    <option value="4">Desligado</option>
                  </Form.Select>
                </Col>

                <Col xs={1} >
                  <Form.Group controlId="formGridCodigo">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGridDTC">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col xs={2}>
                  <Form.Select aria-label="situacaoDTC">
                    <option>Selecione</option>
                    <option value="1">Ativo</option>
                    <option value="2">Inativo</option>
                    <option value="3">Ligado</option>
                    <option value="4">Desligado</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className='mb-1'>
                <Col xs={1}>
                  <Form.Group controlId="formGridCodigo">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGridDTC">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col xs={2}>


                  <Form.Select aria-label="situacaoDTC">
                    <option>Selecione</option>
                    <option value="1">Ativo</option>
                    <option value="2">Inativo</option>
                    <option value="3">Ligado</option>
                    <option value="4">Desligado</option>
                  </Form.Select>
                </Col>

                <Col xs={1} >
                  <Form.Group controlId="formGridCodigo">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGridDTC">
                    <Form.Control className='input' type="text" />
                  </Form.Group>
                </Col>
                <Col xs={2}>
                  <Form.Select aria-label="situacaoDTC">
                    <option>Selecione</option>
                    <option value="1">Ativo</option>
                    <option value="2">Inativo</option>
                    <option value="3">Ligado</option>
                    <option value="4">Desligado</option>
                  </Form.Select>
                </Col>
              </Row>



              <h6 className='form-title' >Procedimentos</h6>

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
              <Form.Group className='mb-1' controlId="formProcedimentos">
                <Form.Control className='input' autoComplete='off' type="text" />
              </Form.Group>
              <Form.Group className='mb-1' controlId="formProcedimentos">
                <Form.Control className='input' autoComplete='off' type="text" />
              </Form.Group>

              <h6 className='form-title' >Observações adicionais</h6>
              <Form.Group className='mb-3' controlId="formObservacoes">
                <Form.Control size="sm" autoComplete='off' as="textarea" rows={12} />
              </Form.Group>

              <Button onClick={gerarOs} className='no-print btn' disabled={!props.isValid} variant="primary" type="onSubmit">
                Imprimir
              </Button>
              {/* <ModalOs show={show} titulo='Cliente atualizado com sucesso!' subtitulo='Deseja gerar OS agora?' close={closeModal} gerarOs={gerarOs} /> */}
            </Form>
          )}
        </Formik>
      ))}
      <h6 className='print text-right'>{`Ordem de serviço alterada em ${str_data} ás ${str_hora}`}</h6>
    </Container>
  )
}
