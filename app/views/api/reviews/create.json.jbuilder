@reviews.each do |review|
    json.set! review.id do  
        json.extract! review, :comment, :created_at

        json.user_name User.find_by_id(review['user_id']).email
    end
end