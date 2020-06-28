import React from 'react';

import { HeaderContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = () => (
  <HeaderContainer>
    <OptionsContainer>
      <OptionLink to='/'>HOME</OptionLink>
      <OptionLink to='/about'>ABOUT</OptionLink>
      <OptionLink to='/signin'>SIGN IN</OptionLink>
      <OptionLink to='/signup'>SIGN UP</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
