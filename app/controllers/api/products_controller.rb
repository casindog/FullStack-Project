class Api::ProductsController < ApplicationController
    def index 
        # will show up with byebug in the rails server terminal 
        @products = Product.where(:id => products_params[:startIdx].to_i..products_params[:endIdx].to_i)
        # puts @products.count   
    end

    # search/view

    def show

    end

    def products_params
        params.require(:products).permit(:startIdx, :endIdx)
    end
end
