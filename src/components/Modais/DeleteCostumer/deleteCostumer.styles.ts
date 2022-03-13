import { Button, Spinner } from "react-bootstrap";
import { FiAlertCircle } from "react-icons/fi";
import styled from "styled-components";

export const SpinnerStyled = styled(Spinner)`
  margin: auto;
  margin-top: 2rem;
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
export const TitleModal = styled.h3`
  text-align: center;
  padding: 2rem 0 1rem 0;
  color: #000000;
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

export const DivModalFooter = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
margin: auto;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const SubTitle = styled.h5`
  text-align: center;
  color: #000;
  font-weight: bold;
  display: inherit;
  line-height: 3rem;
  padding-bottom: 1rem;
`;

export const SubTitleModal = styled.h5`
  text-align: center;
  color: #8e9cca;
  font-weight: bold;
  padding: 0 2rem 0 2rem;
`;