class Api::ReviewsController < ApplicationController
    def index
        #should have product id, then perform search based on productId 
    end

    def show
        @reviews = Product.find_by_id(params[:id]).reviews.order(created_at: :desc).limit(3)
    end

    def create  
        @review = Review.new(
            user_id: review_params["user_id"],
            product_id: review_params["product_id"],
            comment: review_params["review"]
        )
            
        if @review.save
            @reviews = Product.find_by_id(review_params[:product_id]).reviews.order(created_at: :desc).limit(3);
        end
    end

    def review_params
        params.require(:review).permit(:user_id, :product_id, :review)
    end

end
