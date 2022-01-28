import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { AiOutlineEdit, AiOutlinePrinter } from "react-icons/ai";
import ModalGerarOrdemDeServico from '../Modais/OrdemDeServico';
import ModalCadastrarCarro from '../Modais/CadastrarCarro';
import ModalExlcuirCliente from '../Modais/ExcluirCliente';
import ModalExlcuirCarro from '../Modais/ExcluirCarro';
import { Table, Button, Modal } from 'react-bootstrap';
import { FiAlertCircle } from "react-icons/fi";
import ReactTooltip from 'react-tooltip';
import { BiTrash } from "react-icons/bi";
import { BiFile } from "react-icons/bi";
import styled from 'styled-components';
import { api } from '../../api';


import './dash.css';

export default function TabelaDashboard() {
  const [showModalCadastrarCarro, setShowModalCadastrarCarro] = useState(false)
  const [showModalExcluirCliente, setShowModaExcluirCliente] = useState(false)
  const [showModalExcluircarro, setShowModaExcluirCarro] = useState(false)
  const [showModalOrdemDeServico, setShowModalOrdemDeServico] = useState(false)
  const [showModalOrdemExistente, setShowModalOrdemExistente] = useState(false)
  const [showModalCarroExistente, setShowModalCarroExistente] = useState(false)
  const [clientes, setClientes] = useState([])
  const [carros, setCarros] = useState([])
  const [ordemDeServico, setOrdemDeServico] = useState([])
  const [idCliente, setIdCliente] = useState()
  const [idCarro, setIdCarro] = useState()
  const history = useHistory()

  useEffect(() => {
    api.get('/clientes/listar/')
      .then((response) => setClientes(response.data))
      .catch((err) => {
        console.error("Erro" + err)
      })
    api.get('/clientes/carros/listar')
      .then((response) => setCarros(response.data))
      .catch((err) => {
        console.error(err.message)
      })
    api.get(`/clientes/ordemdeservico/listar`)
      .then((response) => setOrdemDeServico(response.data))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function gerarOs(id) {
    const idOs = ordemDeServico.map(ordem => ordem.id_carros).find(element => element === id)
    if (idOs) {
      setShowModalOrdemExistente(true)
    } else {
      setShowModalOrdemDeServico(true)
      setIdCarro(id)
    }
  }


  function atualizarCliente(id) {
    history.push(`/clientes/atualizar/${id}`)
  }

  function adicionarCarro(id) {
    setShowModalCadastrarCarro(true)
    setIdCliente(id)
  }

  function excluirCarro(id) {
    // const idOs = ordemDeServico.map(ordem => ordem).find(element => element.id_carros === id)
    // console.log(idOs)
    setShowModaExcluirCarro(true)
    setIdCarro(id)
  }

  function deletarCliente(id) {
    const idCarros = carros.map(carro => carro.id_cliente).find(element => element === id)
    if (idCarros) {
      setShowModalCarroExistente(true)
    } else {
      setShowModaExcluirCliente(true)
      setIdCliente(id)
    }
  }

  return (
    <Container>
      {clientes.map((cliente, indexCliente) => (
        <Card className='mb-3' key={cliente.id_cliente} >
          <FirstRow >
            <DivNome>
              <Title>Cliente:</Title>
              <SubTitle>{cliente.nome}</SubTitle>
            </DivNome>
            <SubtitleData>{cliente.entrada}</SubtitleData>
            <DivIcons>
              <ReactTooltip />
              <AiOutlineEditStyled data-effect='solid' data-background-color='#8e9cca' data-tip='Atualizar dados do cliente' onClick={() => atualizarCliente(cliente.id_cliente)} />

              <ReactTooltip />
              <BiTrashStyled data-tip='Excluir cliente' data-effect='solid' data-background-color='#8e9cca' onClick={() => deletarCliente(cliente.id_cliente)} />
            </DivIcons>
          </FirstRow>
          <hr />

          <Table size='sm' hover responsive >
            <thead>
              <tr>
                <th>Veículo</th>
                <th>Placa</th>
                <th>Ano</th>
                <th>Cor</th>
                <th>Entrada</th>
                <th>Ações</th>
              </tr>
            </thead>
            {carros.map((carro, indexCarro) => (
              (cliente.id_cliente === carro.id_cliente) &&
              <tbody key={carro.id_carros} >
                <tr>
                  <td className='td-center'>{carro.modelo}</td>
                  <td className='td-placa td-center'>{carro.placa}</td>
                  <td className='td-situacao td-center' > {carro.ano}  </td>
                  <td className='td-situacao td-center' > {carro.cor} </td>
                  <td className='td-situacao td-center' > {carro.entrada} </td>

                  <td className='td-situacao td-center' >
                    <ReactTooltip />
                    <BiFileStyled data-tip='Gerar OS' data-effect='solid' data-background-color='#8e9cca' onClick={() => gerarOs(carro.id_carros)} />

                    <ReactTooltip />
                    <AiOutlinePrinterStyled data-tip='Imprimir OS' data-effect='solid' data-background-color='#8e9cca' onClick={() => history.push(`/clientes/ordemdeservico/encontrar/${carro.id_cliente}`)} />

                    <ReactTooltip />
                    <BiTrashStyled data-tip='Excluir veiculo' data-effect='solid' data-background-color='#8e9cca' onClick={() => excluirCarro(carro.id_carros)} />
                  </td>
                </tr>
              </tbody>
            ))}


          </Table>
          <DivButtons>
            <ButtonStyled onClick={() => adicionarCarro(cliente.id_cliente)} variant='outline-primary'> Adicionar Carro </ButtonStyled>
          </DivButtons>
        </Card>
      ))
      }
      <ModalCadastrarCarro show={showModalCadastrarCarro} id_cliente={idCliente} onHide={() => setShowModalCadastrarCarro(false)} />

      <ModalExlcuirCarro show={showModalExcluircarro} id_carro={idCarro} onHide={() => setShowModaExcluirCarro(false)} />

      <ModalExlcuirCliente show={showModalExcluirCliente} id_cliente={idCliente} onHide={() => setShowModaExcluirCliente(false)} />

      <ModalGerarOrdemDeServico show={showModalOrdemDeServico} id_carro={idCarro} onHide={() => setShowModalOrdemDeServico(false)} />

      <Modal centered size='xs' show={showModalOrdemExistente} onHide={() => setShowModalOrdemExistente(false)}>
        <Modal.Header closeButton></Modal.Header>
        <FiAlertCircleStyled />
        <Modal.Title><Title>Ops... algo deu errado!</Title></Modal.Title>
        <SubTitleModal>Essa ordem de serviço já foi cadastrada.</SubTitleModal>
      </Modal>

      <Modal centered size='xs' show={showModalCarroExistente} onHide={() => setShowModalCarroExistente(false)}>
        <Modal.Header closeButton></Modal.Header>
        <FiAlertCircleStyled />
        <Modal.Title><Title>Ops... algo deu errado!</Title></Modal.Title>
        <SubTitleModal>Antes de exlcuir o cliente verifique se ele possui veiculos cadastrados em sistema.</SubTitleModal>
      </Modal>

    </Container>
  )
}

const FiAlertCircleStyled = styled(FiAlertCircle)`
  text-align: center;
  color: #f50b0b;
  font-size: 2rem;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const Card = styled.div`
  display: grid;
  width: 70%;
  height: auto;
  border: 0.15rem solid #8e9cca;
  border-radius: 0.6rem;
  background-color: white;
  box-shadow: 0.15rem 0.2rem 0.4rem 0.1rem #6776ac;
  `;

const FirstRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1rem;
  text-align: left;
  padding: 1rem 0 0 1rem;
  color: #000;
  font-weight: bold;
  `;

const Title = styled.h4`
  text-align: center;
  color: #000;
  font-weight: bold;
  display: inherit;
`;

const SubTitle = styled.h5`
  text-align: left;
  color: #8e9cca;
  font-weight: bold;
  display: inherit;
  line-height: 1.9rem;
`;

const SubTitleModal = styled.h5`
  text-align: center;
  color: #8e9cca;
  font-weight: bold;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`

const SubtitleData = styled.h6`
  text-align: left;
  color: #000000;
  font-weight: bold;
`;

const DivNome = styled.div`
  display: grid;
  grid: auto-flow dense / 7rem 1fr 1fr;
  grid-column: span 10;
  `;

const DivIcons = styled.div`
  display: grid;
  grid: auto-flow dense / 2.5rem 1fr;
  margin-right: 1rem;
  `;

const AiOutlineEditStyled = styled(AiOutlineEdit)`
  margin-left: 1rem;
  margin-top: 0.1rem;
  color: #696a6b;
  cursor: pointer; 
  font-size: 1.5rem;
`;

const BiTrashStyled = styled(BiTrash)`
  margin-left: 1rem;
  margin-top: 0.1rem;
  color: #696a6b;
  cursor: pointer;
  font-size: 1.5rem;
  `
const BiFileStyled = styled(BiFile)`
  margin-left: 1rem;
  margin-top: 0.1rem;
  color: #696a6b;
  cursor: pointer;
  font-size: 1.5rem;
  `
const AiOutlinePrinterStyled = styled(AiOutlinePrinter)`
  margin-left: 1rem;
  margin-top: 0.1rem;
  color: #696a6b;
  cursor: pointer;
  font-size: 1.5rem;
`;

const DivButtons = styled.div`
  display: inline;
  text-align: right;
  margin-bottom: 1rem;
`;

const ButtonStyled = styled(Button)`
  color: #8e9cca;
  border-color: #8e9cca;
  transition: ease-in-out 0.5s;
  width: auto;
  font-weight: bold;
  margin-right: 1rem;
  line-height: 1rem;
  :hover{
   background-color: #8e9cca ;
   border-color: #000 ;

  }
`;