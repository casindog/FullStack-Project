import React from 'react';
import { NavLink } from 'react-router-dom';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                {/* add a component for a second nav bar */}
                <div className='temp'>
                    TEMP
                </div>
                {/* above is temporary */}

                <div className='index_row'>
                    <div className='index_item_container'>
                        <div className='index_item_img'>img</div>
                        <div className='index_item_info'>information</div>
                    </div>
                    <div className='index_item_container'>
                        <div className='index_item_img'>img</div>
                        <div className='index_item_info'>information</div>
                    </div>
                    <div className='index_item_container'>
                        <div className='index_item_img'>img</div>
                        <div className='index_item_info'>information</div>
                    </div>
                    <div className='index_item_container'>
                        <div className='index_item_img'>img</div>
                        <div className='index_item_info'>information</div>
                    </div>
                </div>

                {/* how can i have my browser auto load more index_row for infinite scroll? */}
            </div>
        )
    }
}

export default Products;