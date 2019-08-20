import React from 'react';
import IndexProductsContainer from './products/productsContainer';
import NavbarContainer  from './navbar/navbarContainer';
import FilterViewContainer from './filterView/filterViewContainer'

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // if (this.props.products.length === 0) return null;

        return (
            <div id="index">
                <div id="fixed-nav">
                    <NavbarContainer />
                    <FilterViewContainer />
                </div>
 
                <div style={{ 
                    backgroundColor: "rgb(248, 250, 251)", 
                    display: "flex", 
                    alignItems: "center", 
                    flexDirection: "column",
                    position: "relative",
                    top: "120px"
                    }}>
                        
                    <IndexProductsContainer purpose="index" />     
                    {this.props.filterView.loading ? <div id="infinite-load"> </div> : null}
                </div>

            </div>
        )
    }
}

export default Index;