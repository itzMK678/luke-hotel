import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    number: {
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
      type: Date,
      required: true,
    },

    person: {
      type: Number,
      required: true,
      min: 1,
    },

    VIP: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Booking =
  mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

export default Booking;