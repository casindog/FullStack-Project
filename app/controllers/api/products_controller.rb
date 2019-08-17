class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
    end

    # write methods to fetch only 20 more products from the db?

    # search/view
end
