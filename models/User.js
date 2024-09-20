import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid'; // Importa la función para generar UUIDs

const userSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 }, // Genera un UUID como ID por defecto
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dni: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  avatar: { type: String, default: null }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
