import React, { useState } from "react";

import { Navbar, Container, Nav, Modal } from "react-bootstrap";
import { STORAGE_KEY } from "../../utils/Authorization/auth";
import { useHistory } from "react-router-dom";
import * as Styled from "./header.styles";
import Logo from "../../Assets/logo.png";
import { AldieselButton } from "../AldieselButton/aldieselButton";

export function Header() {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const singout = () => {
    setShowModal(true);
    localStorage.removeItem(STORAGE_KEY);
    setTimeout(() => {
      history.push("/");
    }, 1500);
  };

  return (
    <>
      <Styled.NavbarStyled className="no-print" bg="light" expand="lg" expanded>
        <Container fluid>
          <Navbar.Brand>
            <Styled.ImgLogo
              className="no-print"
              src={Logo}
              alt="img da Aldisel"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-1 my-lg-1"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link onClick={() => history.push("/cadastrarcliente")}>
                <Styled.AiOutlineUserAddStyled /> Cadastrar Cliente
              </Nav.Link>
              <Nav.Link onClick={() => history.push("/patio")}>
                <Styled.AiFillCarStyled /> Pátio
              </Nav.Link>
            </Nav>
            <Styled.FormStyled>
              <AldieselButton onClick={singout} title="Sair"></AldieselButton>
            </Styled.FormStyled>
          </Navbar.Collapse>
        </Container>
      </Styled.NavbarStyled>

      <Modal centered size="sm" show={showModal}>
        <Styled.SpinnerStyled animation="border" variant="danger" />
        <Modal.Title>
          <Styled.TitleModal>Salvando informações</Styled.TitleModal>
        </Modal.Title>
        <Modal.Body>
          <Styled.SubTitle>Até a próxima!</Styled.SubTitle>
        </Modal.Body>
      </Modal>
    </>
  );
}
