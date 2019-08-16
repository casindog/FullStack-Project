import React from 'react';
import UserAuthContainer from './userAuth/userAuthContainer';
import ProductsContainer from '../index/products/productsContainer';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestProducts();
    }
    
    
    render () {
        return (
            <div className='splash'>

                <div id="title">
                    Want
                </div>

                <div id="userauth">
                    <UserAuthContainer /> 
                </div>

                <div id="splash-background">
                    <ProductsContainer css="splash-products"/>
                </div>
            </div>
        );
    } 
};

export default Splash; 