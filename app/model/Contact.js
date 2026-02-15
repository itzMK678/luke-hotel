import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
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

    message: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// ✅ Prevent model overwrite error
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
