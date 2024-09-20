import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema(
  {
    id: { type: String, default: uuidv4 }, // ID único
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dni: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    avatar: { type: String, default: null },
    code: { type: String, required: true },
    company: { type: String, required: true },
    website: { type: String, required: false },
    documents: { type: [String], required: false },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
