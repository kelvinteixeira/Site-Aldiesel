import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form, Modal, Row, Col } from 'react-bootstrap';
import * as Styled from '../Styles/formRegisterCustomer.styles';
import { ClientInfoSchema } from '../../../utils/Yup/schema';
import { Formik, ErrorMessage } from 'formik';
import { currentDate } from '../../../utils/data';
import { api } from '../../../api';
import { FormActions } from '../../../shared/GlobalTypes';

type FormValues = {
  name: string,
  phone: string,
  street: string,
  houseNumber: string,
  district: string,
  state: string,
  city: string,
}

export function FormRegisterCostumer() {

  const [showModal, setShowModal] = useState(false)
  const history = useHistory()
  const goToDashboard = () => history.push('/dashboard')

  const initialValues: FormValues = {
    name: '',
    phone: '',
    street: '',
    houseNumber: '',
    district: '',
    state: '',
    city: '',
  }

  function register(values: FormValues, actions: FormActions) {
    console.log(actions)
    api.post('/clientes/adicionar', {
      nome: values.name,
      telefone: values.phone,
      endereco_rua: values.street,
      endereco_numero: values.houseNumber,
      endereco_bairro: values.district,
      endereco_estado: values.state,
      endereco_cidade: values.city,
      entrada: currentDate
    })
    actions.setSubmitting(false)
    actions.resetForm()
    setShowModal(true)
  }

  return (
    <Styled.Container>
      <Styled.Card>
        <Formik
          initialValues={initialValues}
          validationSchema={ClientInfoSchema}
          onSubmit={register}
        >
          {props => (
            <Form onSubmit={props.handleSubmit} >
              <Styled.CardContent>

                <Styled.Title> <Styled.GoInfoStyled /> Informações do cliente</Styled.Title>

                <Row>
                  <Col xs={8}>
                    <Styled.FormGroupStyled className='mb-3'>
                      <Form.Label > Nome Completo</Form.Label>
                      <Styled.FieldStyled name='name' />
                      <ErrorMessage name='name'>
                        {msg => <Styled.MsgError>Nome é obrigátorio</Styled.MsgError>}
                      </ErrorMessage>
                    </Styled.FormGroupStyled >
                  </Col>

                  <Col>
                    <Styled.FormGroupStyled className='mb-3' >
                      <Form.Label>Telefone</Form.Label>
                      <Styled.FieldStyled name='phone' />
                      <ErrorMessage name='phone'>
                        {msg => <Styled.MsgError>Telefone é obrigátorio</Styled.MsgError>}
                      </ErrorMessage>
                    </Styled.FormGroupStyled >
                  </Col>
                </Row>

                <Styled.SubTitle>  <Styled.AiOutlineHomeStyled /> Informações do endereço</Styled.SubTitle>

                <Row>
                  <Col xs={9}>
                    <Styled.FormGroupStyled  >
                      <Form.Label>Rua</Form.Label>
                      <Styled.FieldStyled name='street' />
                      <ErrorMessage name='street'>
                        {msg => <Styled.MsgError>Rua é obrigátorio</Styled.MsgError>}
                      </ErrorMessage>
                    </Styled.FormGroupStyled >
                  </Col>
                  <Col>
                    <Styled.FormGroupStyled  >
                      <Form.Label>nº</Form.Label>
                      <Styled.FieldStyled name='houseNumber' />
                      <ErrorMessage name='houseNumber'>
                        {msg => <Styled.MsgError>Número é obrigátorio</Styled.MsgError>}
                      </ErrorMessage>
                    </Styled.FormGroupStyled >
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Styled.FormGroupStyled  >
                      <Form.Label>Bairro</Form.Label>
                      <Styled.FieldStyled name='district' />
                      <ErrorMessage name='district'>
                        {msg => <Styled.MsgError>Bairro é obrigátorio</Styled.MsgError>}
                      </ErrorMessage>
                    </Styled.FormGroupStyled >
                  </Col>
                  <Col>
                    <Styled.FormGroupStyled >
                      <Form.Label>Estado</Form.Label>
                      <Styled.FieldStyled name='state' />
                      <ErrorMessage name='state'>
                        {msg => <Styled.MsgError>Estado é obrigátorio</Styled.MsgError>}
                      </ErrorMessage>
                    </Styled.FormGroupStyled>
                  </Col>
                  <Col>
                    <Styled.FormGroupStyled >
                      <Form.Label>Cidade</Form.Label>
                      <Styled.FieldStyled name='city' />
                      <ErrorMessage name='city'>
                        {msg => <Styled.MsgError>Cidade é obrigátorio</Styled.MsgError>}
                      </ErrorMessage>
                    </Styled.FormGroupStyled>

                  </Col>
                </Row>

                <Styled.ButtonStyled type="submit" variant="outline-primary">Cadastrar</Styled.ButtonStyled>
                <hr />

              </Styled.CardContent>
            </Form>
          )}
        </Formik >
      </Styled.Card>

      <Modal centered className="no-print" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Styled.AiOutlineCheckCircleStyled />
        <Modal.Title> <Styled.TitleModal>Cliente cadastrado com sucesso!</Styled.TitleModal></Modal.Title>
        <Modal.Body><Styled.SubTitle>Deseja cadastrar um novo cliente?</Styled.SubTitle></Modal.Body>
        <Modal.Footer>
          <Styled.DivModalFooter>
            <Styled.ButtonModalStyled variant='outline-primary' onClick={() => setShowModal(false)}>Confirmar</Styled.ButtonModalStyled>
            <Styled.ButtonModalStyled variant='outline-primary' onClick={goToDashboard}>Cancelar</Styled.ButtonModalStyled>
          </Styled.DivModalFooter>
        </Modal.Footer>
      </Modal>
    </Styled.Container >
  );
};


