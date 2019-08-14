import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={props => (
        loggedIn ? <Redirect to='/index' /> : <Component {...props} /> 
    )} />
);

const Protected = ({ component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={props => (
        loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )} />
)

const msp = state => ({
    loggedIn: state.session.id
})

export const AuthRoute = withRouter(connect(msp, null)(Auth));

export const ProtectedRoute = withRouter(connect(msp,null)(Protected));