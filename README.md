# README
7/12/2019:

Welcome to Want.com

This project is an attempt to clone the functionality and style of the e-commerce website Wish.com. 
Any user should be able to view an index of products, and view a detailed page of a product. Logged-in users should be able to add/remove items from their cart. Logged-in users should also be able to edit the quantity of products they wish to purchase. The website does not implement any commerical transactions. 

Link to Project Website:
https://wish-want-fsp.herokuapp.com/#/

Overview of the project:
    Database - PostGresql
    Users table
    I implemented a user authentication process that allows users to sign and sign out. Only logged-in users can add/remove/edit items into a cart. 
    
    Products table
    Since dogs and barbecue are two of my favorite things, I seeded ~10 products each into my products table from the actual Wish.com site.

    Ruby on Rails
    I am using the rails framework for my backend. I had to configure my model validations, routes, controller logic, and views. For routes, I am implementing both synchronous and asynchronous requests. The index page performs an asynchronous request that fetches all the products in my database. 

    - Rails in Ruby
    - React and Redux in JavaScript

Challenges faced: 
    One challenged I faced was trying to implement these flyers called, "Almost Gone!" or "Just pay Shipping!". I was able to solve this problem by storing in the database boolean fields in the database. Then, in the frontend React, I was able to check the boolean values in store and render the flyers component for products that had a value of true. Any products with a value of false would render an empty div. 

In developement: 
 - Adding show page view/functionality
 - Adding cart view/functionality