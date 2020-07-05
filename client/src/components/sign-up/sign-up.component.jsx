import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { signUpStart } from '../../redux/user/user.actions';
import { selectError } from '../../redux/user/user.selectors';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart, error }) => {
  const [userCredentials, setCredentials] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const {
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
  } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setCredentials({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      return alert('Passwords do not match');
    }

    signUpStart(userCredentials);

    setCredentials({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  useEffect(() => {
    if (!error) return;

    if (error.response.status === 409) {
      alert('The email address is already in use by another account');
      window.location.reload();
    }
  });

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='firstname'
          type='text'
          value={firstname}
          onChange={handleChange}
          label='First Name'
          required
        />
        <FormInput
          name='lastname'
          type='text'
          value={lastname}
          onChange={handleChange}
          label='Last Name'
          required
        />
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
        <FormInput
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'> SIGN UP </CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
