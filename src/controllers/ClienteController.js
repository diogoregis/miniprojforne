import Cliente from "../schemas/Cliente";

class ClienteController{

    async create(request, response) {
        const { nome, telefone } = request.body;
    
        const cliente = await Cliente.create({
          nome,
          telefone,
        });
    
        return response.json(Cliente);
      }
    
    async index(request, response) {
        const clientes = await Cliente.find();
        return response.json(clientes);
    }

}

export default new ClienteController();