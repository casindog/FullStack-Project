import React from 'react';

class Cart extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        if (Object.keys(this.props.cartItems).length > 0) {
            let style = {
                position: "relative",
                top: "70px",
                backgroundColor: "red",
                right: "0",
                height: "100vh",
                width: "250px"
            }

            return (
                <div style={style} id="cart">
                    CARTMODAL   
                </div>
            )
        } else {
            return null;
        };
    };
};

export default Cart;