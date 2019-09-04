class Product < ApplicationRecord
    has_one_attached :photo
    has_one :discount

    has_many :shopping_carts
    has_many :reviews
end
