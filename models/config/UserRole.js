import mongoose from "mongoose";

const userRoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const UserRoleRoutes = mongoose.model("UserRole", userRoleSchema);

export default UserRoleRoutes;
