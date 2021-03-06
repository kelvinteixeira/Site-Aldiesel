import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Form, Modal, Row, Col } from "react-bootstrap";
import * as Styled from "../Styles/formRegisterCustomer.styles";
import { ClientInfoSchema } from "../../../utils/Yup/schema";
import { Formik, ErrorMessage } from "formik";
import { currentDate } from "../../../utils/data";
import { api } from "../../../api";
import { FormActions } from "../../../shared/GlobalTypes";
import { AldieselButton } from "../../../components/AldieselButton/aldieselButton";
import { AldielselToast } from "../../../components/AldieselToast/toast";

type FormValues = {
  name: string;
  phone: string;
  street: string;
  houseNumber: string;
  district: string;
  state: string;
  city: string;
  costumerState: string;
};

export function FormRegisterCostumer() {
  const [showModal, setShowModal] = useState(false);
  const [showRegisterCostumerSuccess, setShowRegisterCostumerSuccess] =
    useState(false);
  
  const [showRegisterCostumerError, setShowRegisterCostumerError] =
    useState(false);
  const history = useHistory();

  const initialValues: FormValues = {
    name: "",
    phone: "",
    street: "",
    houseNumber: "",
    district: "",
    state: "",
    city: "",
    costumerState: "",
  };

  function register(values: FormValues, actions: FormActions) {
    try {
      api.post("/clientes/adicionar", {
        name: values.name,
        phone: values.phone,
        street: values.street,
        houseNumber: values.houseNumber,
        district: values.district,
        state: values.state,
        city: values.city,
        entryDate: currentDate,
        costumerState: "ativo",
      });
      actions.setSubmitting(false);
      actions.resetForm();
      setShowRegisterCostumerSuccess(true);
    } catch {
      setShowRegisterCostumerError(true)
    }
  }

  return (
    <Styled.Container>
      <Styled.Card>
        <Formik
          initialValues={initialValues}
          validationSchema={ClientInfoSchema}
          onSubmit={register}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Styled.CardContent>
                <Styled.Title>
                  {" "}
                  <Styled.GoInfoStyled /> Informa????es do cliente
                </Styled.Title>

                <Row>
                  <Col xs={8}>
                    <Styled.FormGroupStyled className="mb-3">
                      <Form.Label> Nome Completo</Form.Label>
                      <Styled.FieldStyled name="name" />
                      <ErrorMessage name="name">
                        {(msg) => (
                          <Styled.MsgError>Nome ?? obrig??torio</Styled.MsgError>
                        )}
                      </ErrorMessage>
                    </Styled.FormGroupStyled>
                  </Col>

                  <Col>
                    <Styled.FormGroupStyled className="mb-3">
                      <Form.Label>Telefone</Form.Label>
                      <Styled.FieldStyled name="phone" />
                      <ErrorMessage name="phone">
                        {(msg) => (
                          <Styled.MsgError>
                            Telefone ?? obrig??torio
                          </Styled.MsgError>
                        )}
                      </ErrorMessage>
                    </Styled.FormGroupStyled>
                  </Col>
                </Row>

                <Styled.SubTitle>
                  {" "}
                  <Styled.AiOutlineHomeStyled /> Informa????es do endere??o
                </Styled.SubTitle>

                <Row>
                  <Col xs={9}>
                    <Styled.FormGroupStyled>
                      <Form.Label>Rua</Form.Label>
                      <Styled.FieldStyled name="street" />
                      <ErrorMessage name="street">
                        {(msg) => (
                          <Styled.MsgError>Rua ?? obrig??torio</Styled.MsgError>
                        )}
                      </ErrorMessage>
                    </Styled.FormGroupStyled>
                  </Col>
                  <Col>
                    <Styled.FormGroupStyled>
                      <Form.Label>n??</Form.Label>
                      <Styled.FieldStyled name="houseNumber" />
                      <ErrorMessage name="houseNumber">
                        {(msg) => (
                          <Styled.MsgError>
                            N??mero ?? obrig??torio
                          </Styled.MsgError>
                        )}
                      </ErrorMessage>
                    </Styled.FormGroupStyled>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Styled.FormGroupStyled>
                      <Form.Label>Bairro</Form.Label>
                      <Styled.FieldStyled name="district" />
                      <ErrorMessage name="district">
                        {(msg) => (
                          <Styled.MsgError>
                            Bairro ?? obrig??torio
                          </Styled.MsgError>
                        )}
                      </ErrorMessage>
                    </Styled.FormGroupStyled>
                  </Col>
                  <Col>
                    <Styled.FormGroupStyled>
                      <Form.Label>Estado</Form.Label>
                      <Styled.FieldStyled name="state" />
                      <ErrorMessage name="state">
                        {(msg) => (
                          <Styled.MsgError>
                            Estado ?? obrig??torio
                          </Styled.MsgError>
                        )}
                      </ErrorMessage>
                    </Styled.FormGroupStyled>
                  </Col>
                  <Col>
                    <Styled.FormGroupStyled>
                      <Form.Label>Cidade</Form.Label>
                      <Styled.FieldStyled name="city" />
                      <ErrorMessage name="city">
                        {(msg) => (
                          <Styled.MsgError>
                            Cidade ?? obrig??torio
                          </Styled.MsgError>
                        )}
                      </ErrorMessage>
                    </Styled.FormGroupStyled>
                  </Col>
                </Row>

                <Styled.DivButtons>
                  <AldieselButton
                    type="submit"
                    title="Cadastrar"
                  ></AldieselButton>
                </Styled.DivButtons>
                <hr />
              </Styled.CardContent>
            </Form>
          )}
        </Formik>
      </Styled.Card>

      <Modal
        centered
        className="no-print"
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton></Modal.Header>
        <Styled.AiOutlineCheckCircleStyled />
        <Modal.Title>
          {" "}
          <Styled.TitleModal>Cliente cadastrado com sucesso!</Styled.TitleModal>
        </Modal.Title>
        <Modal.Body>
          <Styled.SubTitle>Deseja cadastrar um novo cliente?</Styled.SubTitle>
        </Modal.Body>
        <Modal.Footer>
          <Styled.DivModalFooter>
            <AldieselButton
              title="Confirmar"
              onClick={() => setShowModal(false)}
            ></AldieselButton>
            <AldieselButton
              title="Cancelar"
              onClick={() => history.push("/patio")}
            ></AldieselButton>
          </Styled.DivModalFooter>
        </Modal.Footer>
      </Modal>

      <AldielselToast
        show={showRegisterCostumerSuccess}
        onClose={() => setShowRegisterCostumerSuccess(false)}
        animation
        autohide
        delay={5000}
        icon={<Styled.AiOutlineCheckCircleStyled />}
        message="Cliente cadastrado com sucesso!"
      />

      <AldielselToast
        show={showRegisterCostumerError}
        onClose={() => setShowRegisterCostumerError(false)}
        animation
        autohide
        delay={5000}
        icon={<Styled.FiAlertCircleToastStyled />}
        message="N??o foi poss??vel cadastrar cliente!"
      />
    </Styled.Container>
  );
}
