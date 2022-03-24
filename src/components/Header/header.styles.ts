import { Form, FormControl, Navbar, Spinner } from "react-bootstrap";
import { AiFillCar, AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import styled from "styled-components";

export const NavbarStyled = styled(Navbar)`
  margin-bottom: 0 !important;
`;

export const ImgLogo = styled.img`
  width: 10rem;
`;

export const AiOutlineUserAddStyled = styled(AiOutlineUserAdd)`
font-size: 1.5rem;
`;

export const AiOutlineUserStyled = styled(AiOutlineUser)`
font-size: 1.5rem;
`;

export const AiFillCarStyled = styled(AiFillCar)`
font-size: 1.5rem;
`;

export const FormControlStyled = styled(FormControl)`
::-webkit-input-placeholder{
  color: #8e9cca; 
}
`
export const TitleModal = styled.h4`
  text-align: center;
  color: #000;
  font-weight: bold;
`;


export const SubTitle = styled.h5`
  text-align: center;
  color: #8e9cca;
  font-weight: bold;
`;

export const SpinnerStyled = styled(Spinner)`
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const FormStyled = styled(Form)`
  display: flex;
  width: 25rem;
`
