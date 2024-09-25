// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

const authenticationCheck = (req, res, next) => {
  // Obtener el token desde el encabezado
  const token = req.header("x-auth-token");

  // Verificar si no hay token
  if (!token) {
    return res
      .status(401)
      .json({ message: "No hay token, permiso no autorizado" });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token no válido" });
  }
};

export default authenticationCheck;
