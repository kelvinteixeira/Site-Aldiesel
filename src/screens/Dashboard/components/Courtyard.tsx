import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ModalRegisterServiceOrder } from '../../../components/Modals/RegisterServiceOrder/registerServiceOrder';
import { ModalUpdateCostumer } from '../../../components/Modals/UpdateCostumer/updateCostumer';
import { ModalDeleteCostumer } from '../../../components/Modals/DeleteCostumer/deleteCostumer';
import { ModalRegisterCar } from '../../../components/Modals/RegisterCar/registerCar';
import { ModalDeleteCar } from '../../../components/Modals/DeleteCar/deleteCar';
import { CarItems, CostumerItems } from '../../../shared/GlobalTypes';
import * as Styled from '../Styles/Courtyard.styles';
import ReactTooltip from 'react-tooltip';
import { Modal } from 'react-bootstrap';
import { api } from '../../../api';



export function CourtyardTable() {
  const [showModalUpdateCostumer, setShowModalUpdateCostumer] = useState(false)
  const [showModalDeleteCostumer, setShowModalDeleteCostumer] = useState(false)

  const [showModalRegisterCar, setShowModalRegisterCar] = useState(false)
  const [showModalExistingCar, setShowModalExistingCar] = useState(false)
  const [showModalDeleteCar, setShowModalDeleteCar] = useState(false)

  const [showModalExistingServiceOrder, setShowModalExistingServiceOrder] = useState(false)
  const [showModalServiceOrder, setShowModalServiceOrder] = useState(false)

  const [idCostumer, setIdCostumer] = useState<number>(0)
  const [serviceOrder, setServiceOrder] = useState([])
  const [costumers, setCostumers] = useState([])
  const [idCar, setIdCar] = useState<number>()
  const [cars, setCars] = useState([])
  const history = useHistory()

  useEffect(() => {
    api.get('/clientes/listar/')
      .then((response) => setCostumers(response.data))
      .catch((err) => {
        console.error("Erro" + err)
      })
    api.get('/carros/listar')
      .then((response) => setCars(response.data))
      .catch((err) => {
        console.error(err.message)
      })
    api.get(`/ordemdeservico/listar`)
      .then((response) => setServiceOrder(response.data))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function generateServiceOrder(id: number) {
    const idServiceOrder = serviceOrder.map((order: { id_car: number }) => order.id_car).find(element => element === id)
    if (idServiceOrder) {
      setShowModalExistingServiceOrder(true)
    } else {
      setShowModalServiceOrder(true)
      setIdCar(id)
    }
  }

  function updateCostumer(id: number) {
    setIdCostumer(id)
    setShowModalUpdateCostumer(true)
  }

  function addCar(id: number) {
    setShowModalRegisterCar(true)
    setIdCostumer(id)
  }

  function deleteCar(id: number) {
    setShowModalDeleteCar(true)
    setIdCar(id)
  }

  function deleteCostumer(id: number) {
    const idCars = cars.map((car: CarItems) => car.idCostumer).find(element => element === id)
    if (idCars) {
      setShowModalExistingCar(true)
    } else {
      setShowModalDeleteCostumer(true)
      setIdCostumer(id)
    }
  }

  return (
    <Styled.Container>
      {costumers.map((costumer: CostumerItems) => (
        <Styled.Card className='mb-3' key={costumer.id} >
          <Styled.FirstRow >
            <Styled.DivNome>
              <Styled.Title>Cliente:</Styled.Title>
              <Styled.SubTitle>{costumer.name}</Styled.SubTitle>
            </Styled.DivNome>
            <Styled.SubtitleData>{costumer.entryDate}</Styled.SubtitleData>
            <Styled.DivIcons>
              <ReactTooltip />
              <Styled.AiOutlineEditStyled data-effect='solid' data-background-color='#8e9cca' data-tip='Atualizar dados do cliente' onClick={() => updateCostumer(costumer.id)} />

              <ReactTooltip />
              <Styled.BiTrashStyled data-tip='Excluir cliente' data-effect='solid' data-background-color='#8e9cca' onClick={() => deleteCostumer(costumer.id)} />
            </Styled.DivIcons>
          </Styled.FirstRow>
          <hr />

          <Styled.TableStyled size='sm' hover   >
            <thead>
              <tr>
                <th>Veículo</th>
                <th>Placa</th>
                <th>Ano</th>
                <th>Cor</th>
                <th>Entrada</th>
                <th>Problema</th>
                <th></th>
                <th>Ações</th>
              </tr>
            </thead>
            {cars.map((car: CarItems) => (
              (costumer.id === car.idCostumer) &&
              <tbody key={car.id} >
                <tr>
                  <td>{car.model}</td>
                  <td>{car.licensePlate}</td>
                  <td>{car.year}  </td>
                  <td>{car.color} </td>
                  <td>{car.entryDate} </td>
                  <td colSpan={2}>{car.problem} </td>
                  <td>
                    <ReactTooltip />
                    <Styled.BiFileStyled data-tip='Gerar OS' data-effect='solid' data-background-color='#8e9cca' onClick={() => generateServiceOrder(car.id)} />

                    <ReactTooltip />
                    <Styled.AiOutlinePrinterStyled data-tip='Imprimir OS' data-effect='solid' data-background-color='#8e9cca' onClick={() => history.push(`/clientes/ordemdeservico/encontrar/${car.idCostumer}`)} />

                    <ReactTooltip />
                    <Styled.BiTrashStyled data-tip='Excluir veiculo' data-effect='solid' data-background-color='#8e9cca' onClick={() => deleteCar(car.id)} />
                  </td>
                </tr>
              </tbody>
            ))}

          </Styled.TableStyled>
          <Styled.DivButtons>
            <Styled.ButtonStyled onClick={() => addCar(costumer.id)} variant='outline-primary'> Adicionar Carro </Styled.ButtonStyled>
          </Styled.DivButtons>
        </Styled.Card>
      ))
      }
      <ModalRegisterCar show={showModalRegisterCar} idCostumer={idCostumer} onHide={() => setShowModalRegisterCar(false)} />

      <ModalDeleteCar show={showModalDeleteCar} idCar={idCar} onHide={() => setShowModalDeleteCar(false)} />

      <ModalDeleteCostumer show={showModalDeleteCostumer} idCostumer={idCostumer} onHide={() => setShowModalDeleteCostumer(false)} />

      <ModalRegisterServiceOrder show={showModalServiceOrder} idCar={idCar} onHide={() => setShowModalServiceOrder(false)} />

      <ModalUpdateCostumer show={showModalUpdateCostumer} idCostumer={idCostumer} onHide={() => setShowModalUpdateCostumer(false)} />

      <Modal centered show={showModalExistingServiceOrder} onHide={() => setShowModalExistingServiceOrder(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Styled.FiAlertCircleStyled />
        <Modal.Title><Styled.Title>Ops... algo deu errado!</Styled.Title></Modal.Title>
        <Styled.SubTitleModal>Essa ordem de serviço já foi cadastrada.</Styled.SubTitleModal>
      </Modal>

      <Modal centered show={showModalExistingCar} onHide={() => setShowModalExistingCar(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Styled.FiAlertCircleStyled />
        <Modal.Title><Styled.Title>Ops... algo deu errado!</Styled.Title></Modal.Title>
        <Styled.SubTitleModal>Antes de exlcuir o cliente, remova os seus veiculos cadastrados.</Styled.SubTitleModal>
      </Modal>
    </Styled.Container>
  )
}

