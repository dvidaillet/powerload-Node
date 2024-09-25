import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4 }, // ID único
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    dni: { type: String, required: false, unique: true },
    address: { type: String, required: false },
    phone: { type: String, required: false },
    role: { type: String, required: false },
    isActive: { type: Boolean, default: true },
    avatar: { type: String, default: null },
    code: { type: String, required: false },
    company: { type: String, required: false },
    website: { type: String, required: false },
    documents: { type: [String], required: false },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
