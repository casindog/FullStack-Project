# if nil, meaning no reviews.
if !@reviews 
    debugger
else 
    json.set! @reviews.id do  
        json.extract! @reviews, :comment, :created_at

        json.user_name User.find_by_id(@reviews['user_id']).email
    end
end
