import Fornecedor from "../schemas/Fornecedor";

class FornecedorController{

    async create(request, response) {
        const { nome, cnpj } = request.body;
    
        const forncedor = await Fornecedor.create({
          nome,
          cnpj,
        });
    
        return response.json(Fornecedor);
      }
    
    async index(request, response) {
        const forncedores = await Fornecedor.find();
        return response.json(forncedores);
    }

}

export default new FornecedorController();