class Api::ShoppingCartsController < ApplicationController
    def index
        @cartItems = User.find_by_id(shoppingCart_params["user_id"]).shopping_carts
    end

    def create  
        @shopping_cart = ShoppingCart.new(
            user_id: shoppingCart_params["user_id"],
            product_id: shoppingCart_params["product_id"],
            quantity: shoppingCart_params["quantity"]
        )

        if @shopping_cart.save
            @cartItems = User.find_by_id(1).shopping_carts
        end

    end

    def update

    end

    def shoppingCart_params
        params.require(:cart).permit(:user_id, :product_id, :quantity)
    end
end
