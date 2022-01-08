import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styled from 'styled-components'
import './spinner.css'

export default function LoadSpinner() {
  return (
    <SpinnerStyled animation="border" variant='danger' />
  )
}

const SpinnerStyled = styled(Spinner)`
  margin: auto;
  margin-top: 2rem;

`;