import React from 'react';

import BrImage from '../../assets/brasil-icon -ptbr.png';
import logoImg from '../../assets/logo.svg';

import { BlackLine, Content } from './style';

const Header: React.FC = () => (
  <Content>
    <BlackLine />
    <div id="language">
      <img src={BrImage} alt="PT-Br" />
    </div>
    <p>Entrar |</p>
    <p>Cadastrar-se |</p>
    <p>Contato</p>
    <img src={logoImg} alt="Horizon" />
  </Content>
);

export default Header;
