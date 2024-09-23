import mongoose from "mongoose";

const userRoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const UserAppRole = mongoose.model("UserAppRole", userRoleSchema);

export default UserAppRole;
