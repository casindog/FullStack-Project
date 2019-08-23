import React from 'react';

class ProductModal extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    componentDidMount() {
        // this.props.getProduct();
    }

    handleClick() {
        this.props.history.push(`/index`);
    }

    addItem() {
        this.props.addItem();
    }

    render() {
        if (this.props.product.length === 0) return null;

        let product = Object.values(this.props.product);

        return (
            <div id='product-modal-background' onClick={this.handleClick}>

                <div id='product-modal' onClick={(e) => e.stopPropagation()}>
                    <div>
                        <img src={product[1]} id="image" />
                        <div id="product-info">
                            <div id="product-name">
                                {product[0].name}
                            </div>

                            <div id="product-price">
                                <div id="discount">
                                    {product[0].discount}
                                </div>

                                <div id="msrp">
                                    {product[0].original_price}
                                </div>

                                <div>

                                </div>
                            </div>

                            <button onClick={this.addItem}>Buy</button>
                        </div>
                    </div>

                    <div>
                        <div id="product-rating"> Rating </div>
                        <div id="product-review"> Leave a Review</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ProductModal;
