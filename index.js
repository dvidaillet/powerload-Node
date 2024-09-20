const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de ejemplo
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
