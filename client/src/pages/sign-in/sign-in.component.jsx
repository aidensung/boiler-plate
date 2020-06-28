import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/user/user.actions';
import { withRouter } from 'react-router-dom';

import { SignInContainer } from './sign-in.styles';

const SignInPage = (props) => {
  const dispatch = useDispatch();

  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(loginUser(userCredentials)).then((response) => {
      setCredentials({
        email: '',
        password: '',
      });

      if (!response.payload) return;

      if (response.payload.user) {
        props.history.push('/');
      }

      if (response.payload.err) {
        alert(response.payload.err);
      }
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <label>Email</label>
        <input
          name='email'
          type='email'
          value={email}
          onChange={handleChange}
          label='email'
          required
        />
        <label>Password</label>
        <input
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          label='email'
          required
        />
        <br />
        <button>Login</button>
      </form>
    </SignInContainer>
  );
};

export default withRouter(SignInPage);
