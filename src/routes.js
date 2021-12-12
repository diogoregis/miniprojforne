import { Router } from "express";
import ClienteController from "./controllers/ClienteController";
import ProdutoController from "./controllers/ProdutoController";
import FornecedorController from "./controllers/FornecedorController";
import UserController from "./controllers/UserController";
import SessionController from "./controllers/SessionController";
import auth from "./middlewares/auth";


const routes = new Router();

routes.post("/users", UserController.create);
routes.post("/session", SessionController.create);
routes.post("/clientes", ClienteController.create);
routes.post("/produtos", ProdutoController.create);
routes.post("/fornecedores", FornecedorController.create);

routes.use(auth);

routes.get("/users", UserController.index);
routes.get("/clientes", ClienteController.index);
routes.get("/produtos", ProdutoController.index);
routes.get("/fornecedores", FornecedorController.index);

export default routes;