import React, { ReactNode } from "react";
import { Toast, ToastContainer, ToastProps } from "react-bootstrap";

type AldielselToastProps = ToastProps &  {
  message?: string;
  icon?: ReactNode;
};

export function AldielselToast(props: AldielselToastProps) {
  return (
    <ToastContainer position="bottom-center" className="mb-4">
      <Toast
        show={props.show}
        autohide={props.autohide}
        delay={props.delay}
        animation={props.animation}
        onClose={props.onClose}
      >
        <Toast.Header closeButton>
          <strong className="me-auto">Aldiesel</strong>
          <small>Alerta</small>
        </Toast.Header>
        <Toast.Body>
          {props.icon} {props.message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
