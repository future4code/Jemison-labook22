import { UserDatabase } from "./../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidEmail, InvalidName, InvalidPassword } from "../error/UserError";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { CreateUserDTO, InsertUserDTO } from "../model/userDTO";
import { generateId } from "./../services/IdGenerator";

const userDatabase = new UserDatabase();
const authenticator = new Authenticator();
const hashManager = new HashManager();

export class UsersBusiness {
  async create({ name, email, password }: CreateUserDTO): Promise<void> {
    try {
      if (!name || !email || !password) {
        throw new CustomError(
          422,
          "name, email and password must be provided."
        );
      }
      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (name.length < 3) {
        throw new InvalidName();
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      const id = generateId();

      const userDatabase = new UserDatabase();
      const user: InsertUserDTO = {
        id,
        name,
        email,
        password,
      };

      await userDatabase.create(user);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }
}
