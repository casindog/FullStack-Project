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
            @cartItems = User.find_by_id(shoppingCart_params["user_id"]).shopping_carts
        end
    end

    def update
        @shopping_cart = ShoppingCart.find_by_id(shoppingCart_params["id"])


        if !shoppingCart_params["quantity"] 
            @shopping_cart.update_attribute(:quantity, @shopping_cart.quantity + 1)
        else
            @shopping_cart.update_attributes(shoppingCart_params)
        end

    end

    def destroy
        @shopping_cart = ShoppingCart.find_by_id(params[:id])
        @shopping_cart.destroy
        
    end

    def shoppingCart_params
        params.require(:cart).permit(:id, :user_id, :product_id, :quantity)
    end
end
