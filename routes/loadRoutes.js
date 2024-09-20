import express from "express";
import {
  createLoad,
  getAllLoads,
  getLoadById,
  updateLoad,
  deleteLoad,
} from "../controllers/loadController.js";

const router = express.Router();

// Ruta para crear una nueva carga
router.post("/", createLoad);

// Ruta para obtener todas las cargas
router.get("/", getAllLoads);

// Ruta para obtener una carga por ID
router.get("/:id", getLoadById);

// Ruta para actualizar una carga por ID
router.put("/:id", updateLoad);

// Ruta para eliminar una carga por ID
router.delete("/:id", deleteLoad);

export default router;
