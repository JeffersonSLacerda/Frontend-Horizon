import styled from 'styled-components';

export const Search = styled.div`
  width: 200px;
  height: 80px;
  border: solid 1px #000;
  margin-top: 5px;
  display: flex;
  flex-direction: row;

  justify-content: center;
`;

export const Content = styled.header`
  height: 100vh;

  display: flex;
  align-items: stretch;

  width: 95%;
  margin-left: 2%;
  flex-direction: column;

  justify-content: center;

  #language {
    max-width: 25px;
    max-height: 25px;
    margin: 3px 3px;
    border-radius: 50%;
    display: flex;
    align-items: left;
  }

  svg {
  }
`;
