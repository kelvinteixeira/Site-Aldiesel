import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { ModalRegisterServiceOrder } from "../../../components/Modals/RegisterServiceOrder/registerServiceOrder";
import { ModalUpdateCostumer } from "../../../components/Modals/UpdateCostumer/updateCostumer";
import { ModalDeleteCostumer } from "../../../components/Modals/DeleteCostumer/deleteCostumer";
import {
  CarItems,
  CostumerItems,
  ServiceOrderItems,
} from "../../../shared/GlobalTypes";
import { ModalRegisterCar } from "../../../components/Modals/RegisterCar/registerCar";
import { AldieselButton } from "../../../components/AldieselButton/aldieselButton";
import { ModalDeleteCar } from "../../../components/Modals/DeleteCar/deleteCar";
import { Accordion, Modal } from "react-bootstrap";
import * as Styled from "../Styles/Courtyard.styles";
import ReactTooltip from "react-tooltip";
import { api } from "../../../api";

export function CourtyardTable() {
  const [showModalUpdateCostumer, setShowModalUpdateCostumer] = useState(false);
  const [showModalDeleteCostumer, setShowModalDeleteCostumer] = useState(false);
  const [showToastDeleteCostumer, setShowToastDeleteCostumer] = useState(false);

  const [showModalRegisterCar, setShowModalRegisterCar] = useState(false);
  const [showModalExistingCar, setShowModalExistingCar] = useState(false);
  const [showModalDeleteCar, setShowModalDeleteCar] = useState(false);

  const [showModalExistingServiceOrder, setShowModalExistingServiceOrder] =
    useState(false);
  const [showModalServiceOrder, setShowModalServiceOrder] = useState(false);

  const [idCostumer, setIdCostumer] = useState<number>(0);
  const [serviceOrders, setServiceOrders] = useState<Array<ServiceOrderItems>>(
    []
  );
  const [costumers, setCostumers] = useState<Array<CostumerItems>>([]);
  const [idCar, setIdCar] = useState<number>(0);
  const [cars, setCars] = useState<Array<CarItems>>([]);
  const [filter, setFilter] = useState("");
  const [costumerState, setCostumerState] = useState(false);
  const history = useHistory();

  useEffect(() => {
    switch (filter) {
      case "Clientes arquivados":
        api
          .get(`/clientes/listar/arquivados`)
          .then((response) => {
            setCostumers(response.data.costumers);
            setCars(response.data.cars);
            setServiceOrders(response.data.serviceOrders);
          })
          .catch((err) => {
            console.error("Erro:" + err);
          });
        setCostumerState(true);
        break;
      case "Todos os clientes":
        api
          .get(`/clientes/listar`)
          .then((response) => {
            setCostumers(response.data.costumers);
            setCars(response.data.cars);
            setServiceOrders(response.data.serviceOrders);
          })
          .catch((err) => {
            console.error("Erro:" + err);
          });
        break;
      default:
        api
          .get("/clientes/listar/ativos")
          .then((response) => {
            setCostumers(response.data.costumers);
            setCars(response.data.cars);
            setServiceOrders(response.data.serviceOrders);
          })
          .catch((err) => {
            console.error("Erro:" + err);
          });
        setCostumerState(false);
    }
  }, [filter, costumerState]);

  function generateServiceOrder(id: number) {
    const idServiceOrder = serviceOrders
      .map((order) => order.idCar)
      .find((element) => element === id);
    if (idServiceOrder) {
      setShowModalExistingServiceOrder(true);
    } else {
      setShowModalServiceOrder(true);
      setIdCar(id);
    }
  }

  function updateCostumer(id: number) {
    setIdCostumer(id);
    setShowModalUpdateCostumer(true);
  }

  function addCar(id: number) {
    setShowModalRegisterCar(true);
    setIdCostumer(id);
  }

  function deleteCar(id: number) {
    setShowModalDeleteCar(true);
    setIdCar(id);
  }

  function deleteCostumer(id: number) {
    const idCars = cars
      .map((car) => car.idCostumer)
      .find((element) => element === id);
    if (idCars) {
      setShowModalExistingCar(true);
    } else {
      setShowModalDeleteCostumer(true);
      setIdCostumer(id);
    }
  }

  function handleCostumerState(id: number, value: string, condition: boolean) {
    api.patch(`/clientes/atualizar/${id}`, {
      costumerState: value,
    });
    setCostumerState(condition);
  }

  return (
    <>
      <Styled.SelectDiv className="mb-3">
        <Styled.FilterTitle>Filtrar</Styled.FilterTitle>
        <Styled.FormSelect
          value={filter}
          onChange={(event: {
            target: { value: React.SetStateAction<string> };
          }) => setFilter(event.target.value)}
        >
          <option disabled>Selecione</option>
          <option>Clientes ativos</option>
          <option>Clientes arquivados</option>
          <option>Todos os clientes</option>
        </Styled.FormSelect>
      </Styled.SelectDiv>

      <Styled.Container>
        {costumers.map((costumer) => (
          <Styled.AccordionStyled className="mb-3 " key={costumer.id}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Styled.FirstRow>
                  <Styled.DivNome>
                    <Styled.AccordionTitle>Cliente:</Styled.AccordionTitle>
                    <Styled.SubTitle>{costumer.name}</Styled.SubTitle>
                  </Styled.DivNome>
                  <Styled.SubtitleData>
                    Entrada: {costumer.entryDate}
                  </Styled.SubtitleData>
                  <Styled.DivIcons>
                    <ReactTooltip />
                    <Styled.AiOutlineInfoCircleStyled
                      data-effect="solid"
                      data-background-color="#8e9cca"
                      data-tip="Informações do cliente"
                      onClick={() => updateCostumer(costumer.id)}
                    />

                    <ReactTooltip />
                    <Styled.BiTrashStyled
                      data-tip="Excluir cliente"
                      data-effect="solid"
                      data-background-color="#8e9cca"
                      onClick={() => deleteCostumer(costumer.id)}
                    />
                  </Styled.DivIcons>
                </Styled.FirstRow>
              </Accordion.Header>

              <Accordion.Body>
                <Styled.TableStyled size="sm" hover>
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
                  {cars.map(
                    (car: CarItems) =>
                      costumer.id === car.idCostumer && (
                        <tbody key={car.id}>
                          <tr>
                            <td>{car.model}</td>
                            <td>{car.licensePlate}</td>
                            <td>{car.year} </td>
                            <td>{car.color} </td>
                            <td>{car.entryDate} </td>
                            <td colSpan={2}>{car.problem} </td>
                            <td>
                              {serviceOrders.map((orders) =>
                                orders.idCar === car.id
                                  ? orders.situation
                                  : null
                              )}
                            </td>
                            <td>
                              <ReactTooltip />
                              <Styled.BiFileStyled
                                data-tip="Gerar OS"
                                data-effect="solid"
                                data-background-color="#8e9cca"
                                onClick={() => generateServiceOrder(car.id)}
                              />

                              <ReactTooltip />
                              <Styled.AiOutlinePrinterStyled
                                data-tip="Imprimir OS"
                                data-effect="solid"
                                data-background-color="#8e9cca"
                                onClick={() =>
                                  history.push(
                                    `/ordemdeservico/encontrar/${car.idCostumer}`
                                  )
                                }
                              />

                              <ReactTooltip />
                              <Styled.BiTrashStyled
                                data-tip="Excluir veiculo"
                                data-effect="solid"
                                data-background-color="#8e9cca"
                                onClick={() => deleteCar(car.id)}
                              />
                            </td>
                          </tr>
                        </tbody>
                      )
                  )}
                </Styled.TableStyled>
                <Styled.DivButtons>
                  <AldieselButton
                    onClick={() => addCar(costumer.id)}
                    title="Adicionar carro"
                  />
                  {costumer.costumerState === "ativo" ? (
                    <AldieselButton
                      onClick={() =>
                        handleCostumerState(costumer.id, "arquivado", true)
                      }
                      title="Arquivar Cliente"
                    />
                  ) : (
                    <AldieselButton
                      onClick={() =>
                        handleCostumerState(costumer.id, "ativo", false)
                      }
                      title="Reativar Cliente"
                    />
                  )}
                </Styled.DivButtons>
              </Accordion.Body>
            </Accordion.Item>
          </Styled.AccordionStyled>
        ))}
        <ModalRegisterCar
          show={showModalRegisterCar}
          idCostumer={idCostumer}
          onHide={() => setShowModalRegisterCar(false)}
        />

        <ModalDeleteCar
          show={showModalDeleteCar}
          idCar={idCar}
          onHide={() => setShowModalDeleteCar(false)}
        />

        <ModalDeleteCostumer
          show={showModalDeleteCostumer}
          idCostumer={idCostumer}
          onHide={() => setShowModalDeleteCostumer(false)}
          showToast={showToastDeleteCostumer}
        />

        <ModalRegisterServiceOrder
          show={showModalServiceOrder}
          idCar={idCar}
          onHide={() => setShowModalServiceOrder(false)}
        />

        <ModalUpdateCostumer
          show={showModalUpdateCostumer}
          idCostumer={idCostumer}
          onHide={() => setShowModalUpdateCostumer(false)}
        />

        <Modal
          centered
          show={showModalExistingServiceOrder}
          onHide={() => setShowModalExistingServiceOrder(false)}
        >
          <Modal.Header closeButton></Modal.Header>
          <Styled.FiAlertCircleStyled />
          <Modal.Title>
            <Styled.AccordionTitle>
              Ops... algo deu errado!
            </Styled.AccordionTitle>
          </Modal.Title>
          <Styled.SubTitleModal>
            Essa ordem de serviço já foi cadastrada.
          </Styled.SubTitleModal>
        </Modal>

        <Modal
          centered
          show={showModalExistingCar}
          onHide={() => setShowModalExistingCar(false)}
        >
          <Modal.Header closeButton></Modal.Header>
          <Styled.FiAlertCircleStyled />
          <Modal.Title>
            <Styled.AccordionTitle>
              Ops... algo deu errado!
            </Styled.AccordionTitle>
          </Modal.Title>
          <Styled.SubTitleModal>
            Antes de exlcuir o cliente, remova os seus veiculos cadastrados.
          </Styled.SubTitleModal>
        </Modal>
      </Styled.Container>
    </>
  );
}
