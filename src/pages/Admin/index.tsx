import React from 'react';
import { FiPower, FiMail, FiUpload, FiImage, FiSearch } from 'react-icons/fi';
import { HiBan } from 'react-icons/hi';

import {
  Header,
  Top,
  Content,
  Messages,
  Citys,
  DashboardSettings,
  Users,
} from './style';

import logoImg from '../../assets/logo.svg';
import simbol from '../../assets/simbol.jpeg';

import imgDashboard from '../../assets/principal.jpg';

const Admin: React.FC = () => {
  return (
    <>
      <Top />
      <Header>
        <div className="content">
          <div className="visits">
            <div className="visits-title">
              <p className="strong"> Visitas hoje:</p>
              <p className="strong">Visitas este mês:</p>
              <p className="strong">Visitas total:</p>
            </div>
            <div className="visits-results">
              <p>00000</p>
              <p>00000</p>
              <p>00000</p>
            </div>
          </div>

          <div className="cadastro">
            <div className="cadastro-title">
              <p className="strong">Cadastros hoje:</p>
              <p className="strong">Cadastros total:</p>
            </div>
            <div className="cadastro-results">
              <p>00000</p>
              <p>00000</p>
            </div>
          </div>

          <div className="destinos">
            <div className="destinos-title">
              <p className="strong">Destinos hoje:</p>
              <p className="strong">Destinos total:</p>
            </div>
            <div className="destinos-results">
              <p>00000</p>
              <p>00000</p>
            </div>
          </div>

          <img src={logoImg} alt="Horizon" />
          <FiPower className="logout" size={20} />
        </div>

        <div className="bottom-header">
          <div className="blue-line" />
          <img src={simbol} className="simbol" alt="" />
        </div>
      </Header>

      <Content>
        <div className="left-side">
          <Citys>
            <p className="title"> Cidades mais procuradas</p>
            <div className="city">
              <p className="name">Fortaleza - CE</p>
              <p className="search-result"> 00000</p>
            </div>
          </Citys>

          <Messages>
            <p className="title-message"> Mensagens </p>
            <div className="content-message">
              <div className="data-message">
                <div className="dados">
                  <p className="description"> Descrição da mensagem </p>
                  <div className="data">
                    <p className="name"> Nome do usuário</p>
                    <p className="time"> 00:00 </p>
                    <p className="date"> 00/00/00 </p>
                  </div>
                </div>
                <div className="message-icon">
                  <FiMail size={50} className="icon-message" color="#009bde" />
                </div>
              </div>
            </div>
          </Messages>
        </div>

        <div className="right-side">
          <DashboardSettings>
            <p className="title"> Pagina Inicial </p>
            <div className="container">
              <form action="/">
                <input
                  type="text"
                  placeholder="Escolha seu passeio entre 'Raiz' e 'Nutella'"
                />
                <FiUpload size={20} />
                <label htmlFor="bannerPrincipal" className="banner">
                  <input type="file" id="bannerPrincipal" />
                  <img src={imgDashboard} alt="Imagem Principal" />
                  <FiImage size={20} className="uploadIcon" />
                </label>
              </form>
            </div>
          </DashboardSettings>
          <Users>
            <p className="title"> Usuários </p>
            <div className="content">
              <form action="/">
                <input type="text" id="searchUser" />
                <button type="submit">
                  <FiSearch size={20} />
                </button>
              </form>
              <div className="userComponent">
                <p className="name"> Nome do Usuário </p>
                <div className="userData">
                  <div className="localsUser">
                    <p className="locals"> Destinos: </p>
                    <p className="countLocals"> 000 </p>
                  </div>
                  <a href="/">
                    <HiBan size={20} color="#c53030" />
                  </a>
                  <a href="/">
                    <FiMail size={20} color="#009bde" />
                  </a>
                </div>
              </div>
            </div>
          </Users>
        </div>
      </Content>
      <Top />
    </>
  );
};

export default Admin;
