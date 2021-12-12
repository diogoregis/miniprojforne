import mongoose, { Schema } from "mongoose";

const ProdutoSchema = new Schema({
  descricao: String,
  preco: String,
});

export default mongoose.model("Produto", ProdutoSchema);