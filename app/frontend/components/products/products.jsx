import React from 'react';
import { NavLink } from 'react-router-dom';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout()
    }

    render() {

        return (
            <div>
                Products
                <button onClick={this.handleSubmit}>Sign Out</button>
            </div>
        )
    }
}

export default Products;