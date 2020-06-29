import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registerUser } from '../../redux/user/user.actions';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer } from './sign-up.styles';

const SignUpPage = ({ signUpStart }) => {
  // const dispatch = useDispatch();

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
        password: '',
        confirmPassword: '',
      });

      return alert('Passwords do not match');
    }

    // dispatch(registerUser(userCredentials)).then((response) => {
    //   setCredentials({
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //   });

    //   if (!response.payload) return;

    //   if (response.payload.user) {
    //     props.history.push('/signin');
    //   }

    //   if (response.payload.err) {
    //     alert(response.payload.err);
    //   }
    // });

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

  return (
    <SignUpContainer>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <label>First Name</label>
        <input
          name='firstname'
          type='text'
          value={firstname}
          onChange={handleChange}
          label='firstname'
          required
        />
        <label>Last Name</label>
        <input
          name='lastname'
          type='text'
          value={lastname}
          onChange={handleChange}
          label='lastname'
          required
        />
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
        <label>Confirm Password</label>
        <input
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={handleChange}
          label='confirmPassword'
          required
        />
        <br />
        <button>Register</button>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUpPage);
