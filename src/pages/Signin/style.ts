import styled from 'styled-components';
import { shade } from 'polished';

import singInBackgroundImg from '../../assets/sign-in-background.jpg';

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
  }

  form {
    margin: 80px 130px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #000;
      display: block;
      margin-top: 24px;
      text-decoration: none;
    }
  }

  > a {
    color: #009bde;
    text-decoration: none;
    margin: -50px 0 30px 230px;

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
  background: url(${singInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
