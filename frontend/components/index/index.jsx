import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductsContainer from './productsContainer';
import NavbarContainer  from '../navbar/navbarContainer';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <NavbarContainer />
                <ProductsContainer /> 
            </div>
        )
    }
}

export default Index;