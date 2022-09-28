const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderItem: [
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
  anyAllergies: {
    type: Boolean,
    required: true,
    default: false
  },
  DeliveryAddress: {
    address: { type: String, required: false},
    city: { type: String, required: false},
    postalCode: { type: String, required: false},

  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentResult: {
    id: { type: String },
    status: { type: String},
    update_time: { type: String},
    email_address: { type: String},
  },
  taxPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false
  }, 
}, {
    timestamps: true
  });

module.exports = mongoose.model('Order', orderSchema)
