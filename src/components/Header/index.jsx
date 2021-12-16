import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { STORAGE_KEY } from '../../utils/auth'

import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Logo from '../../Assets/logo.png'
import LoadSpinner from '../../components/LoadSpinner'

export default function Header() {
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const goToDashboard = () => history.push('/dashboard')
  const goToOrdemDeServico = () => history.push('/ordemdeservico')

  const singout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setTimeout(() => {
      history.push('/')
    }, 2000)
    setLoading(true)
  }


  return (
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <img src={Logo} alt="img da Aldisel"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-1 my-lg-1"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link onClick={goToOrdemDeServico}>Nova ordem de serviço</Nav.Link>
                <Nav.Link onClick={goToDashboard}>Pátio</Nav.Link>

              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="me-2" variant="outline-primary">Search</Button>
                <Button onClick={singout} variant="dark">Sair</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {loading ? <LoadSpinner texto="Saindo, até mais!"></LoadSpinner> : null}
    </>
  )
}
