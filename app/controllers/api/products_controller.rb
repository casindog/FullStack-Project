class Api::ProductsController < ApplicationController
    def index 
        # will show up with byebug in the rails server terminal 
        if params.has_key?(:products)
            @products = Product.where(:id => products_params[:startIdx].to_i..products_params[:endIdx].to_i)
        elsif params.has_key?(:search)
            if search_params[:tag] == "dog"
                @products = Product.where("lower(name) like ?", "%#{search_params[:tag]}%")
            elsif search_params[:tag] == "bbq"
                # bbq or barbecue
                @products = Product.where("lower(name) like ? OR lower(name) like ?", '%bbq%', '%barbecue%')
            end

        end
    end

    def show

    end

    def products_params
        params.require(:products).permit(:startIdx, :endIdx)
    end

    def search_params
        params.require(:search).permit(:tag)
    end
end
