import React from 'react';
import Flyers from './Flyers';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.openModal('showProduct')
    }

    indexProducts() {
        // limit to show 13 first, then on scroll down detect, show another 13l
        let products = Object.values(this.props.products).map((product, idx) => (
            <div className="index_item_container" key={idx} onClick={this.handleClick}>
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
        if (Object.keys(this.props.products).length === 150) products = products.slice(0, 13);

        return (
            <div id="index-products">
                {products}
            </div>
        )
    }
}

export default Products;