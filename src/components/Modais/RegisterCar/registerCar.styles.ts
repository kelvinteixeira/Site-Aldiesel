import { Field } from "formik";
import { Button, Form, Spinner } from "react-bootstrap";
import { AiFillCar } from "react-icons/ai";
import styled from "styled-components";

export const SpinnerStyled = styled(Spinner)`
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const CardContent = styled.div`
  padding: 3rem, 2rem;
  margin: 1rem 3rem 1rem 3rem;
`;

export const Title = styled.h3`
  text-align: center;
  padding: 2rem 0 1rem 0;
  color: #8e9cca;
  font-weight: bold;
`;

export const SubTitle = styled.h5`
  text-align: center;
  color: #8e9cca;
  font-weight: bold;
  display: inherit;
  line-height: 3rem;
  padding-bottom: 1rem;
`;

export const FormGroupStyled = styled(Form.Group)`
  text-align: left;
`

export const FieldStyled = styled(Field)`
  width: 100%;
  height: 1.5rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.8rem;
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

export const ButtonStyled = styled(Button)`
  color: #8e9cca;
  border-color: #8e9cca;
  margin-top: 3rem;
  width: 100%;
  transition: ease-in-out 0.5s;
  font-weight: bold;
  :hover{
   background-color: #8e9cca ;
   border-color: #000 ;

  }
`;

export const AiFillCarStyled = styled(AiFillCar)`
  color: #8e9cca;
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

export const MsgError = styled.span`
  color: red;
  font-size: 0.6rem;
  font-weight: bold;
`;
