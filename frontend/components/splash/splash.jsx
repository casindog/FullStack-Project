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
        let products = Object.values(this.props.products);
        
        if (products.length > 0) {
            products = products.map((product, idx) => {
                return (
                    <div idx={idx}>
                        <img src={product.photoUrls} />
                    </div>
                );
            });

            for (let i=0; i<3; i++) {
                products = products.concat(products)
            };

            return (

                <div className='splash'>

                    <div id="title">
                        Want
                    </div>

                    <div id="userauth">
                        <UserAuthContainer /> 
                    </div>

                    <div id="products-background">
                        <ProductsContainer css="splash-background"/>
                    </div>
                </div>

            );
        } else {
            return null;
        }
    };
};

export default Splash; 