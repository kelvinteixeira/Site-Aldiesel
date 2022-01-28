import React, { useState } from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import { Button, Modal, Spinner } from 'react-bootstrap'
import { FiAlertCircle } from "react-icons/fi";
import styled from 'styled-components'
import { api } from '../../../api'

export default function ModalExlcuirCarro(params) {
  const [showModal, setShowModal] = useState(false)

  function deletarCarro() {
    api.delete(`/clientes/carros/deletar/${params.id_carro}`)
    setShowModal(true)

    setTimeout(() => {
      < Redirect from='/dashboard' to="/dashboard" />
      setShowModal(false)
      params.onHide()
      window.location.reload();
    }, 1500);
  }

  return (
    < Container >
      <Modal centered size='xs' className="no-print" id_carro='true' show={params.show} onHide={params.onHide}>
        <Modal.Header closeButton></Modal.Header>
        <FiAlertCircleStyled />
        <Modal.Title> <TitleModal>Deseja excluir esse veiculo?</TitleModal></Modal.Title>
        <Modal.Body><SubTitleModal>Os dados desse veiculo serão removidos definitavemente</SubTitleModal></Modal.Body>
        <Modal.Footer>
          <DivModalFooter>
            <ButtonModalStyled variant='outline-primary' onClick={deletarCarro}>Confirmar</ButtonModalStyled>
            <ButtonModalStyled variant='outline-primary' onClick={params.onHide}>Cancelar</ButtonModalStyled>
          </DivModalFooter>
        </Modal.Footer>
      </Modal>

      <Modal centered size='sm' className="no-print" show={showModal} onHide={() => setShowModal(false)}>
        <SpinnerStyled animation="border" variant='danger' />
        <Modal.Title> <SubTitle>Excluindo veiculo...</SubTitle></Modal.Title>
      </Modal>
    </Container >
  )
}

const SpinnerStyled = styled(Spinner)`
  margin: auto;
  margin-top: 2rem;
`;


const ButtonModalStyled = styled(Button)`
  color: #8e9cca;
  border-color: #8e9cca;
  width: 100%;
  margin-right: 1rem;
  transition: ease-in-out 0.5s;
  font-weight: bold;
  :hover{
   background-color: #8e9cca ;
   border-color: #000 ;

  }
`;
const TitleModal = styled.h3`
  text-align: center;
  padding: 2rem 0 1rem 0;
  color: #000000;
  font-weight: bold;
`;

const FiAlertCircleStyled = styled(FiAlertCircle)`
  text-align: center;
  color: #f50b0b;
  font-size: 2rem;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const DivModalFooter = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
margin: auto;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const SubTitle = styled.h5`
  text-align: center;
  color: #000;
  font-weight: bold;
  display: inherit;
  line-height: 3rem;
`;

const SubTitleModal = styled.h5`
  text-align: center;
  color: #8e9cca;
  font-weight: bold;
  padding: 0 2rem 1rem 2rem;
`;
