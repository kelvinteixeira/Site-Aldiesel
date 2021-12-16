import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './spinner.css'

export default function LoadSpinner(props) {
  return (
    <div className="spinner">
      <div>
        <Spinner animation="border" variant="primary" />
      </div>
      <div>
        <span>{props.texto}</span>
      </div>
    </div>
  )
}
