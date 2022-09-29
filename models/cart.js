const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  orderItem: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
      quantity: {
        type: Number,
        required: true,
        min: [1],
        default: 1,
      },
      price: Number,
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
