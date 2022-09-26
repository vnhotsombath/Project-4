const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderItems: [
    {
      title: { type: String, required: true },
      qty: { type: Number, required: true },
      img: { type: String, required: true },
      price: { type: Number, required: true },
      meal: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Meal",
      },
    },
  ],
});
