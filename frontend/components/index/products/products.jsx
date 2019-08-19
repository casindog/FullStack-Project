import React from 'react';
import Flyers from './Flyers';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    indexProducts() {
        // limit to show 13 first, then on scroll down detect, show another 13l
        let products = this.props.products.map((product, idx) => (
            <div className="index_item_container" key={idx}>
                <div className='index_item_img'>
                    <img src={product.photoUrls} />
                    <Flyers product={product} />
                </div>

                <div className='index_item_info'>
                    <div className='index-item-top'>{product.original_price}</div>
                    <div className='index-item-bottom'>{product.transactions}+ bought this</div>
                    {/* <div>{product.verified}</div>
                    <div>{product.fast_shipping}</div>
                    <div>{product.almost_gone}</div> */}
                </div>
            </div>
        ));

        return products
    }


    render() {
        let products = this.indexProducts();
        return (
            <div id="index-products">                
                {products}
            </div>
        )
    }
}

export default Products;