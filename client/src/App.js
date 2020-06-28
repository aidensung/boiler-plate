import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import Header from './components/header/header.component';

import { GlobalStyle } from './global.styles';

import Auth from './hoc/auth';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Auth(HomePage, null)} />
        <Route exact path='/about' component={Auth(AboutPage, null)} />
        <Route exact path='/signin' component={Auth(SignInPage, false)} />
        <Route exact path='/signup' component={Auth(SignUpPage, false)} />
      </Switch>
    </div>
  );
};

export default App;
