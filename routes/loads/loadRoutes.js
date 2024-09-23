import express from "express";
import {
  createLoad,
  getAllLoads,
  getLoadById,
  updateLoad,
  deleteLoad,
} from "../../controllers/loads/loadController.js";

const router = express.Router();

router.post("/", createLoad);
router.get("/", getAllLoads);
router.get("/:id", getLoadById);
router.put("/:id", updateLoad);
router.delete("/:id", deleteLoad);

export default router;
