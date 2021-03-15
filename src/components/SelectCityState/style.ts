import styled from 'styled-components';

export const Container = styled.div`
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

  input {
    flex: 1;
    border: 0;
    background: transparent;
    padding-left: 10px;
  }
`;
