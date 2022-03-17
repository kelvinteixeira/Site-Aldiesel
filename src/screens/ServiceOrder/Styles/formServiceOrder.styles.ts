import { Field } from "formik";
import { Button, Spinner } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

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
  }`

export const Title = styled.h4`
  text-align: center;
  padding-top: 2rem;
  color: #8e9cca;
  font-weight: bold;
  margin-bottom: 0;
`;

export const SubTitle = styled.h6`
  text-align: center;
  color: #000;
  font-weight: bold;
  display: inherit;
  line-height: 3rem;
  margin-bottom: 0;
`;


export const SpinnerStyled = styled(Spinner)`
  margin: auto;
  margin-top: 2rem;
`;

export const DivButtons = styled.div`
  display: inline;
  text-align: center;
`;
