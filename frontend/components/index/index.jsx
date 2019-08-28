import React from 'react';
import IndexProductsContainer from './products/productsContainer';
import NavbarContainer  from './navbar/navbarContainer';
import FilterViewContainer from './filterView/filterViewContainer';
import CartContainer from './cart/cartContainer';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let style = {
            display: "flex", 
            backgroundColor: "rgb(248, 250, 251)",
            width: "100vw",
            height: "100vh",
            justifyContent: "center"
        }
        return (
            <div id="index">
                <NavbarContainer />
                <FilterViewContainer />

                <div style={style}>
                    <IndexProductsContainer purpose="index" />     
                    {this.props.filterView.loading ? <div id="infinite-load"> </div> : null}
                    <CartContainer />
                </div>

            </div>
        )
    }
}

export default Index;