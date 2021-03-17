import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerSelectProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerSelectProps>`
  div {
    border: 1;

    & + div {
      margin-left: 2px;
    }
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
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
