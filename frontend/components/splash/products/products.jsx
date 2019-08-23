import React from 'react';
import Flyers from './Flyers';

class Products extends React.Component {
    constructor(props) {
        super(props);
    }

    splashProducts() {
        // shouldn't allow hover magnify on splash background

        let products = Object.values(this.props.products).map((product,idx) => (
            <div className="splash-item-container" key={idx}>
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
                    {/* <div>{product.verified}</div>
                    <div>{product.fast_shipping}</div>
                    <div>{product.almost_gone}</div> */}
                </div>
            </div>
        ));

        // shuffle products on splash page
        products = products.shuffle();

        return products
    }

    render() {
        if (this.props.products.length === 0) return null;

        let products = this.splashProducts();
        return (
            <div id="splash-products">
                {products}
            </div>
        )
    }
}

export default Products;


// kc: shuffle items on splash page
Array.prototype.shuffle = function () {
    var input = this;

    for (var i = input.length - 1; i >= 0; i--) {

        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}
