import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Row, Col, Form, Container } from 'react-bootstrap'
import { str_data, str_hora } from '../../utils/data'
import { FormularioOsSchema } from '../../utils/schema'
import { Formik, Field, ErrorMessage } from 'formik'
import { ModalOs } from '../ModalOrdemDeServico'
import { api } from '../../api'
import Logo from '../../Assets/logo.png'
import './formOs.css'


export default function FormOs() {
  const [show, setShow] = useState(false)

  const [grupo, setGrupo] = useState([
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
  ])


  function getGrupos() {
    for (let index = 0; index <= grupo.length; index++) {
      return grupo.map((camp) => {
        return <Row className='mb-1' key={index}>
          <Col xs={1}>
            <Form.Group controlId="formGridCodigo">
              <Form.Control value={camp[index]} onChange={(e) => setGrupo(e.target.value)} className='form-control input' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridDTC">
              <Form.Control value={camp[index]} onChange={(e) => setGrupo(e.target.value)} className='form-control input' />
            </Form.Group>
          </Col>
          <Col xs={2}>

            <Form.Control as='select' value={camp[index]} onChange={(e) => setGrupo(e.target.value)} className='form-select' aria-label="situacaoDTC">
              <option >Selecione</option>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
              <option value="Ligado">Ligado</option>
              <option value="Desligado">Desligado</option>
            </Form.Control>
          </Col>

          <Col xs={1}>
            <Form.Group controlId="codigoCol2">
              <Form.Control name={camp[index]} onChange={(e) => setGrupo(e.target.value)} className='form-control input' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="dtcCol2">
              <Form.Control name={camp[index]} onChange={(e) => setGrupo(e.target.value)} className='form-control input' />
            </Form.Group>
          </Col>
          <Col xs={2}>

            <Form.Control as='select' name={camp[index]} onChange={(e) => setGrupo(e.target.value)} className='form-select' aria-label="situacaoCol2">
              <option >Selecione</option>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
              <option value="Ligado">Ligado</option>
              <option value="Desligado">Desligado</option>
            </Form.Control>
          </Col>
        </Row>
      })
    }
  }


  const dataAtual = str_data
  const history = useHistory()

  function closeModal() {
    setShow(false)
    history.push('/dashboard')
  }

  function gerarOs() {
    setShow(false)

    setTimeout(() => {
      window.print()
    }, 500)
  }

  async function onSubmit(values, actions) {
    await api.post('/ordemdeservicos', {
      nome_cliente: values.cliente,
      telefone_cliente: values.telefone,
      os_numero: values.osNumero,
      nome_mecanico: values.mecanico,
      carro_modelo: values.modeloCarro,
      carro_ano: values.ano,
      carro_placa: values.placa,
      carro_cor: values.cor,
      descricao_problema: values.descricaoProblema,
      diagnostico: values.diagnostico,
      data_criacao: dataAtual,
      data_alteracao: 'Sem alteração',
      // situacao_atual: 'Em Análise', 
      // codigo1: values.codigo1, 
      // codigo2: values.codigo2, 
      // codigo3: values.codigo3, 
      // codigo4: values.codigo4, 
      // codigo5: values.codigo5, 
      // codigo6: values.codigo6, 
      // codigo7: values.codigo7, 
      // codigo8: values.codigo8, 
      // codigo9: values.codigo9, 
      // codigo10: values.codigo10,
      // dtc1: values.dtc1,
      // dtc2: values.dtc2,
      // dtc3: values.dtc3,
      // dtc4: values.dtc4,
      // dtc5: values.dtc5,
      // dtc6: values.dtc6,
      // dtc7: values.dtc7,
      // dtc8: values.dtc8,
      // dtc9: values.dtc9,
      // dtc10: values.dtc10,
      // situcao1: values.situcao1,
      // situcao2: values.situcao2,
      // situcao3: values.situcao3,
      // situcao4: values.situcao4,
      // situcao5: values.situcao5,
      // situcao6: values.situcao6,
      // situcao7: values.situcao7,
      // situcao8: values.situcao8,
      // situcao9: values.situcao9,
      // situcao10: values.situcao10,
      // observacoes: values.observacoes
    })
    actions.setSubmitting(false)
    actions.resetForm()
    setShow(true)
  }


  return (
    <Container>
      <img className='print logo' src={Logo} alt="img da Aldisel"></img>
      <h3 className='form-title no-print' >Nova ordem de serviço</h3>

      <Formik
        initialValues={{
          cliente: '',
          telefone: '',
          osNumero: '',
          mecanico: '',
          modeloCarro: '',
          placa: '',
          ano: '',
          cor: '',
          descricaoProblema: '',
          diagnostico: '',
          codigo1: '',
          dtc1: '',
          situacao1: '',
          codigo2: '',
          dtc2: '',
          situacao2: '',
          codigo3: '',
          dtc3: '',
          situacao3: '',
          codigo4: '',
          dtc4: '',
          situacao4: '',
          codigo5: '',
          dtc5: '',
          situacao5: '',
          codigo6: '',
          dtc6: '',
          situacao6: '',
          codigo7: '',
          dtc7: '',
          situacao7: '',
          codigo8: '',
          dtc8: '',
          situacao8: '',
          codigo9: '',
          dtc9: '',
          situacao9: '',
          codigo10: '',
          dtc10: '',
          situacao10: '',
          procedimento1: '',
          procedimento2: '',
          procedimento3: '',
          procedimento4: '',
          procedimento5: '',
          procedimento6: '',
          procedimento7: '',
          observacoes: '',
        }}
        // validationSchema={FormularioOsSchema}
        onSubmit={onSubmit}

      >
        {props => (
          <Form onSubmit={props.handleSubmit} className='form mb-3'>
            <Row className="">
              <Col xs={7}>
                <Form.Group>
                  <Form.Label>Cliente</Form.Label>
                  <ErrorMessage name='cliente' />
                  <Field name='cliente' className='form-control input' />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <Form.Label>Telefone</Form.Label>
                  <ErrorMessage name='telefone' />
                  <Field name='telefone' className='form-control input' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Número da OS</Form.Label>
                  <ErrorMessage name='osNumero' />
                  <Field name='osNumero' className='form-control input' />
                </Form.Group>
              </Col>
            </Row>

            <Row >
              <Col xs={4}>
                <Form.Group>
                  <Form.Label>Mecânico responsável</Form.Label>
                  <ErrorMessage name='mecanico' />
                  <Field name='mecanico' className='form-control input' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Modelo do carro</Form.Label>
                  <ErrorMessage name='modeloCarro' />
                  <Field name='modeloCarro' className='form-control input' />
                </Form.Group>
              </Col>
              <Col xs={2}>
                <Form.Group>
                  <Form.Label>Placa</Form.Label>
                  <ErrorMessage name='placa' />
                  <Field name='placa' className='form-control input' />
                </Form.Group>
              </Col>
              <Col xs={1}>
                <Form.Group>
                  <Form.Label>Ano</Form.Label>
                  <ErrorMessage name='ano' />
                  <Field name='ano' className='form-control input' />
                </Form.Group>
              </Col>
              <Col xs={2}>
                <Form.Group>
                  <Form.Label>Cor</Form.Label>
                  <ErrorMessage name='cor' />
                  <Field name='cor' className='form-control input' />
                </Form.Group>
              </Col>

            </Row>
            <h6 className='form-title' >Descrição do problema</h6>
            <Form.Group>
              <Field name='descricaoProblema' className='form-control input textareasSimples' as='textarea' />
            </Form.Group>

            <h6 className='form-title' >Diagnóstico</h6>
            <Form.Group>
              <Field name='diagnostico' className='form-control input textareasSimples' as='textarea' />
            </Form.Group>

{console.log(grupo)}
            
            <h6 className='form-title' >DTCs</h6>
            <Row className='mb-1'>
              <Col xs={1}>
                <Form.Group controlId="formGridCodigo">
                  <Form.Label>Código</Form.Label>
                  <Field name='codigo1' className='form-control input' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGridDTC">
                  <Form.Label>DTC</Form.Label>
                  <Field name='dtc1' className='form-control input' />
                </Form.Group>
              </Col>
              <Col xs={2}>

                <Form.Label>Situação</Form.Label>
                <Field as='select' name='situacao1' className='form-select' aria-label="situacaoDTC">
                  <option >Selecione</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Ligado">Ligado</option>
                  <option value="Desligado">Desligado</option>
                </Field>
              </Col>

              <Col xs={1}>
                <Form.Group controlId="formGridCodigo">
                  <Form.Label>Código</Form.Label>
                  <Field name='codigo2' className='form-control input' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGridDTC">
                  <Form.Label>DTC</Form.Label>
                  <Field name='dtc2' className='form-control input' />
                </Form.Group>
              </Col>
              <Col xs={2}>

                <Form.Label>Situação</Form.Label>
                <Field as='select' name='situacao2' className='form-select' aria-label="situacaoDTC">
                  <option >Selecione</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Ligado">Ligado</option>
                  <option value="Desligado">Desligado</option>
                </Field>
              </Col>

            </Row>

            <Row className='mb-1'>
              <Col xs={1}>
                <Form.Group controlId="formGridCodigo">
                  <Field name='codigo3' className='form-control input' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGridDTC">
                  <Field name='dtc3' className='form-control input' />
                </Form.Group>
              </Col>
              <Col xs={2}>

                <Field as='select' name='situacao3' className='form-select' aria-label="situacaoDTC">
                  <option >Selecione</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Ligado">Ligado</option>
                  <option value="Desligado">Desligado</option>
                </Field>
              </Col>


              <Col xs={1}>
                <Form.Group controlId="formGridCodigo">
                  <Field name='codigo4' className='form-control input' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGridDTC">
                  <Field name='dtc4' className='form-control input' />
                </Form.Group>
              </Col>
              <Col xs={2}>

                <Field as='select' name='situacao4' className='form-select' aria-label="situacaoDTC">
                  <option >Selecione</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Ligado">Ligado</option>
                  <option value="Desligado">Desligado</option>
                </Field>
              </Col>

            </Row>

            <Row className='mb-1'>
              <Col xs={1}>
                <Form.Group controlId="formGridCodigo">
                  <Field name='codigo5' className='form-control input' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGridDTC">
                  <Field name='dtc5' className='form-control input' />
                </Form.Group>
              </Col>
              <Col xs={2}>

                <Field as='select' name='situacao5' className='form-select' aria-label="situacaoDTC">
                  <option >Selecione</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Ligado">Ligado</option>
                  <option value="Desligado">Desligado</option>
                </Field>
              </Col>


              <Col xs={1}>
                <Form.Group controlId="formGridCodigo">
                  <Field name='codigo6' className='form-control input' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGridDTC">
                  <Field name='dtc6' className='form-control input' />
                </Form.Group>
              </Col>
              <Col xs={2}>

                <Field as='select' name='situacao6' className='form-select' aria-label="situacaoDTC">
                  <option >Selecione</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Ligado">Ligado</option>
                  <option value="Desligado">Desligado</option>
                </Field>
              </Col>

            </Row>

            <Row className='mb-1'>
              <Col xs={1}>
                <Form.Group controlId="formGridCodigo">
                  <Field name='codigo7' className='form-control input' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGridDTC">
                  <Field name='dtc7' className='form-control input' />
                </Form.Group>
              </Col>
              <Col xs={2}>

                <Field as='select' name='situacao7' className='form-select' aria-label="situacaoDTC">
                  <option >Selecione</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Ligado">Ligado</option>
                  <option value="Desligado">Desligado</option>
                </Field>
              </Col>

              <Col xs={1}>
                <Form.Group controlId="formGridCodigo">
                  <Field name='codigo8' className='form-control input' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGridDTC">
                  <Field name='dtc8' className='form-control input' />
                </Form.Group>
              </Col>
              <Col xs={2}>

                <Field as='select' name='situacao8' className='form-select' aria-label="situacaoDTC">
                  <option >Selecione</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Ligado">Ligado</option>
                  <option value="Desligado">Desligado</option>
                </Field>
              </Col>

            </Row>

            <Row className='mb-1'>
              <Col xs={1}>
                <Form.Group controlId="formGridCodigo">
                  <Field name='codigo9' className='form-control input' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGridDTC">
                  <Field name='dtc9' className='form-control input' />
                </Form.Group>
              </Col>
              <Col xs={2}>

                <Field as='select' name='situacao9' className='form-select' aria-label="situacaoDTC">
                  <option >Selecione</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Ligado">Ligado</option>
                  <option value="Desligado">Desligado</option>
                </Field>
              </Col>


              <Col xs={1}>
                <Form.Group controlId="formGridCodigo">
                  <Field name='codigo10' className='form-control input' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formGridDTC">
                  <Field name='dtc10' className='form-control input' />
                </Form.Group>
              </Col>
              <Col xs={2}>

                <Field as='select' name='situacao10' className='form-select' aria-label="situacaoDTC">
                  <option >Selecione</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Ligado">Ligado</option>
                  <option value="Desligado">Desligado</option>
                </Field>
              </Col>

            </Row>

            {getGrupos()}

            <h6 className='form-title' >Procedimentos</h6>

            <Form.Group className='mb-1' controlId="formProcedimentos">
              <Field name='procedimento1' className='form-control input' autoComplete='off' type="text" />
            </Form.Group>

            <Form.Group className='mb-1' controlId="formProcedimentos">
              <Field name='procedimento2' className='form-control input' autoComplete='off' type="text" />
            </Form.Group>

            <Form.Group className='mb-1' controlId="formProcedimentos">
              <Field name='procedimento3' className='form-control input' autoComplete='off' type="text" />
            </Form.Group>

            <Form.Group className='mb-1' controlId="formProcedimentos">
              <Field name='procedimento4' className='form-control input' autoComplete='off' type="text" />
            </Form.Group>

            <Form.Group className='mb-1' controlId="formProcedimentos">
              <Field name='procedimento5' className='form-control input' autoComplete='off' type="text" />
            </Form.Group>

            <Form.Group className='mb-1' controlId="formProcedimentos">
              <Field name='procedimento6' className='form-control input' autoComplete='off' type="text" />
            </Form.Group>

            <Form.Group className='mb-1' controlId="formProcedimentos">
              <Field name='procedimento7' className='form-control input' autoComplete='off' type="text" />
            </Form.Group>


            <h6 className='form-title' >Observações adicionais</h6>
            <Form.Group className='mb-3'>
              <Field name='observacoes' className='form-control input textareaGrande' as='textarea' />
            </Form.Group>

            <Button className='no-print btn' disabled={!props.isValid} variant="primary" type="onSubmit">
              Cadastrar
            </Button>
            <ModalOs show={show} titulo='Cliente cadastrado com sucesso!' subtitulo='Deseja gerar OS agora?' close={closeModal} gerarOs={gerarOs} />
          </Form>
        )}
      </Formik>
      <h6 className='print text-right'>{`Ordem de serviço gerada em ${str_data} ás ${str_hora}`}</h6>
    </Container>
  )
}
