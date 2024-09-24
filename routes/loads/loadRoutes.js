import express from "express";
import {
  createLoad,
  getAllLoads,
  getLoadById,
  updateLoad,
  deleteLoad,
} from "../../controllers/loads/loadController.js";

const router = express.Router();

router.post("/loads", createLoad);
router.get("/loads", getAllLoads);
router.get("/loads/:id", getLoadById);
router.put("/loads/:id", updateLoad);
router.delete("/loads/:id", deleteLoad);

export default router;
