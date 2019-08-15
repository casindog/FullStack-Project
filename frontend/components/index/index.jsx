import React from 'react';
import ProductsContainer from './products/productsContainer';
import NavbarContainer  from './navbar/navbarContainer';

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