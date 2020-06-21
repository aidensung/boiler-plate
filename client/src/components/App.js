import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './views/HomePage/HomePage';
import AboutPage from './views/AboutPage/AboutPage';
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';

import Auth from '../hoc/auth';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Auth(HomePage, null)} />
      <Route exact path='/about' component={Auth(AboutPage, null)} />
      <Route exact path='/login' component={Auth(LoginPage, false)} />
      <Route exact path='/register' component={Auth(RegisterPage, false)} />
    </Switch>
  );
};

export default App;
