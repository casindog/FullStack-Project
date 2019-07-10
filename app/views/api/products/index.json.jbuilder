@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :img_url, :name, :original_price, :transactions, :verified, :fast_shipping, :almost_gone, :just_shipping
    end 
end