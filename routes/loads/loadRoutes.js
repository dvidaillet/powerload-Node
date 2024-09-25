import express from "express";
import {
  createLoad,
  getAllLoads,
  getLoadById,
  updateLoad,
  deleteLoad,
} from "../../controllers/loads/loadController.js";

const loadRouter = express.Router();

loadRouter.post("/loads", createLoad);
loadRouter.get("/loads", getAllLoads);
loadRouter.get("/loads/:id", getLoadById);
loadRouter.put("/loads/:id", updateLoad);
loadRouter.delete("/loads/:id", deleteLoad);

export default loadRouter;
