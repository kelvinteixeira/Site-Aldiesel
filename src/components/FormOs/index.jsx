import React, { useState } from 'react'
import './formOs.css'
import { Button, Row, Col, Form } from 'react-bootstrap'
import { str_data, str_hora } from '../../utils/data'
import Logo from '../../Assets/logo.png'
// import { api } from '../../api'
import { ModalConfirmacao } from '../../components/ModalConfirmacao'

export default function FormOs() {
  const [show, setShow] = useState(false)
  const [nomeCliente, setNomeCliente] = useState('')
  const [carroModelo, setCarroModelo] = useState('')
  const [carroPlaca, setCarroPlaca] = useState('')
  const [nomeMecanico, setNomeMecanico] = useState('')

  function gerarOs() {
    // api.post('/ordemdeservicos', {
    //   nome_cliente: nomeCliente,
    //   carro_modelo: carroModelo,
    //   carro_placa: carroPlaca,
    //   nome_mecanico: nomeMecanico
    // })
    // then((response) => console.log(response))
    // .then(setShow(true))
    setShow(true)
  }

  return (
    <>
      <img className='print logo' src={Logo} alt="img da Aldisel"></img>
      <h3 className='form-title' >Ordem de Serviço</h3>
      <Form className='form mb-5'>
        <Row className="mb-1 subgrid">
          <Col xs={7}>
            <Form.Group controlId="formGridNome">
              <Form.Label>Cliente</Form.Label>
              <Form.Control onChange={(e) => setNomeCliente(e.target.value)} size='sm' type="text" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formGridTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridNumeroOs">
              <Form.Label>OS</Form.Label>
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Form.Group controlId="formGridEndereco">
              <Form.Label>Endereço</Form.Label>
              <Form.Control size='sm' type='text' />
            </Form.Group>
          </Col>
          <Col xs={1}>
            <Form.Group controlId="formGridNumero">
              <Form.Label>Nº</Form.Label>
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridCidade">
              <Form.Label>Cidade</Form.Label>
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridBairro">
              <Form.Label>Bairro</Form.Label>
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
        </Row>

        <Row >
          <Col xs={4}>
            <Form.Group controlId="formGridModeloMecanico">
              <Form.Label>Mecânico responsavel</Form.Label>
              <Form.Control onChange={(e) => setNomeMecanico(e.target.value)} size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridModeloCarro">
              <Form.Label>Modelo do carro</Form.Label>
              <Form.Control onChange={(e) => setCarroModelo(e.target.value)} size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group controlId="formGridPlaca">
              <Form.Label>Placa</Form.Label>
              <Form.Control onChange={(e) => setCarroPlaca(e.target.value)} size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col xs={1}>
            <Form.Group controlId="formGridAno">
              <Form.Label>Ano</Form.Label>
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group controlId="formGridCor">
              <Form.Label>Cor</Form.Label>
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>

        </Row>
        <h3 className='form-title' >Descrição do problema</h3>

        <Form.Group controlId="formDescricaoProblema">
          <Form.Control size="sm" autoComplete='off' as="textarea" rows={2} />
        </Form.Group>

        <h3 className='form-title' >DTCs</h3>
        <Row className='mb-1'>
          <Col xs={2}>
            <Form.Group controlId="formGridCodigo">
              <Form.Label>Codigo</Form.Label>
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridDTC">
              <Form.Label>DTC</Form.Label>
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group controlId="formGridSituacao">
              <Form.Label>Situação</Form.Label>
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-1' >
          <Col xs={2} >
            <Form.Group controlId="formGridCodigo">
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridDTC">
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group controlId="formGridSituacao">
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-1' >
          <Col xs={2} >
            <Form.Group controlId="formGridCodigo">
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridDTC">
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group controlId="formGridSituacao">
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-1' >
          <Col xs={2} >
            <Form.Group controlId="formGridCodigo">
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridDTC">
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group controlId="formGridSituacao">
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-1' >
          <Col xs={2} >
            <Form.Group controlId="formGridCodigo">
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridDTC">
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group controlId="formGridSituacao">
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
        </Row>

        <h3 className='form-title' >Procedimentos</h3>
        <Form.Group controlId="formProcedimentos">
          <Form.Control size="sm" autoComplete='off' as="textarea" rows={2} />
        </Form.Group>

        <Row>
          <Col xs={3}>
            <Form.Group controlId="formBasicData">
              <Form.Label>Situação</Form.Label>
              <Form.Select size="sm" defaultValue={"default"}>
                <option value="default">Selecione</option>
                <option value="1">Em andamanto</option>
                <option value="2">Aguardando</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridObservacaoSituacao">
              <Form.Label>Observação</Form.Label>
              <Form.Control size='sm' type="text" />
            </Form.Group>
          </Col>
        </Row>

        <h3 className='form-title' >Observações adicionais</h3>
        <Form.Group className='mb-3' controlId="formObservacoes">
          <Form.Control size="sm" autoComplete='off' as="textarea" rows={5} />
        </Form.Group>
        <h6 className='print text-right'>{`Ordem de serviço gerada em ${str_data} ás ${str_hora}`}</h6>

        <Button className='no-print btn' variant="primary" onClick={gerarOs} type="button">
          Gerar OS
        </Button>
        {show ? <ModalConfirmacao show='show' focus='autoFocus' subtitulo='OS gerada com sucesso!' close={() => setShow(false)} /> : null}
      </Form>
    </>
  )
}

setTimeout(() => {

})