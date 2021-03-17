import React from 'react';

// import Dashboard from './pages/dashboard';
import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';
// import Dashboard from './pages/dashboard';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      {/* <SignUp /> */}
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
