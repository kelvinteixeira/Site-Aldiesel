import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { Field } from 'formik';
import { IoMdLogIn, IoMdLock } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh ;
`;

export const Card = styled.div`
  width: 25rem;
  height: 25rem;
  border: 0.15rem solid #8e9cca;
  border-radius: 0.6rem;
  background-color: white;
  box-shadow: 0.15rem 0.2rem 0.4rem 0.1rem #6776ac;
`;

export const CardContent = styled.div`
  padding: 3rem, 2rem;
  margin: 1rem 3rem 1rem 3rem;
`;

export const ImgLogo = styled.img`
  width: 22rem;
`;

export const Title = styled.h3`
  text-align: center;
  padding: 2rem 0 1rem 0;
  color: #8e9cca;
  font-weight: bold;
`;

export const TitleModal = styled.h3`
  text-align: center;
  color: #000;
  font-weight: bold;
`;

export const SubTitle = styled.h5`
  text-align: center;
  color: #8e9cca;
  font-weight: bold;
`;

export const FormGroupStyled = styled(Form.Group)`
  text-align: left;
`

export const FieldStyled = styled(Field)`
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 0.1rem solid #8e9cca;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.5s ease-in-out;
  outline: none;
  font-family: 'Poppins', sans-serif;
  
  :hover {
    border: 0.1rem solid #000;
  }
  `

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const IoMdLogInStyled = styled(IoMdLogIn)`
  color: #8e9cca;
`;

export const IoMdLockStyled = styled(IoMdLock)`
  color: #8e9cca;
`;

export const MsgError = styled.span`
  color: red;
  font-size: 0.7rem;
  font-weight: bold;
`;

export const FiAlertCircleStyled = styled(FiAlertCircle)`
  text-align: center;
  color: #f50b0b;
  font-size: 2rem;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`