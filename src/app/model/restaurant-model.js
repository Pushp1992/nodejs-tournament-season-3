// Restaurant model which expose the schema of Restaurant with it's respective fields

const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
    rating: Number,
    price: Number,
    option: String,
    image_url: URL,
    title: String,
    availability: Boolean,
    customer_review: String
}, {
    timeStamps: true
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);