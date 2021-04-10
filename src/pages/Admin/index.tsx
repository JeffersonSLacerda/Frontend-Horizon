import React from 'react';
import { FiPower, FiMail, FiUpload, FiImage, FiSearch } from 'react-icons/fi';
import { HiBan } from 'react-icons/hi';
import { GrUserAdmin } from 'react-icons/gr';

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
      <Header>
        <div className="content">
          {/* <div className="visits">
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
          </div> */}

          <div className="cadastros">
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

          <div className="cidades">
            <div className="cidades-title">
              <p className="strong">Fortaleza - CE:</p>
              <p className="strong">Rio de Janeiro - RJ:</p>
              <p className="strong">São Paulo - SP:</p>
              <p className="strong">Salvador - BA:</p>
              <p className="strong">Natal - RN:</p>
            </div>
            <div className="cidades-results">
              <p>00000</p>
              <p>00000</p>
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

      <DashboardSettings>
        <div className="texto-home">
          <p className="title"> Texto página inicial </p>

          <form action="/">
            <input
              type="text"
              placeholder="Escolha seu passeio entre 'Raiz' e 'Nutella'"
            />

            <button type="submit" className="button">
              Salvar
            </button>
          </form>
        </div>

        <div className="container">
          <p className="title"> Banner principal </p>

          <form action="/">
            {/* <FiUpload size={20} /> */}
            <label htmlFor="bannerPrincipal" className="banner">
              <input type="file" id="bannerPrincipal" />
              <img src={imgDashboard} alt="Imagem Principal" />

              <FiImage size={20} className="uploadIcon" />
            </label>
          </form>
        </div>
      </DashboardSettings>

      <Content>
        <Messages>
          <p className="title-message"> Mensagens </p>

          <div className="content-message">
            <div className="data-message">
              <div className="dados">
                <p className="description"> Nome do visitante </p>

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

        <Messages>
          <p className="title-message"> Locais enviados para aceitação </p>

          <div className="content-message">
            <div className="data-message">
              <div className="dados">
                <p className="description"> Nome do destino </p>

                <div className="data">
                  <p className="name"> Cidade - Estado</p>
                  <p className="time"> 00:00 </p>
                  <p className="date"> 00/00/00 </p>
                </div>
              </div>

              <div className="message-icon">
                <FiMail size={50} className="icon-message" color="#009bde" />
              </div>
            </div>

            <div className="data-message">
              <div className="dados">
                <p className="description"> Nome do destino </p>

                <div className="data">
                  <p className="name"> Cidade - Estado</p>
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

        <Messages>
          <p className="title-message"> Usuários </p>

          <form action="/">
              <input type="text" id="searchUser" />
              <button type="submit">
                <FiSearch size={20} />
              </button>
            </form>

          <div className="content-message">
            <div className="data-message">
              <div className="dados">
                <p className="description"> Nome do usuário </p>

                <div className="data">
                  <p className="name"> Destinos: </p>
                  <p className="time"> 0000 </p>
                </div>
                <a href="/">
                  <HiBan size={20} color="#c53030" />
                </a>
                <a href="/">
                  <FiMail size={20} color="#009bde" />
                </a>
                <a href="/">
                  <GrUserAdmin size={20} />
                </a>
              </div>

              <div className="message-icon">
                <FiMail size={50} className="icon-message" color="#009bde" />
              </div>
            </div>
          </div>
        </Messages>
      </Content>
    </>
  );
};

export default Admin;
