// routes/userRoutes.js
import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserById
} from "../../controllers/users/userController.js";

const userRoutes = express.Router();

userRoutes.post("/users", createUser);
userRoutes.get("/users", getUsers);
userRoutes.get('/users/:id', getUserById); 
userRoutes.put("/users/:id", updateUser);
userRoutes.delete("/users/:id", deleteUser);

export default userRoutes;
