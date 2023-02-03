import { Request, Response } from "express";
import { PostBusiness } from "./../business/PostBusiness";
import { CustomError } from "./../error/CustomError";
import { postDB } from "../model/post";

export class PostController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const postBusiness = new PostBusiness();
      await postBusiness.create({
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
        authorId: req.body.authorId,
      });

      res.status(201).send({ message: "Post criado com sucesso" });
    } catch (error: any) {
      throw new CustomError(
        error.statusCode || 400,
        error.message || error.sqlMessage
      );
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;

      const postBusiness = new PostBusiness();
      const post: postDB = await postBusiness.getById(id);

      res.status(200).send(post);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  }
}
