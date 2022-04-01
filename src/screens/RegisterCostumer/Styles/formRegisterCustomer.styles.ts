import { Field } from "formik";
import { Button, Form } from "react-bootstrap";
import { AiOutlineCheckCircle, AiOutlineHome } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import { GoInfo } from "react-icons/go";
import styled from "styled-components";

export const AiOutlineCheckCircleStyled = styled(AiOutlineCheckCircle)`
  color: #008000;
  font-size: 1.9rem;
  margin-bottom: .5rem;
`;


export const FiAlertCircleToastStyled = styled(FiAlertCircle)`
  color: #f50b0b;
  font-size: 1.9rem;
  margin-bottom: .5rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  width: 35rem;
  height: auto;
  border: 0.15rem solid #8e9cca;
  border-radius: 0.6rem;
  background-color: white;
  box-shadow: 0.15rem 0.2rem 0.4rem 0.1rem #6776ac;
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

export const TitleModal = styled.h3`
  text-align: center;
  padding: 0 2.5rem 0 2.5rem;
  color: #000000;
  font-weight: bold;
`;

export const SubTitle = styled.h5`
  text-align: center;
  color: #8e9cca;
  font-weight: bold;
  display: inherit;
  line-height: 3rem;
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
export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const AiOutlineHomeStyled = styled(AiOutlineHome)`
  color: #8e9cca;
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

export const GoInfoStyled = styled(GoInfo)`
  color: #8e9cca;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const DivModalFooter = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
margin: auto;
`;

export const ButtonModalStyled = styled(Button)`
  color: #8e9cca;
  border-color: #8e9cca;
  width: 100%;
  margin-right: 1rem;
  transition: ease-in-out 0.5s;
  font-weight: bold;
  :hover{
   background-color: #8e9cca ;
   border-color: #000 ;

  }
`;
export const MsgError = styled.span`
  color: red;
  font-size: 0.6rem;
  font-weight: bold;
`;