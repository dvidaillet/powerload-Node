import UserRole from "../../models/config/UserRole.js";

// Crear un nuevo rol
export const createUserRole = async (req, res) => {
  try {
    const role = new UserRole(req.body);
    await role.save();
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los roles
export const getUserRoles = async (req, res) => {
  try {
    const roles = await UserRole.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un rol por ID
export const getUserRoleById = async (req, res) => {
  try {
    const role = await UserRole.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un rol por ID
export const updateUserRole = async (req, res) => {
  try {
    const role = await UserRole.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(role);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un rol por ID
export const deleteUserRole = async (req, res) => {
  try {
    await UserRole.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Role deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
