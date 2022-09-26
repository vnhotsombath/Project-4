const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String
}, {
    timestamps: true,
});

const mealSchema = new mongoose.Schema({
    title: {type: String, required: true},
    img: {type: String, required: true},
    description: {type: String, required: true},
    calories: {type: String, required: true},
    price: {type: Number, required: true, min: 0},
    rating: { type: Number, min: 1, max: 5, default: 5},
    review: [reviewSchema],
    numReviews: {type: Number, required: true, default: 0}
})

module.exports = mongoose.model('Meal', mealSchema)