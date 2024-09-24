// routes/roleRoutes.js
import express from "express";
import {
  createRole,
  getRoles,
  getRoleById,
  updateRole,
  deleteRole,
} from "../../controllers/roles/roleController.js";

const router = express.Router();

// Rutas para los roles
router.post("/roles", createRole); // Crear rol
router.get("/roles", getRoles); // Obtener todos los roles
router.get("/roles/:id", getRoleById); // Obtener rol por ID
router.put("/roles/:id", updateRole); // Actualizar rol por ID
router.delete("/roles/:id", deleteRole); // Eliminar rol por ID

export default router;
