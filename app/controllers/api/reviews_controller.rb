class Api::ReviewsController < ApplicationController
    def index
        #should have product id, then perform search based on productId 
    end

    def show
        @reviews = Review.find_by_product_id(params['id']);
        
    end

    def create  
    @review = Review.new(
        user_id: review_params["user_id"],
        product_id: review_params["product_id"],
        review: review_params["review"]
    )

    if @review.save
        # @cartItems = User.find_by_id(review_params["user_id"]).shopping_carts
    end

    end

    def review_params
    end

end
