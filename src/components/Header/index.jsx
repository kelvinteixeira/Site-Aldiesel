import React, { useState } from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button, Modal, Spinner } from 'react-bootstrap'
import { AiOutlineUserAdd, AiFillCar, AiOutlineSearch } from "react-icons/ai";
import { STORAGE_KEY } from '../../utils/auth'
import { useHistory } from 'react-router-dom'
import Logo from '../../Assets/logo.png'
import styled from 'styled-components';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory()

  const goToDashboard = () => history.push('/dashboard')
  const goToCadastrarCliente = () => history.push('/cadastrarcliente')

  const singout = () => {
    setShowModal(true);
    localStorage.removeItem(STORAGE_KEY)
    setTimeout(() => {
      history.push('/')
    }, 1500)
  }

  return (
    <>
      <NavbarStyled className='no-print' bg="light" expand="lg" expanded >
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
              <Nav.Link onClick={goToCadastrarCliente} ><AiOutlineUserAddStyled /> Cadastrar Cliente</Nav.Link>
              <Nav.Link onClick={goToDashboard} ><AiFillCarStyled /> Pátio</Nav.Link>
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
      </NavbarStyled>

      <Modal centered size="sm" show={showModal}>
        <SpinnerStyled animation="border" variant='danger' />
        <Modal.Title><TitleModal>Salvando informações</TitleModal></Modal.Title>
        <Modal.Body><SubTitle>Até a próxima!</SubTitle></Modal.Body>
      </Modal>

    </>
  )
}

const NavbarStyled = styled(Navbar)`
  margin-bottom: 0 !important;
`;

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
const TitleModal = styled.h4`
  text-align: center;
  color: #000;
  font-weight: bold;
`;


const SubTitle = styled.h5`
  text-align: center;
  color: #8e9cca;
  font-weight: bold;
`;

const SpinnerStyled = styled(Spinner)`
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
