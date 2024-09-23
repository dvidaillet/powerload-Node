import express from "express";
import {
  createUserRole,
  getUserRoles,
  deleteUserRole,
  getUserRoleById,
  updateUserRole,
} from "../../controllers/config/userRoleController";

const router = express.Router();

// Rutas para user roles
router.post("/", createUserRole);
router.get("/", getUserRoles);
router.get("/:id", getUserRoleById);
router.put("/:id", updateUserRole);
router.delete("/:id", deleteUserRole);

export default router;
