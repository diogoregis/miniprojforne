import Produto from "../schemas/Produto";

class ProdutoController{

    async create(request, response) {
        const { descricao, preco } = request.body;
    
        const produto = await Produto.create({
          descricao,
          preco,
        });
    
        return response.json(produto);
      }
    
    async index(request, response) {
        const produtos = await Produto.find();
        return response.json(produtos);
    }

}

export default new ProdutoController();