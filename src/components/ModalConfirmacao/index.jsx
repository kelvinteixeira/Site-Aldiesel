import React from "react";
import { Button, Modal } from 'react-bootstrap'

export function ModalConfirmacao(props) {
  return (
    <>
      <Modal centered size="sm" className="modal no-print" show={props.show} onHide={props.close}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{props.subtitulo}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => window.print()}>
            Imprimir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
