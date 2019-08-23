# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# rails db:seed
# Product.destroy_all


# # don't forget to do this!
require 'open-uri'

# # create a user
# user = User.create(email: "andy@hotmail.com", password: "password")

# # create a File from the url
# file = open('<your_file_url>')

# # attach to user
# user.avatar.attach(io: file, filename: 'this_users_avatar.jpg')

# demo user
User.create!(
    email: 'DEMO', 
    password: 'password'
)


i = 1;
10.times do 
    #Dog StuffDog
    p = Product.create(
        name: 'Vehicle Car Pet Dog Seat Belt Puppy Car Seatbelt Harness Lead Clip Cat Dog Safety Lever Auto Traction', 
        original_price: '$15', 
        transactions: 130,
        almost_gone: false,
        verified: true,
        fast_shipping: true,
        just_shipping: true,
        # img_url: 'dogseatbelt.jpeg',
        seller_id: 1)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/dogseatbelt.jpeg')
        p.photo.attach(io: file, filename: 'dogseatbelt.jpeg')

    d = Discount.create(
        product_id: i,
        discount_price: 'Free'
        )
            
  
    i += 1

    p = Product.create(
        name: 'Professional Pet Anti Agrssive Deterrent Train ETU LED Dog Pet Repeller Barking Stopper', 
        original_price: '$26', 
        transactions: 1250,
        almost_gone: false,
        verified: false,
        fast_shipping: false,
        just_shipping: false,
        # img_url: 'DogStopper.jpg',
        seller_id: 1)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/DogStopper.jpg')
        p.photo.attach(io: file, filename: 'DogStopper.jpg')

    d = Discount.create(
        product_id: i,
        discount_price: "$4.65"
    )

    i += 1

    p = Product.create(
        name: 'Rubber Kelly Big Giant Pet Dog Puppy Mega Jumbo Tennis Ball Thrower Chucker Launcher Play Toy Signature Diameter 24cm', 
        original_price: '$110', 
        transactions: 21100,
        almost_gone: false,
        verified: true,
        fast_shipping: true,
        just_shipping: false,
        # img_url: 'dogball.jpg',
        seller_id: 1)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/dogball.jpg')
        p.photo.attach(io: file, filename: 'dogball.jpg')

    d = Discount.create(
        product_id: i,
        discount_price: "$10"
    )
    
    i += 1

    p = Product.create(
        name: 'Smart Dog Bluetooth Locator Pet GPS Tracker Alarm Remote Wireless Tracker for Pets No Battery', 
        original_price: '$22', 
        transactions: 6000,
        almost_gone: false,
        verified: true,
        fast_shipping: false,
        just_shipping: false,
        # img_url: 'dogtracker.jpg',
        seller_id: 1)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/dogtracker.jpg')
        p.photo.attach(io: file, filename: 'dogtracker.jpg')

    d = Discount.create(
        product_id: i,
        discount_price: "$0.66"
    )

    i += 1

    p = Product.create(
        name: 'Summer Cooling Mats Blanket Ice Silk Pet Dog Bed Sofa Portable Yoga Sleeping Pad For Cats Indoor Cushion', 
        original_price: '$4', 
        transactions: 125,
        almost_gone: false,
        verified: false,
        fast_shipping: false,
        just_shipping: false,
        # img_url: 'DogMat.jpeg',
        seller_id: 1)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/DogMat.jpeg')
        p.photo.attach(io: file, filename: 'DogMat.jpeg')

    d = Discount.create(
        product_id: i,
        discount_price: "$4"
    )

    i += 1

    p = Product.create(
        name: 'Dogs Swimsuit Dog Vests Bathing SuitSwimming Lifejacket Dog Clothes Pet Supplies', 
        original_price: '$52', 
        transactions: 125,
        almost_gone: true,
        verified: true,
        fast_shipping: false,
        just_shipping: false,
        # img_url: 'DogLifeJacket.jpg',
        seller_id: 1)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/DogLifeJacket.jpg')
        p.photo.attach(io: file, filename: 'DogLifeJacket.jpg')


    d = Discount.create(
        product_id: i,
        discount_price: "$6"
    )

    i += 1

    p = Product.create(
        name: 'Cute Pet Dog Cat Shirt Summer Breathable Vest for Cats Small Dogs Fashion Lettering Polyester Kitten Clothes Puppies Costume', 
        original_price: '$0', 
        transactions: 10002,
        almost_gone: false,
        verified: false,
        fast_shipping: false,
        just_shipping: true,
        # img_url: 'DogBoss.jpg',
        seller_id: 1)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/DogBoss.jpg')
        p.photo.attach(io: file, filename: 'DogBoss.jpg')


    d = Discount.create(
        product_id: i,
        discount_price: "$Free"
    )

    i += 1

    p = Product.create(
        name: 'Nylon LED Pet Dog Collar,Night Safety Flashing Glow In The Dark Dog Leash,Dogs Luminous Fluorescent Collars Pet Supplies', 
        original_price: '$0', 
        transactions: 5234,
        almost_gone: false,
        verified: false,
        fast_shipping: false,
        just_shipping: true,
        # img_url: 'DogLEDcollar.jpg',
        seller_id: 1)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/DogLEDcollar.jpg')
        p.photo.attach(io: file, filename: 'DogLEDcollar.jpg')


    d = Discount.create(
        product_id: i,
        discount_price: "$0.93"
    )

    i += 1

    p = Product.create(
        name: 'Pet Toys Bite-Resistant Voice Toy Balls Large Dogs Golden Retriever Prickly TPR Dog Toy Cleaning Teeth Molar Dog Toy', 
        original_price: '$99', 
        transactions: 111,
        almost_gone: true,
        verified: false,
        fast_shipping: false,
        just_shipping: false,
        # img_url: 'DogChewToy.jpg',
        seller_id: 1)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/DogChewToy.jpg')
        p.photo.attach(io: file, filename: 'DogChewToy.jpg')


    d = Discount.create(
        product_id: i,
        discount_price: "$10"
    )
    i += 1

    p = Product.create(
        name: 'Large Pet Dog Cat Bed Puppy Cushion House Pet Soft Warm Kennel Dog Mat Blanket', 
        original_price: '$8', 
        transactions: 111,
        almost_gone: false,
        verified: false,
        fast_shipping: false,
        just_shipping: false,
        # img_url: 'DogBed.jpg',
        seller_id: 1)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/DogBed.jpg')
        p.photo.attach(io: file, filename: 'DogBed.jpg')

    d = Discount.create(
        product_id: i,
        discount_price: "$5"
    )

    i += 1

    # BBQ Stuff
    p = Product.create(
        name: 'Barbecue Liners Pan Fry Liner Pads Reuseable Baking Mats Non-stick Mats Cooking Tool Sheet Pad', 
        original_price: '$0', 
        transactions: 11111,
        almost_gone: false,
        verified: true,
        fast_shipping: false,
        just_shipping: true,
        # img_url: 'bbq1.jpg',
        seller_id: 2)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/bbq1.jpg')
        p.photo.attach(io: file, filename: 'bbq1.jpg')

    d = Discount.create(
        product_id: i,
        discount_price: "Free"
    )

    i += 1


    p = Product.create(
        name: '10pcs Stainless Steel BBQ Utensil Skewers Barbecue Flat Needle Kabob Sticks', 
        original_price: '$40', 
        transactions: 18,
        almost_gone: false,
        verified: false,
        fast_shipping: false,
        just_shipping: false,
        # img_url: 'bbq2.jpg',
        seller_id: 2)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/bbq2.jpg')
        p.photo.attach(io: file, filename: 'bbq2.jpg')


    d = Discount.create(
        product_id: i,
        discount_price: "$8"
    )

    i += 1

    p = Product.create(
        name: 'BBQ Grill Tool Set- 20 Piece Stainless Steel Barbecue Grilling Accessories with Aluminum Case, Spatula, Tongs, Skewers', 
        original_price: '$60', 
        transactions: 149,
        almost_gone: false,
        verified: false,
        fast_shipping: false,
        just_shipping: false,
        # img_url: 'bbq3.jpg',
        seller_id: 2)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/bbq3.jpg')
        p.photo.attach(io: file, filename: 'bbq3.jpg')

    d = Discount.create(
        product_id: i,
        discount_price: "$15"
    )

    i += 1

    p = Product.create(
        name: 'BBQ Grill Tool Set- 20 Piece Stainless Steel Barbecue Grilling Accessories with Aluminum Case, Spatula, Tongs, Skewers', 
        original_price: '$60', 
        transactions: 149,
        almost_gone: false,
        verified: false,
        fast_shipping: false,
        just_shipping: false,
        # img_url: 'bbq4.jpeg',
        seller_id: 2)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/bbq4.jpeg')
        p.photo.attach(io: file, filename: 'bbq4.jpeg')


    d = Discount.create(
        product_id: i,
        discount_price: "$18"
    )   
    
    i += 1

    p = Product.create(
        name: '300 Stainless Steel Barbecue BBQ Smoker Grill Thermometer Temperature Gauge', 
        original_price: '$20', 
        transactions: 1493,
        almost_gone: false,
        verified: true,
        fast_shipping: false,
        just_shipping: false,
        # img_url: 'bbq5.jpg',
        seller_id: 2)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/bbq5.jpg')
        p.photo.attach(io: file, filename: 'bbq5.jpg')


    d = Discount.create(
        product_id: i,
        discount_price: "$2"
    )

    i += 1

    p = Product.create(
        name: 'BBQ Grill Clean Stone Bakeware Cleaning Grill Cleaning', 
        original_price: '$6', 
        transactions: 99,
        almost_gone: false,
        verified: false,
        fast_shipping: false,
        just_shipping: false,
        # img_url: 'bbq6.jpg',
        seller_id: 2)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/bbq6.jpg')
        p.photo.attach(io: file, filename: 'bbq6.jpg')


    d = Discount.create(
        product_id: i,
        discount_price: "$1"
    )
    i += 1

    p = Product.create(
        name: 'Portable Compact Charcoal Barbecue BBQ Grill Cooker Bars Smoker Outdoor Camping', 
        original_price: '$80', 
        transactions: 9,
        almost_gone: true,
        verified: false,
        fast_shipping: true,
        just_shipping: false,
        # img_url: 'bbq7.jpg',
        seller_id: 2)


        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/bbq7.jpg')
        p.photo.attach(io: file, filename: 'bbq7.jpg')

    d = Discount.create(
        product_id: i,
        discount_price: "$20"
    )
    i += 1

    p = Product.create(
        name: 'BBQ Seasoning and Marinade Injector Needle Meat Tenderizer Kitchen Supplies Home Accessories Halloween Christmas Tool Dining Sauces Gadget Cooking Hammers Knife Steak Outdoor Comping BBQ Cooking Baking Tool Barbecue Steak', 
        original_price: '$49', 
        transactions: 136,
        almost_gone: false,
        verified: false,
        fast_shipping: false,
        just_shipping: false,
        # img_url: 'bbq8.jpg',
        seller_id: 2)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/bbq8.jpg')
        p.photo.attach(io: file, filename: 'bbq8.jpg')

    d = Discount.create(
        product_id: i,
        discount_price: "$5"
    )
    i += 1

    p = Product.create(
        name: 'Barbecue Security Tools Stamp Hot Stamping Personality Changeable 55 Letters Steak Mold Barbecue Meat BBQ Tool Outdoor', 
        original_price: '30', 
        transactions: 183,
        almost_gone: false,
        verified: true,
        fast_shipping: false,
        just_shipping: false,
        # img_url: 'bbq9.jpeg',
        seller_id: 2)

        file = open('https://app-want-seeds.s3-us-west-1.amazonaws.com/images/bbq9.jpeg')
        p.photo.attach(io: file, filename: 'bbq9.jpeg')


    d = Discount.create(
        product_id: i,
        discount_price: "$6"
    )
    i += 1

end