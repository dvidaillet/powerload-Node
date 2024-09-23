import UserAppRole from "../../models/userConfig/UserAppRole.js";

// Crear un nuevo userAppRole
export const createUserAppRole = async (req, res) => {
  try {
    const role = new UserAppRole(req.body);
    await role.save();
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los userAppRoles
export const getUserAppRoles = async (req, res) => {
  try {
    const roles = await UserAppRole.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un userAppRole por ID
export const getUserAppRoleById = async (req, res) => {
  try {
    const role = await UserAppRole.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un userAppRole por ID
export const updateUserAppRole = async (req, res) => {
  try {
    const role = await UserAppRole.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(role);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un userAppRole por ID
export const deleteUserAppRole = async (req, res) => {
  try {
    await UserAppRole.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Role deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
