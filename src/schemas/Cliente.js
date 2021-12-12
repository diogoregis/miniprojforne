import mongoose, { Schema } from "mongoose";

const ClienteSchema = new Schema({
  nome: String,
  telefone: String,
});

export default mongoose.model("Cliente", ClienteSchema);