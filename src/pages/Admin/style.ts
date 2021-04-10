import styled from 'styled-components';

export const Top = styled.div`
  border: solid 4px #000;
  margin: 10px 20px;
  position: relative;
`;

export const Header = styled.div`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;

  .logout {
    margin-top: 2rem !important;
    margin-left: -4rem !important;

    &:hover {
      cursor: pointer;
    }
  }

  .content {
    margin: 5px 20px;
    height: 13opx;
    display: flex;
    justify-content: space-between;
    align-items: top;

    text-align: center;
    position: relative;

    .strong {
      font-weight: bold;
      text-align: right;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 10px;
    }

    .visits {
      width: 170px;
      height: 80px;
      align-content: space-around;
      flex-direction: row;
      display: flex;
      margin-left: 10px;

      .visits-title {
        margin-right: 3px;
        margin-bottom: 5px;
      }

      .visits-results {
        height: 30px;
        margin-left: 10px;
      }
    }

    .cadastros {
      display: flex;
      margin-left: 30px;
      align-content: center;
      border-left: 2px solid var(--blue);
      border-top: 2px solid var(--blue);
      padding: 0.25rem 1rem 1rem 0.25rem;
      max-height: 4rem;

      .cadastro-results {
        margin-left: 13px;
      }
    }

    .destinos {
      display: flex;
      margin-left: 30px;
      align-content: center;
      border-left: 2px solid var(--blue);
      border-top: 2px solid var(--blue);
      padding: 0.25rem 1rem 1rem 0.25rem;
      max-height: 4rem;

      .destinos-results {
        margin-left: 13px;
      }
    }

    .cidades {
      display: flex;
      margin-left: 30px;
      align-content: center;
      border-left: 2px solid var(--blue);
      border-top: 2px solid var(--blue);
      padding: 0.25rem 1rem 1rem 0.25rem;
      /* max-height: 5rem; */

      .cidades-results {
        margin-left: 13px;
      }
    }

    img {
      width: 330px;
      height: 180px;
      margin-top: -65px;
      margin-right: -145px;
    }

    .logout {
      margin-top: -10px;
      margin-right: 10px;
    }
  }

  .bottom-header {
    align-content: center;
    position: relative;
    /* margin-top: -50px; */

    .blue-line {
      margin: 20px 20px -15px;
      border: solid 3px #009bde;
    }

    .simbol {
      width: 30px;
      height: 30px;
      margin-left: 47%;
    }
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  .left-side {
    margin-left: 5%;
    width: 100%;
    align-content: center;
  }

  .right-side {
    margin-right: 3%;
    margin-left: 5%;
    width: 100%;
    align-content: center;
  }
`;

export const Citys = styled.div`
  border-right: solid 2px var(--blue);
  padding-right: 1rem;

  text-align: center;
  width: 90%;
  /* max-width: 440px; */
  height: 250px;

  button {
    margin-left: 5px;
    background: transparent;
    border: none;
  }

  .content-message {
    justify-content: space-between;
    height: 60px;

    .data-message {
      &:hover {
        cursor: pointer;
      }

      border: solid 1px var(--blue);
      border-right: solid 1.1rem var(--blue);
      border-radius: 0.5rem;
      margin: 2px;
      width: 100%;
      text-align: left;
      padding: 1rem;
      display: flex;
      justify-content: space-between;

      .data {
        padding: 0.5rem;
        display: flex;
        justify-content: space-between;
        width: 100%;

        .name {
          color: #009bde;
        }

        .time {
          color: #b7c2c2;
          margin: 0 10px;
        }

        .date {
          color: #b7c2c2;
        }
      }
      .message-icon {
        padding: 0.5rem;
        font-size: 5px;
      }
    }
  }

  .title {
    font-weight: bold;
    margin: 5px;
  }
  .city {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    text-align: center;
    .name {
      font-weight: bold;
      margin-left: 5px;
      float: left;
    }

    .search-result {
      margin-right: 10px;
      float: right;
    }
  }
`;

export const Messages = styled.div`
  /* border-right: solid 2px var(--blue); */
  padding-right: 1rem;
  text-align: center;
  height: 600px;
  margin-bottom: 3rem;

  overflow-y: scroll;
  overflow-x: hidden;

  svg {
    margin: 0 5px;
  }

  button {
    margin-left: 5px;
    background: transparent;
    border: none;
  }

  form {
    margin-bottom: 1rem;
  }

  #searchUser {
    border-radius: 10px 0 10px 0;
    padding: 3px;
  }

  .title-message {
    font-weight: bold;
    margin: 5px;
  }
  .content-message {
    justify-content: space-between;
    height: 60px;

    .data-message {
      &:hover {
        cursor: pointer;
      }

      border: solid 1px var(--blue);
      border-right: solid 1.1rem var(--blue);
      border-radius: 0.5rem;
      margin: 2px;
      width: 100%;
      text-align: left;
      padding: 1rem;
      display: flex;
      justify-content: space-between;

      .data {
        padding: 0.5rem;
        display: flex;
        justify-content: space-between;
        width: 100%;

        .name {
          color: #009bde;
        }

        .time {
          color: #b7c2c2;
          margin: 0 10px;
        }

        .date {
          color: #b7c2c2;
        }
      }
      .message-icon {
        padding: 0.5rem;
        font-size: 5px;
      }
    }
  }
`;

export const DashboardSettings = styled.div`
  display: flex;
  margin: 1rem auto;
  padding: 2rem;
  border: solid 2px var(--blue);
  width: 90%;
  text-align: center;
  /* max-width: 440px; */

  .button {
    padding: 0.5rem 5rem;
    margin: 0.5rem auto;
    border: 0;
    border-radius: 15px;
    background: var(--blue);
    color: #fff;
  }

  .texto-home {
    width: 65%;
    margin: auto;

    .title {
      font-weight: bold;
    }

    input {
      width: 80%;
      margin-top: 5px;
      border-radius: 15px;
      padding: 3px;
    }

    svg {
      margin-left: 15px;
    }
  }

  .container {
    width: 35%;
    margin: auto;
    padding-left: 2rem;
    border-left: 2px solid var(--blue);

    .title {
      font-weight: bold;
    }

    #bannerPrincipal {
      display: none;
    }

    .banner {
      display: flex;
      cursor: pointer;
      justify-content: space-around;
      margin-top: 1rem;
      /* margin-left: 8%; */

      .uploadIcon {
        margin: auto;
      }

      img {
        width: 80%;
        height: 180px;
        margin: 0 auto;
      }
    }
  }
`;

export const Users = styled.div`
  text-align: center;
  height: 250px;

  .content {
    #searchUser {
      border-radius: 10px 0 10px 0;
      padding: 3px;
    }

    input {
      width: 80%;
    }

    button {
      margin-left: 5px;
      background: transparent;
      border: none;
    }

    .userComponent {
      display: flex;
      flex-direction: column;
      border: 2px solid;
      border-radius: 5px;
      margin: 3px;

      .name {
        text-align: left;
      }

      .userData {
        display: flex;
        /* justify-content: space-between; */

        svg {
          margin: 0 5px;
        }

        a {
          text-decoration: none;
        }
        .localsUser {
          display: flex;
          justify-content: right;

          .countLocals {
            margin-left: 3px;
          }
        }
      }
    }
  }
`;
