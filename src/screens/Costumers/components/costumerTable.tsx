import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ModalInfoCostumer } from '../../../components/Modals/InfoCostumer/InfoCostumer';
import { CarItems, CostumerItems, ServiceOrderItems } from '../../../shared/GlobalTypes';
import * as Styled from '../styles/costumerTable.styles';
import { Accordion } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import { api } from '../../../api';

export function CostumersTable() {
  const [showModalUpdateCostumer, setShowModalUpdateCostumer] = useState(false)
  const [idCostumer, setIdCostumer] = useState<number>(0)
  const [serviceOrder, setServiceOrder] = useState<Array<ServiceOrderItems>>([])
  const [costumers, setCostumers] = useState<Array<CostumerItems>>([])
  const [cars, setCars] = useState<Array<CarItems>>([])
  const history = useHistory()

  useEffect(() => {
    api.get('/clientes/listar/')
      .then((response) => {
        setCostumers(response.data.costumers)
        setCars(response.data.cars)
        setServiceOrder(response.data.serviceOrders)
      })
      .catch((err) => {
        console.error("Erro" + err)
      })
  }, [])


  function updateCostumer(id: number) {
    setIdCostumer(id)
    setShowModalUpdateCostumer(true)
  }

  return (
    <Styled.Container>
      {costumers.map((costumer) =>
        <Styled.AccordionStyled className='mb-3 ' key={costumer.id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header >
              <Styled.FirstRow >
                <Styled.DivNome>
                  <Styled.Title>Cliente:</Styled.Title>
                  <Styled.SubTitle>{costumer.name}</Styled.SubTitle>
                </Styled.DivNome>
                <Styled.SubtitleData>{costumer.entryDate}</Styled.SubtitleData>
                <Styled.DivIcons>
                  <ReactTooltip />
                  <Styled.AiOutlineInfoCircleStyled data-effect='solid' data-background-color='#8e9cca' data-tip='Informações do cliente' onClick={() => updateCostumer(costumer.id)} />
                </Styled.DivIcons>
              </Styled.FirstRow>
            </Accordion.Header>

            <Accordion.Body>
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
                    <th>Situação</th>
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
                      <td>{serviceOrder.map(item => item.situation)}</td>
                      <td>

                        <ReactTooltip />
                        <Styled.AiOutlinePrinterStyled data-tip='Imprimir OS' data-effect='solid' data-background-color='#8e9cca' onClick={() => history.push(`/ordemdeservico/encontrar/${car.idCostumer}`)} />
                      </td>
                    </tr>
                  </tbody>
                ))}

              </Styled.TableStyled>
            </Accordion.Body>
          </Accordion.Item>
        </Styled.AccordionStyled>
      )
      }

      <ModalInfoCostumer show={showModalUpdateCostumer} idCostumer={idCostumer} onHide={() => setShowModalUpdateCostumer(false)} />

    </Styled.Container>

  )
}

