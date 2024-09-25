// import User from "../../models/users/User.js";
import Incidence from "../../models/incidence/Incidence.js";

// Crear un nuevo usuario
export const createIncidence = async (req, res) => {
  try {
    const incidence = new Incidence(req.body); // El campo `id` se generará automáticamente
    await incidence.save();
    res.status(201).json(incidence);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los usuarios
export const getIncidences = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Número de página, por defecto 1
    const limit = parseInt(req.query.limit) || 10; // Límite de resultados por página, por defecto 10
    const skip = (page - 1) * limit; // Calcular cuántos resultados saltar

    // Contar el total de usuarios
    const totalIncidences = await Incidence.countDocuments();

    // Obtener los usuarios con paginación
    const incidences = await Incidence.find().skip(skip).limit(limit);

    // Responder con los usuarios y la información de paginación
    res.status(200).json({
      totalIncidences, // Total de usuarios en la base de datos
      totalPages: Math.ceil(totalIncidences / limit), // Total de páginas
      currentPage: page, // Página actual
      incidences, // Los usuarios de la página actual
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar usuario por ID
export const updateIncidences = async (req, res) => {
  try {
    const incidence = await Incidence.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(incidence);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar usuario por ID
export const deleteIncidence = async (req, res) => {
  try {
    await Incidence.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Incidence deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un usuario por ID
export const getIncidenceById = async (req, res) => {
  try {
    const incidence = await Incidence.findById(req.params.id);
    if (!incidence) {
      return res.status(404).json({ message: "Incidence not found" });
    }
    res.status(200).json(incidence);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
