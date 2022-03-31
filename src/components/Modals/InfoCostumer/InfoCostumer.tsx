import React, { useState, useEffect } from 'react';

import { Form, Modal, Row, Col } from 'react-bootstrap';
import * as Styled from './InfoCostumer.styles';
import { Formik } from 'formik';
import { api } from '../../../api';
import { CostumerItems } from '../../../shared/GlobalTypes';
import { AldieselButton } from '../../AldieselButton/aldieselButton';

type ModalInfoCostumerProps = {
  idCostumer: number,
  onHide: () => void,
  show: boolean
}

export function ModalInfoCostumer(params: ModalInfoCostumerProps) {
  const [costumers, setCostumers] = useState([])

  useEffect(() => {
    api.get(`/clientes/encontrar/${params.idCostumer}`)
      .then((response) => setCostumers(response.data))
  }, [params.idCostumer])

  function onSubmit() {
    params.onHide()
  }

  return (
    < Styled.Container >
      <Modal show={params.show} onHide={params.onHide} id_costumer='true' centered>

        {costumers.map((costumer: CostumerItems) => (
          <Formik
            key={costumer.id}
            initialValues={{
              name: costumer.name,
              phone: costumer.phone,
              street: costumer.street,
              houseNumber: costumer.houseNumber,
              district: costumer.district,
              state: costumer.state,
              city: costumer.city,
            }}
            onSubmit={onSubmit}
          >
            {props => (
              <Form onSubmit={props.handleSubmit}>
                <Styled.CardContent>

                  <Styled.Title>Informações do cliente</Styled.Title>

                  <Row className='mb-1'>
                    <Col xs={8}>
                      <Styled.FormGroupStyled>
                        <Form.Label > Nome Completo</Form.Label>
                        <Styled.FieldStyled disabled name='name' />
                      </Styled.FormGroupStyled>
                    </Col>

                    <Col>
                      <Styled.FormGroupStyled>
                        <Form.Label>Telefone</Form.Label>
                        <Styled.FieldStyled disabled name='phone' />
                      </Styled.FormGroupStyled>
                    </Col>

                  </Row>

                  <Styled.Title>  <Styled.AiOutlineHomeStyled /> Informações do endereço</Styled.Title>

                  <Row>
                    <Col xs={9}>
                      <Styled.FormGroupStyled >
                        <Form.Label>Rua</Form.Label>
                        <Styled.FieldStyled disabled name='street' />
                      </Styled.FormGroupStyled>
                    </Col>
                    <Col>
                      <Styled.FormGroupStyled >
                        <Form.Label>nº</Form.Label>
                        <Styled.FieldStyled disabled name='houseNumber' />
                      </Styled.FormGroupStyled>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Styled.FormGroupStyled >
                        <Form.Label>Bairro</Form.Label>
                        <Styled.FieldStyled disabled name='district' />
                      </Styled.FormGroupStyled>
                    </Col>
                    <Col>
                      <Styled.FormGroupStyled >
                        <Form.Label>Cidade</Form.Label>
                        <Styled.FieldStyled disabled name='city' />
                      </Styled.FormGroupStyled>

                    </Col>
                    <Col>
                      <Styled.FormGroupStyled >
                        <Form.Label>Estado</Form.Label>
                        <Styled.FieldStyled disabled name='state' />
                      </Styled.FormGroupStyled>
                    </Col>
                  </Row>

                  <Styled.DivButtons>
                    <AldieselButton type="button" title='Voltar' onClick={() => params.onHide()}></AldieselButton>
                  </Styled.DivButtons>
                  <hr />

                </Styled.CardContent>
              </Form>
            )}
          </Formik >
        ))}
      </Modal>
    </Styled.Container >
  )
}

