import React from "react";
import { Button, Modal } from 'react-bootstrap'
import './modal.css'

export function ModalOs(props) {
  return (
    <Modal centered size='xs' backdrop="static" keyboard={false}
      className="no-print" show={props.show} onHide={props.close}>
      <Modal.Header></Modal.Header>
      <Modal.Title>{props.titulo}</Modal.Title>
      <Modal.Body>{props.subtitulo}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.gerarOs}>Gerar OS</Button>
        <Button variant="danger" onClick={props.close}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  );
}

