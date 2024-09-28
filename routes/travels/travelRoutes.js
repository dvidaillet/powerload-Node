import express from "express";
import {
  createLoad,
  getAllLoads,
  getLoadById,
  updateLoad,
  deleteLoad,
} from "../../controllers/loads/loadController.js";

const travelRouter = express.Router();

travelRouter.post("/travels", createLoad);
travelRouter.get("/travels", getAllLoads);
travelRouter.get("/travels/:id", getLoadById);
travelRouter.put("/travels/:id", updateLoad);
travelRouter.delete("/travels/:id", deleteLoad);

export default travelRouter;
