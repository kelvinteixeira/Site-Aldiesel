import React from "react";
import { Modal, Button } from 'react-bootstrap'
import FormOrdemDeServico from '../FormOrdemDeServico'

export const ModalAtualizacao = (props) => {
  return (
    <Modal size='lg' backdrop='static' keyboard={false} show={props.show} onHide={props.close}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <FormOrdemDeServico />
      </Modal.Body>
    </Modal>
  )
}