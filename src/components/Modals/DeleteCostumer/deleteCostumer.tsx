import React, { useState } from "react";

import { Modal, Toast, ToastContainer } from "react-bootstrap";
import { api } from "../../../api";
import { AldieselButton } from "../../AldieselButton/aldieselButton";
import * as Styled from "./deleteCostumer.styles";
import { seconds } from "../../../utils/data";

type ModalDeleteCostumerProps = {
  idCostumer: number | undefined;
  onHide: () => void;
  show: boolean;
  showToast: boolean
};

export function ModalDeleteCostumer(props: ModalDeleteCostumerProps) {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
 

  function deleteCostumer() {
    api.delete(`/clientes/deletar/${props.idCostumer}`);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      props.onHide();
      // window.location.reload();
    }, 1000);
    setShowToast(true);
  }

  return (
    <Styled.Container>
      <Modal
        centered
        className="no-print"
        id_costumer="true"
        show={props.show}
        onHide={props.onHide}
      >
        <Modal.Header closeButton></Modal.Header>
        <Styled.FiAlertCircleStyled />
        <Modal.Title>
          {" "}
          <Styled.TitleModal>Deseja excluir esse cliente?</Styled.TitleModal>
        </Modal.Title>
        <Modal.Body>
          <Styled.SubTitleModal>
            Os dados desse cliente serão removidos definitavemente
          </Styled.SubTitleModal>
        </Modal.Body>
        <Modal.Footer>
          <Styled.DivModalFooter>
            <AldieselButton
              title="Confirmar"
              onClick={deleteCostumer}
            ></AldieselButton>
            <AldieselButton
              title="Cancelar"
              onClick={props.onHide}
            ></AldieselButton>
          </Styled.DivModalFooter>
        </Modal.Footer>
      </Modal>
      {/* <Modal
        centered
        size="sm"
        className="no-print"
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Styled.SpinnerStyled animation="border" variant="danger" />
        <Modal.Title>
          {" "}
          <Styled.SubTitle>Excluindo cliente...</Styled.SubTitle>
        </Modal.Title>
      </Modal> */}
      <ToastContainer position="bottom-end" className="mb-3 me-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} animation autohide delay={4000}>
          <Toast.Header closeButton>
            <strong className="me-auto">Aldiesel</strong>
            <small>Messagem</small>
          </Toast.Header>
          <Toast.Body >Cliente excluido com sucesso</Toast.Body>
        </Toast>
      </ToastContainer>
      ;
    </Styled.Container>
  );
}
