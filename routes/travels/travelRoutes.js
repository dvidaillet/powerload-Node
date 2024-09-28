import express from "express";
import { createTravel, deleteTravel, getAllTravels, getTravelById, updateTravel } from "../../controllers/travels/travelController.js";

const travelRouter = express.Router();

travelRouter.post("/travels", createTravel);
travelRouter.get("/travels", getAllTravels);
travelRouter.get("/travels/:id", getTravelById);
travelRouter.put("/travels/:id", updateTravel);
travelRouter.delete("/travels/:id", deleteTravel);

export default travelRouter;
