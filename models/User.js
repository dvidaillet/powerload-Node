// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dni: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    avatar: { type: String, default: null }, // Campo para la imagen del avatar
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
