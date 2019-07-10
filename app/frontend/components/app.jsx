import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { Route, Redirect, Switch } from 'react-router-dom';
import Modal from './modal/modal';
import ProductsContainer from './products/products_container';
import StartContainer from './start/start_container';
import NavbarContainer from './navbar/navbar_container';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        
    }

    render () {
        
        return (
            <div>
                <Modal />
                <NavbarContainer />
                <Switch>
                    <AuthRoute exact path="/" component={ProductsContainer}/>
                    <ProtectedRoute exact path="/index" component={ProductsContainer}/>
                </Switch>
            </div>
        )
    }

} 
    
export default App;