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
        
        let style;
        let id;
        let hover;

        if (this.props.css === "splash-background") {
            style = {
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
                padding: '10px',
                overflow: 'hidden'
            }
            id = "splash"

            // shouldn't allow hover magnify on splash background
            
        } else {
            style={
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
                padding: '10px',
            }
            id = "index"

            // has a 4 item per row limit
        }

        const products = this.props.products.map(product => (
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
        ))

        return (
            <div className={id} style={style}>
                {products}
            </div>
        )
    }
}

export default Products;