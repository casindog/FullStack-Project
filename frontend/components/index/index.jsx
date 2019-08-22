import React from 'react';
import IndexProductsContainer from './products/productsContainer';
import NavbarContainer  from './navbar/navbarContainer';
import FilterViewContainer from './filterView/filterViewContainer'

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            <div id="index">
                <NavbarContainer />
 
                <FilterViewContainer />
                <IndexProductsContainer purpose="index" />     
                {this.props.filterView.loading ? <div id="infinite-load"> </div> : null}

            </div>
        )
    }
}

export default Index;