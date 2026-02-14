const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    mail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
   person: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);


module.exports =
   mongoose.model("Booking", BookingSchema);
