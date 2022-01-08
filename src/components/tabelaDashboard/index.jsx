import React, { useState, useEffect } from 'react'
import { Table, Button, Form, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import './dash.css'
import { api } from '../../api'
import {  GrPrint, } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import { getSelect } from '../../utils/listaSelect';
import EditFormOrdemDeServico from '../EditFormOrdemDeServico'
// import { ModalExclusao } from '../ModalExclusao';
// import { ModalAtualizacao } from '../ModalAtualizacao';

export default function TabelaDashboard() {
  const [os, setOs] = useState([])
  const [situacao, setSituacao] = useState('')
  const history = useHistory()
  // const [showDelete, setShowDelete] = useState(false)
  // const [showUpdate, setShowUpdate] = useState(false)

  // function handleClose() {
  //   setShowDelete(false)
  //   setShowUpdate(false)
  // }

  // function getModalDelete() {
  //   setShowDelete(true)
  // }

  // function getModalUpdate() {
  //   setShowUpdate(true)
  // }

  function imprimirOS(id) {
    history.push(`/ordemdeservicos/geraros/${id}`)
      //  window.print(data)
  }

  useEffect(() => {
    api.get('/ordemdeservicos/')
      .then((response) => setOs(response.data))
      .catch((err) => {
        console.error("Erro" + err)
      })
  }, [])

  function UpdateOrdemDeServico(id) {
    history.push(`/ordemdeservicos/editar/${id}`)
    // api.put(`/ordemdeservicos/${id}`, { situacao_atual: situacao })
    // setOs(os.map(camp => camp.id !== id))
    // setShowUpdate(false)
  }

  // function deleteClient(id) {
  //   api.delete(`/ordemdeservicos/${id}`)
  //   setOs(os.filter(camp => camp.id !== id))
  //   setShowDelete(false)
  //   return setOs(os.map(camp => camp))
  // }


  return (
    < >
      <h3 className='dashboard-titulo'>Pátio</h3>
      <Table size='sm' bordered hover responsive variant='light'>
        <thead>
          <tr>
            <th>nº</th>
            <th>Cliente</th>
            <th>Veículo</th>
            <th>Placa</th>
            <th>Mecânico</th>
            <th>Entrada</th>
            <th>Modificado</th>
            <th>Situação atual</th>
            <th>Ações</th>
          </tr>
        </thead>
        {os.map((camp, index) => (
          <tbody key={index}>
            <tr>
              <td className='td-center'  >{index + 1}</td>
              <td className='td-nome-cliente' >{camp.nome_cliente}</td>
              <td className='td-center' >{camp.carro_modelo}</td>
              <td className='td-placa td-center' >{camp.carro_placa}</td>
              <td className='td-center' >{camp.nome_mecanico}</td>
              <td className='td-center'>  {camp.data_criacao}</td>
              <td className='td-situacao td-center' >{camp.data_alteracao}</td>
              <td className='td-situacao td-center' >{camp.situacao_atual}</td>

              <td className='td-acoes td-center' >
                <Row>
                  <Col>
                    <Button onClick={() => UpdateOrdemDeServico(camp.id)} className='btn-dash' size='sm' variant='success'><AiFillEdit /></Button>
                  </Col>
                  <Col>
                    <Button onClick={() => imprimirOS(camp.id)} className='btn-dash' size='sm' variant='primary' ><GrPrint /></Button>
                  </Col>
                </Row>
                {/* <Col>
                    <Button onClick={getModalDelete} className='btn-dash' size='sm' variant='danger'><GrTrash /></Button>
                  </Col>
                <ModalExclusao show={showDelete} titulo={camp.nome_cliente} subtitulo='Desejar realmente excluir?' close={handleClose} deleteOs={() => deleteClient(camp.id)} /> */}

                {/* {console.log(camp.id)} */}
                {/* <ModalAtualizacao show={showUpdate} titulo='Deseja atualizar a situação atual?' close={handleClose} atualizarOs={() => mudarSituacao(camp.id)} /> */}
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </ >

  )
}
