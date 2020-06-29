import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { HomePageContainer } from './homepage.styles';

const HomePage = ({ currentUser, signOutStart }) => {
  return (
    <HomePageContainer>
      <h2>Home Page</h2>
      <Link to='/signin' onClick={signOutStart}>
        SIGN OUT
      </Link>
    </HomePageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
