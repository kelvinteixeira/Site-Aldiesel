import React from "react";
import { Modal, Button } from 'react-bootstrap'

export const ModalAtualizacao = (props) => {
  return (
    <Modal centered size="xs" show={props.show} onHide={props.close}>
      <Modal.Header></Modal.Header>
      <Modal.Title>{props.titulo}</Modal.Title>
      <Modal.Body>{props.subtitulo}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.atualizarOs}>Confirmar</Button>
        <Button variant="danger" onClick={props.close}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  )
}