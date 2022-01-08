import React, { useState } from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'
import { STORAGE_KEY } from '../../utils/auth'
import { GrDocumentText, GrCar, GrSearch } from "react-icons/gr";
import { AiOutlineUserAdd, AiFillCar, AiOutlineSearch } from "react-icons/ai";

import './header.css'

import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Logo from '../../Assets/logo.png'
import { ModalLogout } from '../ModalLogOut'


export default function Header() {
  const [show, setShow] = useState(false);
  const history = useHistory()

  const goToDashboard = () => history.push('/dashboard')
  const goToOrdemDeServico = () => history.push('/ordemdeservico')

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
            <ImgLogo className='no-print' src={Logo} alt="img da Aldisel" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-1 my-lg-1"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Nav.Link onClick={goToDashboard} ><AiOutlineUserAddStyled /> Cadastrar Cliente</Nav.Link>
              <Nav.Link onClick={goToDashboard} ><AiFillCarStyled /> Pátio</Nav.Link>
              {/* <Nav.Link onClick={goToOrdemDeServico} > <GrDocumentText /> Nova ordem de serviço</Nav.Link> */}


            </Nav>
            <Form className="d-flex">
              <FormControlStyled
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <ButtonStyled className="me-2" variant='outline' ><AiOutlineSearch /></ButtonStyled>
              <ButtonStyled onClick={singout} variant='outline' >Sair</ButtonStyled>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {show ? <ModalLogout show="show" titulo="Saindo!" subtitulo="Salvando as informações, aguarde." /> : null}
      {/* {loading ? <LoadSpinner texto="Saindo, até mais!"></LoadSpinner> : null} */}
    </>
  )
}

const ImgLogo = styled.img`
  width: 10rem;
`;

const AiOutlineUserAddStyled = styled(AiOutlineUserAdd)`
font-size: 1.5rem;
`;

const AiFillCarStyled = styled(AiFillCar)`
font-size: 1.5rem;
`;

const ButtonStyled = styled(Button)`
  color: #8e9cca;
  border-color: #8e9cca;
  transition: ease-in-out 0.5s;
  font-weight: bold;
  :hover{
   background-color: #8e9cca ;
   border-color: #000 ;
   color: #fff

  }
`;

const FormControlStyled = styled(FormControl)`
::-webkit-input-placeholder{
  color: #8e9cca; 
}
`