import React, { useState } from 'react';

import * as Styled from './deleteCar.styles';
import { Modal } from 'react-bootstrap';
import { api } from '../../../api';
import { AldieselButton } from '../../AldieselButton/aldieselButton';

type ModalDeleteCarProps = {
  idCar: number | undefined,
  onHide: () => void,
  show: boolean
}

export function ModalDeleteCar(props: ModalDeleteCarProps) {
  const [showModal, setShowModal] = useState(false)
  
  async function deleteCar() {
    await api.delete(`/carros/deletar/${props.idCar}`)
    setShowModal(true)

    setTimeout(() => {
      setShowModal(false)
      props.onHide()
      window.location.reload();
    }, 1500);
  }

  return (
    < Styled.Container >
      <Modal centered className="no-print" id_car='true' show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton></Modal.Header>
        <Styled.FiAlertCircleStyled />
        <Modal.Title> <Styled.TitleModal>Deseja excluir esse veiculo?</Styled.TitleModal></Modal.Title>
        <Modal.Body><Styled.SubTitleModal>Os dados desse veiculo serão removidos definitavemente</Styled.SubTitleModal></Modal.Body>
        <Modal.Footer>
          <Styled.DivModalFooter>
            <AldieselButton title='Confirmar' onClick={deleteCar}></AldieselButton>
            <AldieselButton title='Cancelar' onClick={props.onHide}></AldieselButton>
          </Styled.DivModalFooter>
        </Modal.Footer>
      </Modal>

      <Modal centered size='sm' className="no-print" show={showModal} onHide={() => setShowModal(false)}>
        <Styled.SpinnerStyled animation="border" variant='danger' />
        <Modal.Title> <Styled.SubTitle>Excluindo veiculo...</Styled.SubTitle></Modal.Title>
      </Modal>
    </Styled.Container >
  )
}

