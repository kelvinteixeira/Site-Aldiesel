import React, { useState } from "react";

import { Modal } from "react-bootstrap";
import { api } from "../../../api";
import { AldieselButton } from "../../AldieselButton/aldieselButton";
import { AldielselToast } from "../../AldieselToast/toast";
import * as Styled from "./deleteCostumer.styles";

type ModalDeleteCostumerProps = {
  idCostumer: number | undefined;
  onHide: () => void;
  show: boolean;
};

export function ModalDeleteCostumer(props: ModalDeleteCostumerProps) {
  const [showToastSuccess, setShowToastSuccess] = useState(false);
  const [showToastError, setShowToastError] = useState(false);

  async function deleteCostumer() {
    try {
      await api.delete(`/clientes/deletar/${props.idCostumer}`);
      props.onHide();
      setShowToastSuccess(true);
      setTimeout(() => {
        // window.location.reload();
      }, 1000);
    } catch {
      setShowToastError(true);
    }
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

      <AldielselToast
        show={showToastSuccess}
        onClose={() => setShowToastSuccess(false)}
        animation={true}
        autohide={true}
        delay={5000}
        icon={<Styled.AiOutlineCheckCircleStyled />}
        message="Cliente excluido com sucesso!"
      />

      <AldielselToast
        show={showToastError}
        onClose={() => setShowToastError(false)}
        animation
        autohide
        delay={5000}
        icon={<Styled.FiAlertCircleToastStyled />}
        message="Não foi possível excluir o cliente!"
      />
    </Styled.Container>
  );
}
