import express from "express";
import {
  createIncidence,
  deleteIncidence,
  getIncidenceById,
  getIncidences,
  updateIncidences,
} from "../../controllers/incidence/incidenceController.js";

const incidenceRouter = express.Router();

incidenceRouter.post("/incidences", createIncidence);
incidenceRouter.get("/incidences", getIncidences);
incidenceRouter.get("/incidences/:id", getIncidenceById);
incidenceRouter.put("/incidences/:id", updateIncidences);
incidenceRouter.delete("/incidences/:id", deleteIncidence);

export default incidenceRouter;
