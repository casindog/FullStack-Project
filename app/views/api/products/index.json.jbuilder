@products.each do |product|
    json.set! product.id do

        json.extract! product, :id, :original_price, :transactions, :verified, :fast_shipping, :almost_gone, :just_shipping
        json.discount product.discount.discount_price
        
        if product.photo.attached?  
            json.photoUrls url_for(product.photo)
        end
    end 
end