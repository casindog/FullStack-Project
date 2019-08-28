 @cartItems.each do |cartItem|
    json.set! cartItem.id do  
        json.extract! cartItem, :id, :user_id, :product_id, :quantity

        json.extract! Product.find_by_id(cartItem["product_id"]), :original_price
        json.discount Product.find_by_id(cartItem["product_id"]).discount.discount_price  
        
        if Product.find_by_id(cartItem["product_id"]).photo.attached?  
            json.photoUrls url_for(Product.find_by_id(cartItem["product_id"]).photo)
        end
    end
end