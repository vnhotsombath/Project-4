const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  calories: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  reviewId: [
    {
      ref: "review",
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
  ],
  numReviews: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("Meal", mealSchema);
