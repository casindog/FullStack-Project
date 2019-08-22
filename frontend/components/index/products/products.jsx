import React from 'react';
import Flyers from './Flyers';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(idx) {
        // e.preventDefault();
        this.props.history.push(`/index/${idx}`);
        this.props.getProduct(idx);
    }

    indexProducts() {
        // limit to show 13 first, then on scroll down detect, show another 13
        let products = Object.values(this.props.products).map((product, idx) => (
            <div className="index_item_container" key={idx+1} onClick={() => {this.handleClick(idx+1)}}>
                <div className='index_item_img'>
                    <img src={product.photoUrls} />
                    <Flyers product={product} />
                </div>

                <div className='index_item_info'>
                    <div className='index-item-top'>{product.original_price}</div>
                    <div className='index-item-bottom'>{product.transactions}+ bought this</div>
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