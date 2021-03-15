import styled from 'styled-components';
import { shade } from 'polished';

import singUpBackgroundImg from '../../assets/sign-up-background.jpg';

export const Container = styled.div`
  height: 100vh;
  align-items: center;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  width: 100%;
  max-width: 700px;

  img {
    padding-right: 70px;
    padding-top: 0px;
    margin-top: -20px;
  }

  form {
    margin: -10px 130px;
    width: 320px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    color: #009bde;
    text-decoration: none;
    margin: 15px 0 30px 200px;

    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#009bde')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${singUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
