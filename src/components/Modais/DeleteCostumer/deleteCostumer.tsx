import React, { useState } from 'react'

import { Modal } from 'react-bootstrap'
import { api } from '../../../api'
import * as Styled from './deleteCostumer.styles'

type ModalDeleteCostumerProps = {
  id_costumer: number | undefined,
  onHide: () => void,
  show: boolean
}

export function ModalDeleteCostumer(props: ModalDeleteCostumerProps) {

  const [showModal, setShowModal] = useState(false)

  function deleteCostumer() {
    api.delete(`/clientes/deletar/${props.id_costumer
      }`)
    setShowModal(true)
    setTimeout(() => {
      setShowModal(false)
      props.onHide()
      window.location.reload();
    }, 1000);
  }

  return (
    < Styled.Container >
      <Modal centered className="no-print" id_costumer='true' show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton></Modal.Header>
        <Styled.FiAlertCircleStyled />
        <Modal.Title> <Styled.TitleModal>Deseja excluir esse cliente?</Styled.TitleModal></Modal.Title>
        <Modal.Body><Styled.SubTitleModal>Os dados desse cliente serão removidos definitavemente</Styled.SubTitleModal></Modal.Body>
        <Modal.Footer>
          <Styled.DivModalFooter>
            <Styled.ButtonModalStyled variant='outline-primary' onClick={deleteCostumer}>Confirmar</Styled.ButtonModalStyled>
            <Styled.ButtonModalStyled variant='outline-primary' onClick={props.onHide}>Cancelar</Styled.ButtonModalStyled>
          </Styled.DivModalFooter>
        </Modal.Footer>
      </Modal>

      <Modal centered size='sm' className="no-print" show={showModal} onHide={() => setShowModal(false)}>
        <Styled.SpinnerStyled animation="border" variant='danger' />
        <Modal.Title> <Styled.SubTitle>Excluindo cliente...</Styled.SubTitle></Modal.Title>
      </Modal>
    </Styled.Container >
  )
}


