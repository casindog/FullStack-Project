@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :original_price, :transactions, :verified, :fast_shipping, :almost_gone, :just_shipping
        
        if product.photo.attached?  
            json.photoUrls url_for(product.photo)
        end
    end 
end