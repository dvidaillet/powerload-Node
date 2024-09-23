import mongoose from "mongoose";

const userAppRoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("UserAppRole", userAppRoleSchema);
