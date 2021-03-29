import React from 'react';

import BrImage from '../../assets/brasil-icon -ptbr.png';
import logoImg from '../../assets/Logo.png';
import SearchBox from '../SearchBox'
import "./style.scss"

const links = ['Entrar', 'Cadastre-se', 'Contato']

const Header: React.FC = () => (
  <nav id='header'>
    <div className='left-box'>
      <div className='links-left'>
        <img src={BrImage} />
        <ul>
          {
            links.map((link) => (<li>
              <a>{link}</a>
            </li>))
          }
        </ul>
      </div>
      <SearchBox />
    </div>

    <img className='logo' src={logoImg} />

  </nav>
);

export default Header;
