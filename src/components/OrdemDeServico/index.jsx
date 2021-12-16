import React from 'react'
import { Form, Button, Row, Col, FloatingLabel, Container } from 'react-bootstrap'
import './ordemDeServico.css'


export default function FormularioOrdemDeServico() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container className="form-ordemDeServico">
      <Form  onSubmit={handleSubmit}>
        <h3>Ordem de serviço</h3>

        <Form.Group className="mb-3" controlId="formBasicCliente">
          <FloatingLabel controlId="floatingInput" label="Cliente">
            <Form.Control autocomplete='off' type="text" placeholder="Insira o nome cliente" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMecanico">
          <FloatingLabel controlId="floatingInput" label="Mecânico responsavel">
            <Form.Control autocomplete='off' type="text" placeholder="Insira o nome do mecânico" />
          </FloatingLabel>
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicModelo">
              <FloatingLabel controlId="floatingInput" label="Modelo do carro">
                <Form.Control autocomplete='off' type="text" placeholder="Insira o modelo do carro" />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicAno">
              <FloatingLabel controlId="floatingInput" label="Ano do modelo">
                <Form.Control autocomplete='off' type="text" placeholder="Insira o ano do carro" />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPlaca">
              <FloatingLabel controlId="floatingInput" label="Placa do carro">
                <Form.Control autocomplete='off' type="text" placeholder="Insira a placa do carro" />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicCor">
              <FloatingLabel controlId="floatingInput" label="Cor do carro">
                <Form.Control autocomplete='off' type="text" placeholder="Insira a cor do carro" />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formDescricaoProblema">
          <Form.Label>Descrição do problema</Form.Label>
          <Form.Control autocomplete='off' as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlDtcs">
          <Form.Label>DTCs</Form.Label>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formCodigoDtcs">
                <FloatingLabel controlId="floatingInput" label="Cod.">
                  <Form.Control autocomplete='off' type="text" placeholder="Insira o codigo DTCs" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group className="mb-3" controlId="formDescricaoDtcs">
                <FloatingLabel controlId="floatingInput" label="Descrição">
                  <Form.Control autocomplete='off' type="text" placeholder="Insira o codigo DTCs" />
                </FloatingLabel>
              </Form.Group>
            </Col>

            <Col >
              <Form.Group className="mb-3" controlId="formSituacaoDtcs">
                <FloatingLabel controlId="floatingInput" label="Situação">
                  <Form.Control autocomplete='off' type="text" placeholder="Insira a situação atual" />
                </FloatingLabel>
              </Form.Group>
            </Col>

          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProcedimentos">
          <Form.Label>Procedimentos</Form.Label>
          <Form.Control autocomplete='off' as="textarea" rows={3} />
        </Form.Group>

        <Row>
          <Col >
            <Form.Group className="mb-3" controlId="formBasicData">
              <FloatingLabel controlId="floatingSelectGrid" label="Situação">
                <Form.Select defaultValue={"default"} aria-label="FloatingLabel">
                  <option value="default">Selecione</option>
                  <option value="1">Em andamanto</option>
                  <option value="2">Aguardando</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col xs={7}>
            <Form.Group className="mb-3" controlId="formObservacoes">
              <FloatingLabel controlId="floatingInput" label="Observações">
                <Form.Control autocomplete='off' type="text" placeholder="Insira a situação atual" />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
        <Row className="">
          <Col xs={3}>
            <Form.Group className="mb-3" controlId="formData">
              <FloatingLabel controlId="floatingInput" label="Data">
                <Form.Control autocomplete='off' type="text" placeholder="Insira a data atual" />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col xs={3}>
            <Form.Group className="mb-3" controlId="formHora">
              <FloatingLabel controlId="floatingInput" label="Horário">
                <Form.Control autocomplete='off' type="text" placeholder="Insira a hora atual" />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Gerar Ordem de Serviço
        </Button>
      </Form>
    </Container>

  )
}
