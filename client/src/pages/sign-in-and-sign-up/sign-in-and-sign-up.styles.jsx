import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 60px;
  margin: 0 auto 40px;

  > *:first-child {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 650px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 100px;
  }
`;
