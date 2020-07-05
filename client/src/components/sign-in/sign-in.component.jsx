import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { emailSignInStart } from '../../redux/user/user.actions';
import { selectError } from '../../redux/user/user.selectors';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInContainer, SignInTitle } from './sign-in.styles';

const SignIn = ({ emailSignInStart, error }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(userCredentials);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  useEffect(() => {
    if (!error) return;

    if (error.response.status === 401) {
      alert('Incorrect email and/or password. Please try again.');
      window.location.reload();
    }
  });

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <CustomButton type='submit'> Sign in </CustomButton>
      </form>
    </SignInContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (userCredentials) =>
    dispatch(emailSignInStart(userCredentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
