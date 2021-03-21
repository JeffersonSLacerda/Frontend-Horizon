import styled from 'styled-components';

export const Top = styled.div`
  border: solid 4px #000;
  margin: 20px;
  position: relative;
`;

export const Container = styled.div`
  height: 100vh;
  margin: 20px;

  display: flex;
  align-items: stretch;

  text-align: center;
  position: relative;

  .strong {
    font-weight: bold;
    text-align: right;
  }

  .visits {
    border: solid 1px;
    width: 150px;
    height: 150px;
  }
`;
