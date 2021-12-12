import User from "../schemas/User";
import { hash } from "bcryptjs";

class UserController {
  async create(request, response) {
    const { username, password} = request.body;

    const passwordCrypt = await hash(password, 8);

    const user = await User.create({
      username,
      password: passwordCrypt,
    });

    return response.json(user);
  }

  async index(request, response) {
    const users = await User.find();
    return response.json(users);
  }
}

export default new UserController();
