import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import singInBackgroundImg from '../../assets/sign-in-background.jpg';

export const Body = styled.div`
  margin-top: -10px;
  background-image: url("../../assets/dashboard1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`;

export const Container = styled.div`
  height: 100vh;
  align-items: center;
  display: flex;
  align-items: stretch;
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  background-image: url("../../assets/dashboard1.jpg");

`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateY(-50%):
  }
  to {
    opacity: 1;
    transform: translateY(0):
  }
`;

export const AnimetedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  img {
    padding-right: 70px;
  }

  form {
    margin: 80px;
    text-align: center;
    color: white;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: white;
      display: block;
      margin-top: 24px;
      text-decoration: none;
    }
  }

  > a {
    color: #009bde;
    text-decoration: none;
    margin: -60px 30px 10px 0px;

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
margin-top: -10px;
background-image: url("../../assets/dashboard1.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;
