import styled from 'styled-components';

export const Top = styled.div`
  border: solid 4px #000;
  margin: 10px 20px;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
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

    .cadastro {
      display: flex;
      margin-left: 30px;
      align-content: center;

      .cadastro-results {
        margin-left: 13px;
      }
    }
    .destinos {
      display: flex;
      margin-left: 30px;
      align-content: center;

      .destinos-results {
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
    margin-top: -50px;

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
  margin: 10px 20px 10px;
  display: flex;
  flex-direction: row;

  .left-side {
    margin-left: 5%;
    width: 50%;
    align-content: center;
  }

  .right-side {
    margin-right: 3%;
    margin-left: 5%;
    width: 50%;
    align-content: center;
  }
`;

export const Citys = styled.div`
  border: solid 2px;
  text-align: center;
  width: 90%;
  /* max-width: 440px; */
  height: 250px;

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
  border: solid 2px;
  text-align: center;
  width: 90%;
  /* max-width: 440px; */
  height: 250px;
  margin-top: 5px;

  .title-message {
    font-weight: bold;
    margin: 5px;
  }
  .content-message {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    height: 60px;
    .data-message {
      border: solid 1px;
      border-radius: 5px;
      margin: 2px;
      width: 100%;
      text-align: left;
      padding: 5px;
      display: flex;
      justify-content: space-between;

      .data {
        display: flex;
        justify-content: space-between;
        padding: 2px;
        width: 100%;
        margin-top: 5px;

        .name {
          color: #009bde;
        }
        .time {
          color: #b7c2c2;
          margin: 2px 10px 2px;
        }
        .date {
          color: #b7c2c2;
        }
      }
      .message-icon {
        margin-top: -5px;
      }
    }
  }
`;

export const DashboardSettings = styled.div`
  border: solid 2px;
  width: 90%;
  text-align: center;
  /* max-width: 440px; */
  height: 250px;

  .title {
    font-weight: bold;
  }

  input {
    width: 80%;
    margin-top: 5px;
    border-radius: 10px 0 10px 0;
    padding: 3px;
  }

  svg {
    margin-left: 15px;
  }

  #bannerPrincipal {
    display: none;
  }

  .banner {
    display: flex;
    cursor: pointer;
    justify-content: space-around;
    margin-top: 5px;
    /* margin-left: 8%; */

    .uploadIcon {
      margin: 15% 17px 0 0;
    }

    img {
      width: 80%;
      height: 180px;
      margin-left: 20px;
      padding-right: -20px;
    }
  }
`;

export const Users = styled.div`
  border: solid 2px;
  width: 90%;
  text-align: center;
  /* max-width: 440px; */
  height: 250px;
  margin-top: 5px;

  .content {
    #searchUser {
      border-radius: 10px 0 10px 0;
      padding: 3px;
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
