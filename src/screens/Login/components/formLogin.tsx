import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { STORAGE_KEY } from '../../../utils/Authorization/auth';
import { token } from '../../../utils/Authorization/token';
import { SigninSchema } from '../../../utils/Yup/schema';
import * as Styled from '../Styles/formLogin.styles';
import { Form } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import Logo from '../../../Assets/logo.png';
import { AldieselButton } from '../../../components/AldieselButton/aldieselButton';
import { AldielselToast } from '../../../components/AldieselToast/toast';

type FormValues = {
  user: string,
  password: string
};

export function FormLogin() {

  const [showLoginError, setShowLoginError] = useState(false);
  const history = useHistory();

  const initialValues: FormValues = {
    user: '',
    password: ''
  };

  function singin(values: FormValues) {
    const users = [process.env.REACT_APP_USER, process.env.REACT_APP_USER2].includes(values.user)
    if (users && values.password === process.env.REACT_APP_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, token())
      history.push('/patio')
    } else {
      setShowLoginError(true);
    };
  };

  return (
    <Styled.Container>
      <Styled.ImgLogo src={Logo} alt="img da Aldiesil" />
      <Styled.Card>
        <Formik
          initialValues={initialValues}
          validationSchema={SigninSchema}
          onSubmit={singin}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Styled.CardContent>
                <Styled.Title>Entrar na sua conta</Styled.Title>

                <Styled.FormGroupStyled className="mb-2">
                  <Styled.IoMdLogInStyled />
                  <Form.Label>Usuário</Form.Label>
                  <Styled.FieldStyled name="user" />
                  <ErrorMessage name="user">
                    {(msg) => (
                      <Styled.MsgError>Usuário é obrigátorio</Styled.MsgError>
                    )}
                  </ErrorMessage>
                </Styled.FormGroupStyled>

                <Styled.FormGroupStyled className="mb-2">
                  <Styled.IoMdLockStyled />
                  <Form.Label>Senha</Form.Label>
                  <Styled.FieldStyled name="password" type="password" />
                  <ErrorMessage name="password">
                    {(msg) => (
                      <Styled.MsgError>senha é obrigátorio</Styled.MsgError>
                    )}
                  </ErrorMessage>
                </Styled.FormGroupStyled>

                <Styled.DivButtons>
                  <AldieselButton type="submit" title="Entrar"></AldieselButton>
                </Styled.DivButtons>
                <hr />
              </Styled.CardContent>
            </Form>
          )}
        </Formik>
      </Styled.Card>

      <AldielselToast
        show={showLoginError}
        onClose={() => setShowLoginError(false)}
        animation
        autohide
        delay={5000}
        icon={<Styled.FiAlertCircleToastStyled />}
        message="Usuário ou senha está incorreto!"
      />
    </Styled.Container>
  );
};

