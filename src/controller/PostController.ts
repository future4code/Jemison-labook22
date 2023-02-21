import { Request, Response } from "express";
import { PostBusiness } from "./../business/PostBusiness";
import { CustomError } from "./../error/CustomError";

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

  async getPost(req:Request, res:Response): Promise<void> {
    try {
      const postBusiness = new PostBusiness();
      const post = await postBusiness.getPost();

      res.status(200).send(post)

    } catch (error: any) {
      throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
    }
  }

  async getId(req:Request, res:Response): Promise<void>{
    try{
      const postBusiness = new PostBusiness()
      const post = await postBusiness.getId({id: req.body.id})

    }catch(error: any){
      throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
    }
  }

  async postFriends(req: Request, res: Response): Promise<void>{
    try{
      const postBusiness = new PostBusiness()
      const result = await postBusiness.postFriends({id: req.body, user: req.body})

      res.status(200).send(result)

       }catch(error: any){
        throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
    }
  }
}

