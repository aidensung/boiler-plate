import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import Header from './components/header/header.component';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserAuth } from './redux/user/user.actions';

const App = ({ checkUserAuth, currentUser }) => {
  useEffect(() => {
    checkUserAuth();
  }, [checkUserAuth]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route
          exact
          path='/about'
          render={() =>
            !currentUser ? (
              <Redirect to='/' />
            ) : currentUser.role === 0 ? (
              <Redirect to='/' />
            ) : (
              <AboutPage />
            )
          }
        />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <SignInPage />)}
        />
        <Route
          exact
          path='/signup'
          render={() => (currentUser ? <Redirect to='/' /> : <SignUpPage />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserAuth: () => dispatch(checkUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
