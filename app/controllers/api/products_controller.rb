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
                @products = Product.where("lower(name) like ? OR lower(name) like ?", '%bbq%', '%barbecue%').limit(search_params[:endIdx])
            elsif search_params[:tag] == "recentlyviewed"
                @products = Product.where(id: search_params[:history])
            else 
                search = search_params[:tag].downcase
                @products = Product.where("lower(name) like ?", "%#{search}%")
            end

        end
    end

    def show
        @product = Product.find_by id: params[:id]
    end

    def products_params
        params.require(:products).permit(:endIdx)
    end

    def search_params
        params.require(:search).permit(:tag, :endIdx, history: [])
    end
end
