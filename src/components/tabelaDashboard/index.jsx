import React, { useState, useEffect } from 'react'
import { Table, Button, Form, Col, Row } from 'react-bootstrap'
import './dash.css'
import { api } from '../../api'
import { GrUpdate, GrPrint, GrTrash } from "react-icons/gr";
import { getSelect } from '../../utils/listaSelect';
import { ModalExclusao } from '../ModalExclusao';
import { ModalAtualizacao } from '../ModalAtualizacao';

export default function TabelaDashboard() {
  const [os, setOs] = useState([])
  const [situacao, setSituacao] = useState('')
  const [showDelete, setShowDelete] = useState(false)
  const [showUpdate, setShowUpdate] = useState(false)

  function handleClose() {
    setShowDelete(false)
    setShowUpdate(false)
  }

  useEffect(() => {
    api.get('/ordemdeservicos/')
      .then((response) => setOs(response.data))
      .catch((err) => {
        console.error("Erro" + err)
      })
  }, [])

  function getModalDelete() {
    setShowDelete(true)
  }

  function getModalUpdate() {
    setShowUpdate(true)
  }

  async function mudarSituacao(id) {
    await api.put(`/ordemdeservicos/${id}`, { situacao_atual: situacao })
    setOs(os.map(camp => camp.id !== id))
    setShowUpdate(false)

  }

  async function deleteClient(id) {
    await api.delete(`/ordemdeservicos/${id}`)
    setOs(os.filter(camp => camp.id !== id))
    setShowDelete(false)
  }


  return (
    < >
      <h3 className='dashboard-titulo'>Pátio</h3>
      <Table size='sm' bordered hover responsive variant='light'>
        <thead>
          <tr>
            <th>nº OS</th>
            <th>Cliente</th>
            <th>Veículo</th>
            <th>Placa</th>
            <th>Mecânico</th>
            <th>Entrada</th>
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
              <td className='td-situacao td-center' >
                <Form.Select defaultValue={camp.situacao_atual} onChange={e => setSituacao(e.target.value)} className='form-select-dash' aria-label="situacaoDTC">
                  {(getSelect())}
                </Form.Select>
              </td>

              <td className='td-acoes td-center' >
                <Row>
                  <Col>
                    <Button onClick={getModalUpdate} className='btn-dash' size='sm' variant='success'><GrUpdate /></Button>
                  </Col>
                  <Col>
                    <Button className='btn-dash' size='sm' variant='primary' ><GrPrint /></Button>
                  </Col>
                  <Col>
                    <Button onClick={getModalDelete} className='btn-dash' size='sm' variant='danger'><GrTrash /></Button>
                  </Col>
                </Row>
                <ModalExclusao show={showDelete} titulo='Todos os dados desse cliente serão excluidos permanentemente da base de dados' subtitulo='Desejar realmente excluir?' close={handleClose} deleteOs={() => deleteClient(camp.id)} />

                <ModalAtualizacao show={showUpdate} titulo='Deseja atualizar a situação atual?' close={handleClose} atualizarOs={() => mudarSituacao(camp.id)} />
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </ >

  )
}
