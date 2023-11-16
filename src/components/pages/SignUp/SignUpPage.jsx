import React from 'react';

import AuthForm from '../../auth/AuthForm.jsx';
import {
  RegistrationPageContainer,
  ImageContainer,
  AuthFormContainer,
} from './Auth.styled.js';

import { useNavigate } from 'react-router-dom';

const SignUpPage = ({ redirectTo }) => {
  const navigate = useNavigate();

  const handleFormSubmit = async body => {
    console.log('first', body);
    navigate(redirectTo);
  };

  return (
    <RegistrationPageContainer>
      <ImageContainer>
        <AuthFormContainer>
          <AuthForm onSubmit={handleFormSubmit} />
        </AuthFormContainer>
      </ImageContainer>
    </RegistrationPageContainer>
  );
};

export default SignUpPage;
