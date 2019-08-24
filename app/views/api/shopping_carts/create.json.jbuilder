 @cartItems.each do |cartItem|
    json.set! cartItem.product_id do
        json.extract! cartItem, :user_id, :product_id, :quantity
    end
end