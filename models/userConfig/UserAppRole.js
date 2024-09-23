import mongoose from "mongoose";

const userAppRoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
});

export default mongoose.model("UserAppRole", userAppRoleSchema);
