import mongoose from "mongoose";

const incidenceSchema = new mongoose.Schema({
  description: { type: String, required: true },
  cancel_description: { type: String, default: null },
  close_at: { type: Date, default: null },
  close_description: { type: String, default: null },
  load_id: { type: Number, required: true },
  status: {
    type: String,
    enum: ["open", "cancelled", "closed"], // Ejemplo de posibles estados
    default: "open",
  },
  support_incidents_type_id: { type: Number, required: true },
  user_id: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model("Incidence", incidenceSchema);
