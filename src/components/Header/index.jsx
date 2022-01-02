import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { STORAGE_KEY } from '../../utils/auth'
import { GrDocumentText, GrCar, GrSearch } from "react-icons/gr";

import './header.css'

import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Logo from '../../Assets/logo.png'
import {ModalLogout} from '../ModalLogOut'

export default function Header() {
  const [show, setShow] = useState(false);

  const history = useHistory()

  const goToDashboard = () => history.push('/dashboard')
  const goToOrdemDeServico = () =>history.push('/ordemdeservico')

  const singout = () => {
    setShow(true);
    localStorage.removeItem(STORAGE_KEY)
    setTimeout(() => {
      history.push('/')
    }, 1000)
  }


  return (
    <>
      <Navbar className='no-print' bg="light" expand="lg" expanded >
        <Container fluid>

          <Navbar.Brand>
            <img className='no-print' src={Logo} alt="img da Aldisel"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-1 my-lg-1"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick={goToOrdemDeServico} > <GrDocumentText /> Nova ordem de serviço</Nav.Link>
              <Nav.Link onClick={goToDashboard} ><GrCar /> Pátio</Nav.Link>

            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Buscar OS"
                className="me-2"
                aria-label="Search"
              />
              <Button className="me-2" variant="outline-dark"><GrSearch/></Button>
              <Button onClick={singout} variant="danger">Sair</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {show ? <ModalLogout show="show" titulo="Saindo!" subtitulo="Salvando as informações, aguarde." /> : null}
      {/* {loading ? <LoadSpinner texto="Saindo, até mais!"></LoadSpinner> : null} */}
    </>
  )
}
