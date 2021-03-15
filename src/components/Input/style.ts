import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px 0 10px 0;
  padding: 16px;
  width: 100%;
  padding-left: 10px;

  border: 1px solid;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #009bde;
      border-color: #009bde;
    `}

  ${(props) =>
    props.isField &&
    css`
      color: #009bde;
      border-color: #000;
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    padding-left: 10px;
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
