import React from 'react';

import BrImage from '../../assets/brasil-icon -ptbr.png';
import logoImg from '../../assets/Logo.png';
import SearchBox from '../SearchBox'
import "./style.scss"
import { useHistory } from 'react-router-dom'
const buttons = [
  {
      name: 'Entrar',
      view: 'signin',
      newPage: false,
  },
  {
      name: 'Cadastro',
      view: 'signup',
      newPage: false,
  },
  {
      name: 'Contato',
      view: 'contact',
      newPage: true,
  },
  
];
const Header: React.FC = () => {
  const history = useHistory()

  return (
    <nav id='header'>
      <div className='left-box'>
        <div className='links-left'>
          <img src={BrImage} />
          <ul>
            {
              buttons.map((button) => (<li>
                <a
                onClick={()=>history.push(`/${button.view}`)}
                >{button.name}</a>
              </li>))
            }
          </ul>
        </div>
        <SearchBox />
      </div>

      <img className='logo' src={logoImg} />

    </nav>
  )
};

export default Header;
