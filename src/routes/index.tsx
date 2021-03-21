import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SingIn from '../pages/SignIn';
// import Admin from '../pages/Admin';
import Dashboard from '../pages/dashboard';
import SingUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/singup" component={SingUp} />

    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
