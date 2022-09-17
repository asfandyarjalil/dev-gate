const crypto = require("crypto");
const mongoose = require("mongoose");

require("dotenv").config();

const userSchema = mongoose.Schema(
  {
    card_number: {
      type: String,
    },
    cvv: {
      type: String,
    },
    holder_name: {
      type: String,
    },
    expiry_date: {
      type: Object,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
