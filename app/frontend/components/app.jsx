import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { Route, Redirect, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import ProductsContainer from './products/products_container';
import StartContainer from './start/start_container';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={StartContainer}/>
            <ProtectedRoute exact path="/index" component={ProductsContainer}/>
            <AuthRoute exact path="/login" component={LoginContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer} />

            {/* <Redirect to="/" /> */}
        </Switch>
    </div>
    );
    
export default App;