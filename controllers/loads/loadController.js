import Load from "../../models/loads/Load.js";
import { v4 as uuidv4 } from 'uuid'; // Importa la función para generar UUID

// Crear una nueva carga
export const createLoad = async (req, res) => {
  try {
    // Generar un ID único para la carga
    const loadId = uuidv4(); // Genera un nuevo UUID

    // Crear la nueva carga con el ID generado
    const load = new Load({ ...req.body, id: loadId }); // Asigna el ID generado
    await load.save();
    res.status(201).json(load);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las cargas
export const getAllLoads = async (req, res) => {
  try {
    const loads = await Load.find();
    res.status(200).json(loads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una carga por ID
export const getLoadById = async (req, res) => {
  try {
    const load = await Load.findById(req.params.id);
    if (!load) {
      return res.status(404).json({ message: "Load not found" });
    }
    res.status(200).json(load);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una carga por ID
export const updateLoad = async (req, res) => {
  try {
    const load = await Load.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!load) {
      return res.status(404).json({ message: "Load not found" });
    }
    res.status(200).json(load);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una carga por ID
export const deleteLoad = async (req, res) => {
  try {
    const load = await Load.findByIdAndDelete(req.params.id);
    if (!load) {
      return res.status(404).json({ message: "Load not found" });
    }
    res.status(204).json({ message: "Load deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
