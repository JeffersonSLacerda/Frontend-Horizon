import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  border-radius: 30px;
  height: 56px;
  background: #009bde;
  color: #fff;
  border: 0;
  padding: 0 16px;
  width: 100%;
  margin-top: 16px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#009bde')};
  }
`;
