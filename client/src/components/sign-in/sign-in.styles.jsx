import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;
