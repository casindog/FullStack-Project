import React from 'react';

class Cart extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {

        for (var key in this.props.cartItems) {
            this.props.getProduct(key)
        }
    }

    render() {
        if (Object.keys(this.props.cartItems).length > 0) {
            let cartItems = Object.values(this.props.cartItems).map((cartItem) => {
                return (
                    <div key={cartItem.id} className="item" >
                        <div className="cart-item">
                            <img src={cartItem.photoUrls} alt=""/>
                            <div className="item-info">
                                <div>
                                    id: {cartItem.id}
                                </div>
                                <div>
                                    original price: {cartItem.original_price}
                                </div>
                                <div>
                                    discount price: {cartItem.discount}
                                </div>
                            </div>
                        </div>

                        <div className="quantity-item">
                            <div>
                                Quantity:
                            </div>
                            <div className="change-quantity">
                                {cartItem.quantity}
                                <img src="arrow-down-icon.png" alt=""/>
                            </div>
                            <div onClick={() => { this.props.destroyItem({cart: {id: cartItem.id, user_id: cartItem.user_id}})}} className="remove-item"> 
                                Remove
                            </div>
                        </div>
                    </div>
                )
            });

            let itemTotal;

            return (
                <div id="cart">
                    <div id="cart-items">
                        {cartItems}
                    </div>

                    <div id="order-summary">
                        <div className="order-desc">
                            Item Total
                            <div>
                                ${itemTotal}
                            </div>
                        </div>
                        <div className="order-desc">
                            Shipping
                            <div>
                                $0
                            </div>
                        </div>
                        <div className="order-desc">
                            Order Total
                            <div>
                                ${itemTotal}
                            </div>
                        </div>

                        <div id="checkout">
                            Place Order
                        </div>

                    </div>
                </div>
            )
        } else {
            return null;
        };
    };
};

export default Cart;