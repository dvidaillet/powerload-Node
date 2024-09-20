import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from 'dotenv';

dotenv.config(); // Carga variables desde .env

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Rutas
app.use("/powerload", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
