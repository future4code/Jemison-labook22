import { Request, Response } from "express";
import { UsersBusiness } from "./../business/UserBusiness";
import { CustomError } from "./../error/CustomError";

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const userBusiness = new UsersBusiness();
      await userBusiness.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      res.status(201).send({ message: "Post criado com sucesso" });
    } catch (error: any) {
      throw new CustomError(
        error.statusCode || 400,
        error.message || error.sqlMessage
      );
    }
  }

  async users(req: Request, res: Response): Promise<void> {
    const userBusiness = new UsersBusiness();
    const users = await userBusiness.users();

    res.status(200).send(users);
  }
}
