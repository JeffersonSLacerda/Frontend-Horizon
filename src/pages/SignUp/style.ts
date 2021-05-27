import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import Tooltip from '../../components/Tooltip';

import singUpBackgroundImg from '../../assets/sign-up-background.jpg';

// interface ContainerSelectProps {
//   isErrored: boolean;
// }
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
`;

const appearFromRigth = keyframes`
  from{
    opacity: 0;
    transform: translateY(50%):
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

  animation: ${appearFromRigth} 1s;

  img {
    margin-top: -20px;
    margin-right: 30px;
  }

  form {
    margin-top: 80px;
    // width: 340px;
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
    margin: -20px 30px 10px 0px;

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

export const ContainerSelect = styled.div`
  border-radius: 10px 0 10px 0;
  border: 1px solid;
  padding: 16px;
  width: 100%;
  padding-left: 10px;
  background-color:white;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }

  > div {
    flex: 1;
    margin-right: 2px;
    margin-left: -7px;
    max-width: 65%;

    .react-select-city {
      [class^='react-select__indicators'] {
        padding-right: -15px;
        svg {
          margin-right: 0px;
        }
      }
    }

    .react-select-uf {
      [class^='react-select__indicators'] {
        padding-right: -15px;
        svg {
          margin-right: 0px;
        }
      }
    }

    & + div {
      margin-left: 0;
      max-width: 30%;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    visibility: hidden;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
export const Body = styled.div`
  margin-top: -10px;
  background-image: url("../../assets/dashboard1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`;