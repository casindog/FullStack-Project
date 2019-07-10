import React from 'react';
import { NavLink } from 'react-router-dom';

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

        const products = this.props.products.map(product => (
            <div className='index_item_container'>
                <img className='index_item_img' src={product.img_url} />
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
                <div>
                    {/* add a component for a second nav bar */}
                    <div className='MultiView'>
                        <div>
                            Popular
                        </div>

                        <div>
                            Express
                        </div>

                        <div>
                            Recently Viewed
                        </div>

                        <div>
                            More
                        </div>
                    </div>

                    <div className='products-grid'>
                        {products}
                    </div>
                    {/* how can i have my browser auto load more index_row for infinite scroll? */}
                </div>
            )
    }
}

export default Products;