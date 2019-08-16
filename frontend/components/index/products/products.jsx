import React from 'react';
import Flyers from './Flyers';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {loading: true};
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    componentDidMount () {
        this.props.requestProducts();
    }

    render() {
        if (this.props.products.length === 0) return null;
        
        let id;
        let style;

        let products = this.props.products.map(product => (
            <div className='index_item_container'>
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

        if (this.props.css === "splash-products") {
            // shouldn't allow hover magnify on splash background
            id = "splash-products";
            // products.shuffle();
        } else {
            id = "index-products";
            // has a 4 item per row limit
        };

        // just duplicate seed data like 3 times
        for (let i = 0; i < 3; i++) {
            products = products.concat(products);
        };

        // kc: shuffle items on splash page
        return (
            <div id={id}>
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
