import React from "react";
import { Button, Modal } from 'react-bootstrap'
import styled from 'styled-components'


export function ModalValidacao(props) {
  return (
    <Modal centered size='xs' className="no-print" show={props.show} onHide={props.close}>
      <Modal.Header></Modal.Header>
      <Modal.Title>{props.titulo}</Modal.Title>
      <Modal.Body>{props.subtitulo}</Modal.Body>
      <Modal.Footer>
        <ButtonStyled variant='outline-primary' onClick={props.close}>Fechar</ButtonStyled>
      </Modal.Footer>
    </Modal>
  );
}


const ButtonStyled = styled(Button)`
  color: #8e9cca;
  border-color: #8e9cca;
  margin-top: 2rem;
  width: 100%;
  transition: ease-in-out 0.5s;
  font-weight: bold;

  :hover{
   background-color: #8e9cca ;
   border-color: #000 ;

  }
`;
