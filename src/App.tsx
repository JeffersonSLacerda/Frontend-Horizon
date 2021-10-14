import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./pages/Landing/style.scss"
import "./components/LandingHeader/styles.scss"
import "./pages/NovoDestino/style.scss"
import GlobalStyle from './styles/global';
import 'react-slideshow-image/dist/styles.css'
import './assets/fonts/Milliard/font-face.css'
import Routes from './routes';

import AppProvider from './hooks';
import Admin from './pages/Admin';

const App: React.FC = () => (
  <Router>
    
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
