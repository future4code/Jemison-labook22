import { BaseDatabase } from "./BaseDatabase";
import { InsertUserDTO } from "../model/userDTO";
import { CustomError } from "./../error/CustomError";

export class UserDatabase extends BaseDatabase {
  private static TABLE_USER = "labook_users";

  async create({ id, name, email, password }: InsertUserDTO): Promise<void> {
    try {
      await UserDatabase.connection
        .insert({
          id,
          name,
          email,
          password,
        })
        .into(UserDatabase.TABLE_USER);
    } catch (error: any) {
      throw new CustomError(
        error.statusCode || 400,
        error.message || error.sqlMessage
      );
    }
  }
}
