import React, { useState } from 'react'
import './formOs.css'
import { Button, Row, Col, Form, Container } from 'react-bootstrap'
import { str_data, str_hora } from '../../utils/data'
import Logo from '../../Assets/logo.png'
import { api } from '../../api'
import { ModalOs } from '../ModalOrdemDeServico'


export default function FormOs() {
  const [show, setShow] = useState(false)
  const [nomeCliente, setNomeCliente] = useState('')
  const [carroModelo, setCarroModelo] = useState('')
  const [carroPlaca, setCarroPlaca] = useState('')
  const [nomeMecanico, setNomeMecanico] = useState('')
  const dataAtual = str_data

  function closeModal() {
    setShow(false)
  }

  function handleClose() {
    setShow(false)

    setTimeout(() => {
      window.print()
    }, 500)
  }

  function gerarOs() {
    api.post('/ordemdeservicos', {
      nome_cliente: nomeCliente,
      carro_modelo: carroModelo,
      carro_placa: carroPlaca,
      nome_mecanico: nomeMecanico,
      data_criacao: dataAtual,
      situacao_atual: 'Análise',
    })
    setShow(true)
  }

  return (
    <Container>
      <img className='print logo' src={Logo} alt="img da Aldisel"></img>
      <h3 className='form-title no-print' >Ordem de Serviço</h3>
      <Form className='form mb-3'>
        <Row className="mb-1 subgrid">
          <Col xs={7}>
            <Form.Group controlId="formGridNome">
              <Form.Label>Cliente</Form.Label>
              <Form.Control autoComplete='off' onChange={(e) => setNomeCliente(e.target.value)} className='input' type="text" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formGridTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control autoComplete='off' className='input' type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridNumeroOs">
              <Form.Label>OS</Form.Label>
              <Form.Control autoComplete='off' className='input' type="text" />
            </Form.Group>
          </Col>
        </Row>


        <Row >
          <Col xs={4}>
            <Form.Group controlId="formGridModeloMecanico">
              <Form.Label>Mecânico responsável</Form.Label>
              <Form.Control autoComplete='off' onChange={(e) => setNomeMecanico(e.target.value)} className='input' type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridModeloCarro">
              <Form.Label>Modelo do carro</Form.Label>
              <Form.Control autoComplete='off' onChange={(e) => setCarroModelo(e.target.value)} className='input' type="text" />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group controlId="formGridPlaca">
              <Form.Label>Placa</Form.Label>
              <Form.Control autoComplete='off' onChange={(e) => setCarroPlaca(e.target.value)} className='input' type="text" />
            </Form.Group>
          </Col>
          <Col xs={1}>
            <Form.Group controlId="formGridAno">
              <Form.Label>Ano</Form.Label>
              <Form.Control autoComplete='off' className='input' type="text" />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group controlId="formGridCor">
              <Form.Label>Cor</Form.Label>
              <Form.Control autoComplete='off' className='input' type="text" />
            </Form.Group>
          </Col>

        </Row>
        <h6 className='form-title' >Descrição do problema</h6>

        <Form.Group controlId="formDescricaoProblema">
          <Form.Control size="sm" autoComplete='off' as="textarea" rows={2} />
        </Form.Group>

        <h6 className='form-title' >Diagnóstico</h6>

        <Form.Group controlId="formDescricaoProblema">
          <Form.Control size="sm" autoComplete='off' as="textarea" rows={2} />
        </Form.Group>

        <h6 className='form-title' >DTCs</h6>
        <Row className='mb-1'>
          <Col xs={1}>
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
              <option >Selecione</option>
              <option value="1">Ativo</option>
              <option value="2">Inativo</option>
              <option value="3">Ligado</option>
              <option value="4">Desligado</option>
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

        <Button className='no-print btn' variant="primary" onClick={gerarOs} type="button">
          Cadastrar
        </Button>
        <ModalOs show={show} titulo='Cliente cadastrado com sucesso!' subtitulo='Deseja gerar OS agora?' close={closeModal} gerarOs={handleClose} />
      </Form>
      <h6 className='print text-right'>{`Ordem de serviço gerada em ${str_data} ás ${str_hora}`}</h6>
    </Container>
  )
}
