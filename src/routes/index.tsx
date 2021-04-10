import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SingIn from '../pages/SignIn';
import Admin from '../pages/Admin';
// import Dashboard from '../pages/dashboard';
import Landing from '../pages/Landing'
import SingUp from '../pages/SignUp';
import NovoDestino from '../pages/NovoDestino'
import Header from '../components/Header'
import Place from '../pages/Place'
import {AnimatedSwitch} from 'react-router-transition'
import SignUp from '../pages/SignUp'
import Step2 from '../pages/Place/stepComponents/Step2'
const Routes: React.FC = () => (
   <Switch>
    <Route path="/viagem_aleatoria" exact component={Place} />
    <Route path="/signin" exact component={SingIn} />
    <Route path="/signup" component={SignUp} />
    <Route exact path="/" component={Landing} />
    <Route exact path='/novo_destino' component={NovoDestino} />
    <Route path="/dashboard" component={Admin} />
    <Route path="/step" component={Step2} />

    </Switch>

);

export default Routes;
