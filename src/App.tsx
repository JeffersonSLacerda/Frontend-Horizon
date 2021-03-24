import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./pages/Landing/style.scss"
import "./components/LandingHeader/styles.scss"
import GlobalStyle from './styles/global';
import 'react-slideshow-image/dist/styles.css'

import Routes from './routes';

import AppProvider from './hooks';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
