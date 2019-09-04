import React from 'react';
import Flyers from './Flyers';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        // store recentlyviewed items into store
        this.props.viewedProducts(id);        
        this.props.history.push(`/index/${id}`);
        this.props.getProduct(id);
        this.props.fetchReviews(id);
    }

    indexProducts() {
        // limit to show 13 first, then on scroll down detect, show another 13

        let products = Object.values(this.props.products).map((product, idx) => (
            <div className="index_item_container" key={product.id} onClick={() => {this.handleClick(product.id)}}>
                <div className='index_item_img'>
                    <img src={product.photoUrls} />
                    <Flyers product={product} />
                </div>

                <div className='index_item_info'>
                    <div>
                        <div className='index-item-top'>{product.discount}</div>
                        <div className='index-item-top-strike'>{product.original_price}</div>
                    </div>
                    <div className='index-item-bottom'>{product.transactions}+ bought this</div>
                </div>
            </div>
        ));

        return products
    }


    render() {
        let products = this.indexProducts();
        if (Object.keys(this.props.products).length === 150) products = products.slice(0, 13);

        let style;

        if (Object.keys(this.props.cartItems).length === 0) {
            style = {
            }
        } else {
            style= {
                left: "-125px"
            }
        }
        
        return (
            <div style={style} id="index-products">
                {products}
            </div>
        )
    }
}

export default Products;