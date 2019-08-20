class Api::ProductsController < ApplicationController
    def index 
        # will show up with byebug in the rails server terminal 
        if params.has_key?(:products)
            @products = Product.where(:id => 0..products_params[:endIdx].to_i)
        elsif params.has_key?(:search)
            # should limit to 13, and then increase
            if search_params[:tag] == "dog"
                @products = Product.where("lower(name) like ?", "%#{search_params[:tag]}%").limit(search_params[:endIdx])
            elsif search_params[:tag] == "bbq"
                # bbq or barbecue
                @products = Product.where("lower(name) like ? OR lower(name) like ?", '%bbq%', '%barbecue%').limit(search_params[:endIdx])
            end

        end
    end

    def show

    end

    def products_params
        params.require(:products).permit(:endIdx)
    end

    def search_params
        params.require(:search).permit(:tag, :endIdx)
    end
end
