import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SingIn from '../pages/SignIn';
import Admin from '../pages/Admin';
// import Dashboard from '../pages/dashboard';
import Landing from '../pages/Landing'
import SingUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/signin" exact component={SingIn} />
    <Route path="/singup" component={SingUp} />
    <Route path="/" component={Landing} />

    <Route path="/dashboard" component={Admin} />
  </Switch>
);

export default Routes;
