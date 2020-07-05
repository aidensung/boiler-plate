import React, { useEffect, useState, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionToggleBtnContainer,
} from './header.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as Logo } from '../../assets/code_w-name_200x200.svg';

const Header = ({ currentUser, signOutStart }) => {
  const [hidden, setHidden] = useState({
    hidden: true,
  });

  const [height, setHeight] = useState({
    height: 0,
  });

  const headerRef = useRef(null);
  const optionContainerRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (window.scrollY > height) {
      headerRef.current.classList.add('scroll');
      removeDropdown();
    } else {
      headerRef.current.classList.remove('scroll');
    }
  }, [height]);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 768) {
      removeDropdown();
    }
  }, []);

  const toggleDropdown = () => {
    optionContainerRef.current.childNodes.forEach((child) =>
      child.classList.toggle('open')
    );
    setHidden(!hidden);
  };

  const removeDropdown = () => {
    optionContainerRef.current.childNodes.forEach((child) =>
      child.classList.remove('open')
    );
    setHidden(true);
  };

  useEffect(() => {
    setHeight(headerRef.current.clientHeight * 0.4);

    window.addEventListener('scroll', handleScroll);

    window.addEventListener('resize', handleResize);
  }, [handleScroll, handleResize]);

  return (
    <HeaderContainer ref={headerRef}>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer ref={optionContainerRef}>
        <OptionLink className='options' to='/' onClick={removeDropdown}>
          HOME
        </OptionLink>
        <OptionLink className='options' to='/project' onClick={removeDropdown}>
          PROJECT
        </OptionLink>
        {currentUser ? (
          <OptionLink
            className='options'
            to='/'
            onClick={(event) => {
              signOutStart();
              removeDropdown(event);
            }}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className='options' to='/signin' onClick={removeDropdown}>
            SIGN IN
          </OptionLink>
        )}
      </OptionsContainer>
      <OptionToggleBtnContainer onClick={toggleDropdown}>
        <FontAwesomeIcon id='toggleBtn' icon={faBars} />
      </OptionToggleBtnContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
