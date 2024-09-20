// routes/userRoutes.js
import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserById
} from "../controllers/userController.js";

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getUsers);
router.get('/:id', getUserById); 
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
