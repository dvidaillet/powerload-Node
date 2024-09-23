import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/users/userRoutes.js";
import loadRoutes from "./routes/loads/loadRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import UserRoleRoutes from "./models/config/UserRole.js";

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
app.use("/powerload", userRoutes);
app.use("/powerload", loadRoutes);
app.use("/api/user-roles", UserRoleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
