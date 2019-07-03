import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

{/* <Route exact path="/login" component={LoginContainer} />    */}

export default () => (

    < Route exact path="/" render={() => (
        false ? (
            <Redirect to="/product_index" />
        ) : (
            <Route exact path="/login" component={LoginContainer} />
            )
        )}
    />

)
