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
        // let product_row;
        if (this.props.products.length === 0) return null;
        // const product_row = this.props.products.splice(0,4);
        // if (product_row.length === 0) return null;
 
        // let x = [];

        // while (this.props.products.length > 0) {
        //     x.push(this.props.products.splice(0,4));
        // }
        // debugger
        
        const products = this.props.products.map(product => (
            <div className='index_item_container'>
                <img className='index_item_img' src={product.img_url} />
                <div className='index_item_info'>information</div>
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