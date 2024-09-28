import { v4 as uuidv4 } from "uuid";
import Travel from "../../models/travels/travel.js";

export const createTravel = async (req, res) => {
  try {
    const travelId = uuidv4(); // Genera un nuevo UUID
    const travel = new Travel({ ...req.body, id: travelId }); // Asigna el ID generado
    await travel.save();
    res.status(201).json(travel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllTravels = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalTravels = await Travel.countDocuments();
    const travels = await Travel.find().skip(skip).limit(limit);

    res.status(200).json({
      totalTravels,
      totalPages: Math.ceil(totalTravels / limit),
      currentPage: page,
      travels,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTravelById = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    if (!travel) {
      return res.status(404).json({ message: "Travel not found" });
    }
    res.status(200).json(travel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTravel = async (req, res) => {
  try {
    const travel = await Travel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!travel) {
      return res.status(404).json({ message: "travel not found" });
    }
    res.status(200).json(travel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una carga por ID
export const deleteTravel = async (req, res) => {
  try {
    const travel = await Travel.findByIdAndDelete(req.params.id);
    if (!travel) {
      return res.status(404).json({ message: "travel not found" });
    }
    res.status(204).json({ message: "travel deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
