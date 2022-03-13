import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import ModalAtualizarDadosCliente from '../../../components/Modais/UpdateCostumer';
import ModalGerarOrdemDeServico from '../../../components/Modais/RegisterServiceOrder';
import ModalCadastrarCarro from '../../../components/Modais/RegisterCar';
import ModalExlcuirCliente from '../../../components/Modais/DeleteCostumer';
import { ModalDeleteCar } from '../../../components/Modais/DeleteCar/deleteCar';
import { Modal } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import { api } from '../../../api';
import * as Styled from '../Styles/Courtyard.styles'

type carsItems = {
  id_carros: number,
  id_cliente: number,
  modelo: string,
  placa: string,
  ano: string,
  cor: string,
  problema: string,
  entrada: string
}

type costumerItems = {
  id_cliente: number,
  nome: string,
  entrada: string
}

type serviceOrderItems = {
  id_carros: number
}

export function CourtyardTable() {
  const [showModalUpdateCostumer, setShowModalUpdateCostumer] = useState(false)
  const [showModalDeleteCostumer, setShowModalDeleteCostumer] = useState(false)

  const [showModalRegisterCar, setShowModalRegisterCar] = useState(false)
  const [showModalDeleteCar, setShowModalDeleteCar] = useState(false)
  const [showModalExistingCar, setShowModalExistingCar] = useState(false)

  const [showModalServiceOrder, setShowModalServiceOrder] = useState(false)
  const [showModalExistingServiceOrder, setShowModalExistingServiceOrder] = useState(false)

  const [costumers, setCostumers] = useState([])
  const [cars, setCars] = useState([])
  const [serviceOrder, setServiceOrder] = useState([])
  const [idCostumer, setIdCostumer] = useState<number>()
  const [idCar, setIdCar] = useState<number>()
  const history = useHistory()

  useEffect(() => {
    api.get('/clientes/listar/')
      .then((response) => setCostumers(response.data))
      .catch((err) => {
        console.error("Erro" + err)
      })
    api.get('/clientes/carros/listar')
      .then((response) => setCars(response.data))
      .catch((err) => {
        console.error(err.message)
      })
    api.get(`/clientes/ordemdeservico/listar`)
      .then((response) => setServiceOrder(response.data))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function generateServiceOrder(id: number) {
    const idServiceOrder = serviceOrder.map((order: serviceOrderItems) => order.id_carros).find(element => element === id)
    if (idServiceOrder) {
      setShowModalExistingServiceOrder(true)
    } else {
      setShowModalServiceOrder(true)
      setIdCar(id)
    }
  }

  function updateCostumer(id: number) {
    setShowModalUpdateCostumer(true)
    setIdCostumer(id)
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
    const idCars = cars.map((car: carsItems) => car.id_cliente).find(element => element === id)
    if (idCars) {
      setShowModalExistingCar(true)
    } else {
      setShowModalDeleteCostumer(true)
      setIdCostumer(id)
    }
  }

  return (
    <Styled.Container>
      {costumers.map((costumer: costumerItems) => (
        <Styled.Card className='mb-3' key={costumer.id_cliente} >
          <Styled.FirstRow >
            <Styled.DivNome>
              <Styled.Title>Cliente:</Styled.Title>
              <Styled.SubTitle>{costumer.nome}</Styled.SubTitle>
            </Styled.DivNome>
            <Styled.SubtitleData>{costumer.entrada}</Styled.SubtitleData>
            <Styled.DivIcons>
              <ReactTooltip />
              <Styled.AiOutlineEditStyled data-effect='solid' data-background-color='#8e9cca' data-tip='Atualizar dados do cliente' onClick={() => updateCostumer(costumer.id_cliente)} />

              <ReactTooltip />
              <Styled.BiTrashStyled data-tip='Excluir cliente' data-effect='solid' data-background-color='#8e9cca' onClick={() => deleteCostumer(costumer.id_cliente)} />
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
            {cars.map((cars: carsItems) => (
              (costumer.id_cliente === cars.id_cliente) &&
              <tbody key={cars.id_carros} >
                <tr>
                  <td>{cars.modelo}</td>
                  <td>{cars.placa}</td>
                  <td>{cars.ano}  </td>
                  <td>{cars.cor} </td>
                  <td>{cars.entrada} </td>
                  <td colSpan={2}>{cars.problema} </td>
                  <td>
                    <ReactTooltip />
                    <Styled.BiFileStyled data-tip='Gerar OS' data-effect='solid' data-background-color='#8e9cca' onClick={() => generateServiceOrder(cars.id_carros)} />

                    <ReactTooltip />
                    <Styled.AiOutlinePrinterStyled data-tip='Imprimir OS' data-effect='solid' data-background-color='#8e9cca' onClick={() => history.push(`/clientes/ordemdeservico/encontrar/${cars.id_cliente}`)} />

                    <ReactTooltip />
                    <Styled.BiTrashStyled data-tip='Excluir veiculo' data-effect='solid' data-background-color='#8e9cca' onClick={() => deleteCar(cars.id_carros)} />
                  </td>
                </tr>
              </tbody>
            ))}

          </Styled.TableStyled>
          <Styled.DivButtons>
            <Styled.ButtonStyled onClick={() => addCar(costumer.id_cliente)} variant='outline-primary'> Adicionar Carro </Styled.ButtonStyled>
          </Styled.DivButtons>
        </Styled.Card>
      ))
      }
      <ModalCadastrarCarro show={showModalRegisterCar} id_costumer={idCostumer} onHide={() => setShowModalRegisterCar(false)} />

      <ModalDeleteCar show={showModalDeleteCar} id_car={idCar} onHide={() => setShowModalDeleteCar(false)} />

      <ModalExlcuirCliente show={showModalDeleteCostumer} id_costumer={idCostumer} onHide={() => setShowModalDeleteCostumer(false)} />

      <ModalGerarOrdemDeServico show={showModalServiceOrder} id_car={idCar} onHide={() => setShowModalServiceOrder(false)} />

      <ModalAtualizarDadosCliente show={showModalUpdateCostumer} id_costumer={idCostumer} onHide={() => setShowModalUpdateCostumer(false)} />

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

