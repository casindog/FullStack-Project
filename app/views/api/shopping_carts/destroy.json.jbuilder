@shopping_cart.each do |shoppingCart|   
    json.set! shoppingCart.id do
        json.extract! shoppingCart, :id, :user_id, :product_id, :quantity    
    end

end