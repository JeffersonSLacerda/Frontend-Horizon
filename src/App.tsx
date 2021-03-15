import React from 'react';

// import Dashboard from './pages/dashboard';
// import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
// import Dashboard from './pages/dashboard';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignUp />
    {/* <SignIn /> */}
    <GlobalStyle />
  </>
);

export default App;
