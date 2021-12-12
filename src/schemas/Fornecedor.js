import mongoose, { Schema } from "mongoose";

const FornecedorSchema = new Schema({
  nome: String,
  cnpj: String,
});

export default mongoose.model("Fornecedor", FornecedorSchema);