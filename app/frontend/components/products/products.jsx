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
            </div>
        )
    }
}

export default Products;