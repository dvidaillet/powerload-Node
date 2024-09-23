import express from "express";
import {
  createUserAppRole,
  getUserAppRoles,
  getUserAppRoleById,
  updateUserAppRole,
  deleteUserAppRole,
} from "../../controllers/userConfig/userAppRoleController.js";

const router = express.Router();

// Rutas para userAppRoles
router.post("/", createUserAppRole);
router.get("/", getUserAppRoles);
router.get("/:id", getUserAppRoleById);
router.put("/:id", updateUserAppRole);
router.delete("/:id", deleteUserAppRole);

export default router;
