// routes/roleRoutes.js
import express from "express";
import {
  createRole,
  getRoles,
  getRoleById,
  updateRole,
  deleteRole,
} from "../../controllers/roles/roleController.js";

const roleRouter = express.Router();

// Rutas para los roles
roleRouter.post("/roles", createRole); // Crear rol
roleRouter.get("/roles", getRoles); // Obtener todos los roles
roleRouter.get("/roles/:id", getRoleById); // Obtener rol por ID
roleRouter.put("/roles/:id", updateRole); // Actualizar rol por ID
roleRouter.delete("/roles/:id", deleteRole); // Eliminar rol por ID

export default roleRouter;
