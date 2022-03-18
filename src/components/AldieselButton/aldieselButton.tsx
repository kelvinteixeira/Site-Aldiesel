import React, { ReactNode, ButtonHTMLAttributes } from 'react'
import styled from 'styled-components';

type AldieselButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string,
  icon?: ReactNode
}

export function AldieselButton(props: AldieselButtonProps) {
  return (
    <ButtonStyled {...props}>{props.title || props.icon}</ButtonStyled>
  )
}

export const ButtonStyled = styled.button`
  width: auto;
  height: 2.3rem;
  padding: .7rem;
  margin-right: 1rem;
  line-height: .2rem;

  border: .1rem solid #8e9cca;
  border-radius: .3rem;
  background-color: #ffffff;
  color: #8e9cca;

  transition: ease-in-out 0.5s;
  font-weight: bold;
  outline: none;

  :hover{
   background-color: #8e9cca ;
   border-color: #000000;
   color: #ffffff;
  }
`;