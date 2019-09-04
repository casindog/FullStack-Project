import React from 'react';

class ProductModal extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.checkCartHasItem = this.checkCartHasItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.submitReview = this.submitReview.bind(this);
    }

    submitReview() {
        let data = {review: {
            user_id: 2,
            product_id: 3,
            review: "dummy"
        }};
        this.props.createReview(data);
    }

    handleClick() {
        this.props.history.push(`/index`);
    }

    checkCartHasItem () {
        let cartItems = Object.values(this.props.cartItems);
        let productId = Object.keys(this.props.product)[0]
        for (let i = 0; i < cartItems.length; i++) {
            // use coercion to compare string and integer
            if (cartItems[i].product_id == productId) {
                return true;
            };
        };
        return false
    }

    addItem() {        
        let data;

        if (this.checkCartHasItem()) {
            // send patch request to change quantity
            let cartItems = Object.values(this.props.cartItems);
            let ShoppingCartId; 

            for (let i=0; i<cartItems.length; i++) {
                if (cartItems[i].product_id == Object.keys(this.props.product)[0]) {
                    ShoppingCartId = cartItems[i].id;
                    break;
                }
            };

            data = {
                cart: {
                    id: ShoppingCartId,
                    user_id: this.props.session.id,
                    product_id: Object.keys(this.props.product)[0]
                }
            }

            this.props.patchQtyToCart(data);
            this.props.history.push(`/index`);
        } else {
            // send post request
            data = {
                cart: {
                    user_id: this.props.session.id,
                    product_id: Object.keys(this.props.product)[0],
                    quantity: 1
                }
            }

            this.props.postItemToCart(data);
            this.props.history.push(`/index`);
        };
    }

    render() {
        if (this.props.product.length === 0) {
            return null;
        } else {

            let product = Object.values(this.props.product)[0];
            let reviews = Object.values(this.props.reviews).map((review,idx) => {
                return (
                    <div key={idx} className="review">
                        
                        <img className="review-profile" src="https://contestimg.wish.com/api/image/fetch?profile_image_name=NTYwNWMxYmEyMWE4NjMxNzk0ZTk1NDUy_1398450030237.jpg&amp;w=50&amp;h=50" ></img>

                        <div className="review-info">
                            <div className="review-user">
                                {review.user_name}
                            </div>

                            <div className="review-time">
                                {review.created_at}
                            </div>
                            <div className="review-comment">
                                {review.comment}
                            </div>
                        </div>
                    </div>)
                })

            return (
                <div id='product-modal-background' onClick={this.handleClick}>

                    <div id='product-modal' onClick={(e) => e.stopPropagation()}>
                        <div>
                            <div>
                                <img src={product.photoUrls} id="image" />

                                <div id="review">
                                    <div id="review-title">
                                        Customer Reviews
                                    </div>
                                    {reviews}

                                    <form id="post-review">
                                        <input type="text" placeholder="Leave a review"/>
                                        <button onClick={this.submitReview}>Submit</button>
                                    </form>

                                </div>
                            </div>



                            <div id="product-info">
                                <div id="product-name">
                                    {product.name}
                                </div>

                                <div id="product-price">
                                    <div id="discount">
                                        {product.discount}
                                    </div>

                                    <div id="msrp">
                                        {product.original_price}
                                    </div>

                                </div>

                                <button onClick={this.addItem}>Buy</button>
                            </div>
                        </div>

                    </div>
                </div>
            )
        }

    }

}

export default ProductModal;
