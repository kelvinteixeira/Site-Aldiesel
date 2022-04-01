import { Spinner } from "react-bootstrap";
import { FiAlertCircle } from "react-icons/fi";
import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const SpinnerStyled = styled(Spinner)`
  margin: auto;
  margin-top: 2rem;
`;

export const TitleModal = styled.h3`
  text-align: center;
  padding: 2rem 0 1rem 0;
  color: #000000;
  font-weight: bold;
`;

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

export const FiAlertCircleStyled = styled(FiAlertCircle)`
  text-align: center;
  color: #f50b0b;
  font-size: 1.9rem;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: .5rem;
`;

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