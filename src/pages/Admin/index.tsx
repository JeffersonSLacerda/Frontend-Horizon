import React from 'react';

import { Container, Top } from './style';

const Admin: React.FC = () => {
  return (
    <>
      <Top />
      <Container>
        <div className="visits">
          <p className="strong"> Visitas hoje:</p>
          <p className="strong">Visitas este mês:</p>
          <p className="strong">Visitas total:</p>
          <p className="results">00000</p>
          <p className="results">00000</p>
          <p className="results">00000</p>
        </div>
      </Container>
      <Top />
    </>
  );
};

export default Admin;
