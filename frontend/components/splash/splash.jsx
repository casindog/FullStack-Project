import React from 'react';
import SplashBoxContainer from './splashBox/splashBoxContainer';
import SplashProductsContainer from './products/productsContainer';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestProducts(
            { products: {
                startIdx: 0,
                endIdx: 150
                }
            }
        );
    }
    
    
    render () {
        if (Object.keys(this.props.products).length===0) return null;

        return (
            <div className='splash'>

                <div id="title">
                    Want
                </div>

                <div id="splash-box1">
                    <SplashBoxContainer /> 
                </div>

                <div id="splash-background">
                    <SplashProductsContainer purpose="splash-products"/>
                </div>
            </div>
        );
    } 
};

export default Splash; 