import styled from 'styled-components';
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

export const ContainerSelect = styled.div`
  border-radius: 10px 0 10px 0;
  border: 1px solid;
  padding: 16px;
  width: 100%;
  padding-left: 10px;

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
