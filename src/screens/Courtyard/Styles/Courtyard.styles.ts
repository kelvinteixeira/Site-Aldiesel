import { Accordion, Form, Table } from "react-bootstrap";
import { AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlinePrinter } from "react-icons/ai";
import { BiFile, BiTrash } from "react-icons/bi";
import { FiAlertCircle } from "react-icons/fi";
import styled from "styled-components";


export const TableStyled = styled(Table)`
  border-collapse: separate !important;
  font-weight:bold ;
  width: auto ;
  margin: 1rem ;
  width: 100%;
`

export const FiAlertCircleStyled = styled(FiAlertCircle)`
  text-align: center;
  color: #f50b0b;
  font-size: 2rem;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const AccordionStyled = styled(Accordion)`
  display: grid;
  column-gap: 1rem;
  border: 0.15rem solid #8e9cca;
  border-radius: 0.3rem;
  background-color: white;
  box-shadow: 0.15rem 0.2rem 0.4rem 0.1rem #6776ac;
  width: 80%;
  `;

export const FirstRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1rem;
  text-align: left;
  padding: 1rem 0 0 1rem;
  color: #000;
  font-weight: bold;
  `;

export const SelectDiv = styled.div`
  display: flex;
  margin-left: 12%;
  text-align: center;
  align-items: center;
  margin-top: 2rem;
`;

export const FormSelect = styled(Form.Select)`
  width: 13rem; 
  height: 2rem;
  border: 0.15rem solid #8e9cca;
`;

export const AccordionTitle = styled.h4`
  text-align: center;
  color: #000;
  font-weight: bold;
  display: inherit;
`;

export const Title = styled.h4`
  color: #000;
  font-weight: bold;
  margin: 2rem 2rem 2rem 9rem;
`;
export const FilterTitle = styled.h5`
  color: #000;
  font-weight: bold;
  margin-right: .7rem;
  display: inherit;
  margin-top: .5rem;
`;

export const SubTitle = styled.h5`
  text-align: left;
  color: #000;
  font-weight: bold;
  display: inherit;
  line-height: 1.9rem;
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

export const SubTitleModal = styled.h5`
  text-align: center;
  color: #8e9cca;
  font-weight: bold;
  margin-bottom: 1rem;
  padding: 0 1rem 1rem 1rem;
`

export const SubtitleData = styled.h6`
  color: #000000;
  font-weight: bold;
`;

export const DivNome = styled.div`
  display: grid;
  grid: auto-flow dense / 7rem 1fr 1fr;
  grid-column: span 10;
  `;

export const DivIcons = styled.div`
  display: grid;
  grid: auto-flow dense / 2.5rem 1fr;
  margin-right: 1rem;
  `;

export const AiOutlineInfoCircleStyled = styled(AiOutlineInfoCircle)`
  margin-left: 1rem;
  margin-top: 0.1rem;
  color: #696a6b;
  cursor: pointer; 
  font-size: 1.5rem;
`;

export const BiTrashStyled = styled(BiTrash)`
  margin-left: 1rem;
  margin-top: 0.1rem;
  color: #696a6b;
  cursor: pointer;
  font-size: 1.5rem;
  `
export const BiFileStyled = styled(BiFile)`
  margin-left: 1rem;
  margin-top: 0.1rem;
  color: #696a6b;
  cursor: pointer;
  font-size: 1.5rem;
  `
export const AiOutlinePrinterStyled = styled(AiOutlinePrinter)`
  margin-left: 1rem;
  margin-top: 0.1rem;
  color: #696a6b;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const DivButtons = styled.div`
  text-align: right;
  margin-bottom: 1rem;
`;

