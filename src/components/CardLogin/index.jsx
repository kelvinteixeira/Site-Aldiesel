import React from 'react'
import './cardLogin.css'

export default function CardLogin(props) {
  return (
    <div className="card-container">
      <h4>{props.titulo}</h4>
      <div className="card-content">
        {props.children}
      </div>
    </div>
  )
}