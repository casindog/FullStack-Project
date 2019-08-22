json.set! @product.id do
    json.extract! @product, :name, :original_price, :transactions, :verified, :fast_shipping, :almost_gone, :just_shipping
end

if @product.photo.attached?  
    json.photoUrls url_for(@product.photo)
end
