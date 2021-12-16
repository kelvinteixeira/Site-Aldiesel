import React, { useState, useEffect } from 'react'
import { Table, Container } from 'react-bootstrap'
import './dash.css'
import api from '../../api'

export default function TabelaDashboard() {
  const [os, setOs] = useState([])

  useEffect(() => {
    api.get('/ordemdeservicos/')
      .then((response) => setOs(response.data))
      .catch((err) => {
        console.error("Erro" + err)
      })
  }, [])

  return (
    < Container >
      <h3 className='dashboard-titulo'>Pátio</h3>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Veículo</th>
            <th>Placa</th>
            <th>Cliente</th>
            <th>Mecânico</th>
            <th>Situação</th>
          </tr>
        </thead>
        {os.map((e) => {
          return <tbody>
            <tr>
              <td>{e.id}</td>
              <td>{e.nome_cliente}</td>
              <td>{e.carro_modelo}</td>
              <td>{e.carro_placa}</td>
              <td>{e.nome_mecanico}</td>
              <td>x</td>
            </tr>
          </tbody>
        })}





      </Table>
    </Container >

  )
}
