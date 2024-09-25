// routes/authRoutes.js
import express from "express";
import { check } from "express-validator";
import { loginUser, registerUser } from "../../controllers/authentication/authController.js";
import authenticationCheck from "../../middlewares/authMiddleware.js";

const authRouter = express.Router();

// Registrar usuario
authRouter.post(
  "/register",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "Incluye un email válido").isEmail(),
    check("password", "La contraseña debe tener al menos 6 caracteres").isLength({ min: 6 }),
  ],
  registerUser
);

// Iniciar sesión
authRouter.post(
  "/login",
  [
    check("email", "Incluye un email válido").isEmail(),
    check("password", "La contraseña es obligatoria").exists(),
  ],
  loginUser
);

// Ruta protegida de ejemplo
authRouter.get("/me", authenticationCheck, (req, res) => {
  res.json({ message: "Ruta protegida accedida" });
});

export default authRouter;
