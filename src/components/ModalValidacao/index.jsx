import React from "react";
import { Button, Modal } from 'react-bootstrap'

export function ModalValidacao(props) {
  return (
    <Modal centered size='xs' className="no-print" show={props.show} onHide={props.close}>
      <Modal.Header></Modal.Header>
      <Modal.Title>{props.titulo}</Modal.Title>
      <Modal.Body>{props.subtitulo}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.close}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

