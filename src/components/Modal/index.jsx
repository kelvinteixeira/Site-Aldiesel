import React from "react";
import { Modal } from 'react-bootstrap'
import LoadSpinner from "../LoadSpinner";
import './modal.css'

export const ModalLoger = (props) => {

  return (
    <Modal centered size="sm" className="modal" show={props.show}>
      <LoadSpinner />
      <Modal.Title>{props.titulo}</Modal.Title>
      <Modal.Body>{props.subtitulo}</Modal.Body>
    </Modal>
  )
}