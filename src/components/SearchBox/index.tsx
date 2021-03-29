import React from 'react';

import BrImage from '../../assets/brasil-icon -ptbr.png';
import logoImg from '../../assets/logo.svg';
import {FaSearch} from 'react-icons/fa'
import "./style.scss"

const links = ['Entrar', 'Cadastre-se', 'Contato']

const SearchBox: React.FC = () => (
  <div id='search-box'>
    <input type='text' placeholder='Digite aqui...' />
    <FaSearch className='icon' size='18px' />
  </div>
);

export default SearchBox;
