import React from "react";
import { Modal } from 'react-bootstrap'
import LoadSpinner from "../LoadSpinner";

export const ModalLogout = (props) => {
  return (
    <Modal centered size="sm" show={props.show} onHide={props.close}>
      <LoadSpinner />
      <Modal.Header ></Modal.Header>
      <Modal.Title>{props.titulo}</Modal.Title>
      <Modal.Body>{props.subtitulo}</Modal.Body>
    </Modal>
  )
}