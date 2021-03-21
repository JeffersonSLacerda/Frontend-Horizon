import React from 'react';

import BrImage from '../../assets/brasil-icon -ptbr.png';
import logoImg from '../../assets/logo.svg';

import { Content, Search } from './style';

const Header: React.FC = () => (
  <Content>
    <div id="language">
      <img src={BrImage} alt="PT-Br" />
    </div>
    <p>Entrar |</p>
    <p>Cadastrar-se |</p>
    <p>Contato</p>
    <img src={logoImg} alt="Horizon" />
    <Search>
      <input placeholder="Busque um local" />
    </Search>
  </Content>
);

export default Header;
