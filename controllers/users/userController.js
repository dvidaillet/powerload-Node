// controllers/userController.js
import User from "../../models/users/User.js";

// Crear un nuevo usuario
export const createUser = async (req, res) => {
  try {
    const user = new User(req.body); // El campo `id` se generará automáticamente
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Número de página, por defecto 1
    const limit = parseInt(req.query.limit) || 10; // Límite de resultados por página, por defecto 10
    const skip = (page - 1) * limit; // Calcular cuántos resultados saltar

    // Contar el total de usuarios
    const totalUsers = await User.countDocuments();

    // Obtener los usuarios con paginación
    const users = await User.find().skip(skip).limit(limit);

    // Responder con los usuarios y la información de paginación
    res.status(200).json({
      totalUsers, // Total de usuarios en la base de datos
      totalPages: Math.ceil(totalUsers / limit), // Total de páginas
      currentPage: page, // Página actual
      users, // Los usuarios de la página actual
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar usuario por ID
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar usuario por ID
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un usuario por ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
