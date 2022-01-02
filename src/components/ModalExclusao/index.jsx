import React from "react";
import { Modal, Button } from 'react-bootstrap'
import './modal.css'

export const ModalExclusao = (props) => {
  return (
    <Modal centered size="xs" show={props.show} onHide={props.close}>
      <Modal.Header ><h1>Atenção</h1></Modal.Header>
      <Modal.Title>{props.titulo}</Modal.Title>
      <Modal.Body>{props.subtitulo}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.deleteOs}>Confirmar</Button>
        <Button variant="primary" onClick={props.close}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  )
}