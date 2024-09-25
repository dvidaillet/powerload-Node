import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserById
} from "../../controllers/incidence/incidenceController.js";

const incidenceRouter = express.Router();

incidenceRouter.post("/incidences", createUser);
incidenceRouter.get("/incidences", getUsers);
incidenceRouter.get('/incidences/:id', getUserById); 
incidenceRouter.put("/incidences/:id", updateUser);
incidenceRouter.delete("/incidences/:id", deleteUser);

export default incidenceRouter;
