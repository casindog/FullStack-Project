import React from 'react';
import { AuthRoute } from '../utils/route_util';
import { Route, Redirect, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import Home from './home/home';

const App = () => (
    <div>
        {/* <Home /> */}
        <Switch>
            <Route exact path="/" component={Home}/>
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />
            <Redirect to="/" />
        </Switch>
    </div>

    );
    
export default App;