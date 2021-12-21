import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import './ordemDeServico.css'


export default function FormularioOrdemDeServico() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="form-ordemDeServico">
      <Form onSubmit={handleSubmit}>
        <h3>Ordem de serviço</h3>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicCliente">
              <Form.Control size="sm" autoComplete='off' type="text" placeholder="Cliente" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicCliente">
              <Form.Control size="sm" autoComplete='off' type="text" placeholder="Telefone" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicMecanico">
              <Form.Control size="sm" autoComplete='off' type="text" placeholder="Mecânico" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicModelo">
              <Form.Control size="sm" autoComplete='off' type="text" placeholder="Modelo" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicAno">
              <Form.Control size="sm" autoComplete='off' type="text" placeholder="Ano" />
            </Form.Group>
          </Col>



          <Col>
            <Form.Group className="mb-3" controlId="formBasicPlaca">
              <Form.Control size="sm" autoComplete='off' type="text" placeholder="Placa" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicCor">
              <Form.Control size="sm" autoComplete='off' type="text" placeholder="Cor" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formDescricaoProblema">
          <Form.Label>Descrição do problema</Form.Label>
          <Form.Control size="sm" autoComplete='off' as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlDtcs">
          <Form.Label>DTCs</Form.Label>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formCodigoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="Codigo" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group className="mb-3" controlId="formDescricaoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="DTCs" />
              </Form.Group>
            </Col>

            <Col >
              <Form.Group className="mb-3" controlId="formSituacaoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="Situação" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formCodigoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="Codigo" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group className="mb-3" controlId="formDescricaoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="DTCs" />
              </Form.Group>
            </Col>

            <Col >
              <Form.Group className="mb-3" controlId="formSituacaoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="Situação" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formCodigoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="Codigo" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group className="mb-3" controlId="formDescricaoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="DTCs" />
              </Form.Group>
            </Col>

            <Col >
              <Form.Group className="mb-3" controlId="formSituacaoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="Situação" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formCodigoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="Codigo" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group className="mb-3" controlId="formDescricaoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="DTCs" />
              </Form.Group>
            </Col>

            <Col >
              <Form.Group className="mb-3" controlId="formSituacaoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="Situação" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formCodigoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="Codigo" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group className="mb-3" controlId="formDescricaoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="DTCs" />
              </Form.Group>
            </Col>

            <Col >
              <Form.Group className="mb-3" controlId="formSituacaoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="Situação" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formCodigoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="Codigo" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group className="mb-3" controlId="formDescricaoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="DTCs" />
              </Form.Group>
            </Col>

            <Col >
              <Form.Group className="mb-3" controlId="formSituacaoDtcs">
                <Form.Control size="sm" autoComplete='off' type="text" placeholder="Situação" />
              </Form.Group>
            </Col>
          </Row>

        </Form.Group>

        <Form.Group className="mb-3" controlId="formProcedimentos">
          <Form.Label>Procedimentos</Form.Label>
          <Form.Control size="sm" autoComplete='off' as="textarea" rows={3} />
        </Form.Group>

        <Row>
          <Col >
            <Form.Group className="mb-3" controlId="formBasicData">
              <Form.Select size="sm" defaultValue={"default"} aria-label="FloatingLabel">
                <option value="default">Selecione</option>
                <option value="1">Em andamanto</option>
                <option value="2">Aguardando</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={7}>
            <Form.Group className="mb-3" controlId="formObservacoes">
              <Form.Control size="sm" autoComplete='off' type="text" placeholder="Insira a situação atual" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formProcedimentos">
          <Form.Label>Observações adicionais</Form.Label>
          <Form.Control size="sm" autoComplete='off' as="textarea" rows={3} />
        </Form.Group>

        <Button onClick={() => window.print()} variant="primary" type="submit">
          Gerar Ordem de Serviço
        </Button>
      </Form>
    </div>

  )
}
