import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/users/userRoutes.js";
import loadRoutes from "./routes/loads/loadRoutes.js";
import roleRoutes from "./routes/roles/roleRoutes.js";
import incidenceRouter from "./routes/incidence/incidenceRoutes.js";

dotenv.config(); // Carga variables desde .env

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());
// Habilitar CORS
app.use(cors());

// Rutas
app.use("/powerload", loadRoutes);
app.use("/powerload", roleRoutes);
app.use("/powerload", userRoutes);
app.use("/powerload", incidenceRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

