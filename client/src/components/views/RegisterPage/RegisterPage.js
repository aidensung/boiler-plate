import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_actions';
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [userCredentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert('Passwords do not match!');
    }

    dispatch(registerUser(userCredentials)).then((response) => {
      if (response.payload.registerSuccess) {
        props.history.push('/login');
      } else {
        alert('Failed to register');
      }
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <label>Name</label>
        <input
          name='name'
          type='text'
          value={name}
          onChange={handleChange}
          label='name'
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
    </div>
  );
}

export default withRouter(RegisterPage);
