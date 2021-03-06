import { Field } from "formik";
import { Form, Spinner } from "react-bootstrap";
import { BsGear, BsPin } from "react-icons/bs";
import { FiTool } from "react-icons/fi";
import styled from "styled-components";

export const SpinnerStyled = styled(Spinner)`
  margin: auto;
  margin-top: 2rem;
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
  padding-top: 1rem;
  color: #8e9cca;
  font-weight: bold;
`;

export const SubTitle = styled.h6`
  text-align: center;
  color: #000;
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

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const FiToolStyled = styled(FiTool)`
  color: #8e9cca;
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

export const BsGearStyled = styled(BsGear)`
  color: #8e9cca;
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;
export const BsPinStyled = styled(BsPin)`
  color: #8e9cca;
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

export const MsgError = styled.span`
  color: red;
  font-size: 0.6rem;
  font-weight: bold;
`;
