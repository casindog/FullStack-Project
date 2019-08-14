import React from 'react';
import { connect } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { Route, Redirect, Switch } from 'react-router-dom';
import IndexContainer from './index/indexContainer';
import SplashContainer from './splash/splashContainer';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Switch>
                    <AuthRoute exact path="/" component={SplashContainer}/>
                    {/* KC: looks like you need a component */}
                    <ProtectedRoute path="/index" component={IndexContainer}/>
                </Switch>
            </div>
        )
    }

} 
    
const msp = state => {
    return {
        session: state.session
    }
}
export default connect(msp,null)(App);