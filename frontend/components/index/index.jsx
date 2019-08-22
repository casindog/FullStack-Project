import React from 'react';
import IndexProductsContainer from './products/productsContainer';
import NavbarContainer  from './navbar/navbarContainer';
import FilterViewContainer from './filterView/filterViewContainer'
import ProductModalContainer from './products/productModalContainer.js'

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // if (this.props.products.length === 0) return null;

        return (
            <div id="index">
                <ProductModalContainer />
                <NavbarContainer />
 
                <FilterViewContainer />
                <IndexProductsContainer purpose="index" />     
                {this.props.filterView.loading ? <div id="infinite-load"> </div> : null}

            </div>
        )
    }
}

export default Index;