import { Request, Response } from "express";
import { UserBusiness } from "./../business/UserBusiness"
import { CustomError } from "./../error/CustomError";

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const userBusiness = new UserBusiness();
      await userBusiness.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      res.status(201).send({ message: "Usuário foi criado com sucesso" });
    } catch (error: any) {
      throw new CustomError(
        error.statusCode || 400,
        error.message || error.sqlMessage
      );
    }
  }
}
