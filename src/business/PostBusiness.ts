import { PostDatabase } from "./../data/PostDatabase";
import { CustomError } from "./../error/CustomError";
import { CreatePostDTO, InsertPostDTO } from "./../model/postDTO";
import { InvalidDescription, InvalidType } from "../error/PostError";
import { postDB } from "../model/post";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";

const authenticator = new Authenticator();

export class PostBusiness {
  async create({
    photo,
    description,
    type,
    authorId,
  }: CreatePostDTO): Promise<void> {
    try {
      if (!photo || !description || !type || !authorId) {
        throw new CustomError(442, "Erro, informe os dados novamente");
      }

      if (description.length < 5) {
        throw new InvalidDescription();
      }

      if (type != "event" && type != "normal") {
        throw new InvalidType();
      }

      const id = generateId();

      const postDataBase = new PostDatabase();

      const post: InsertPostDTO = {
        id,
        photo,
        description,
        type,
        createdAt: new Date(),
        authorId,
      };

      await postDataBase.create(post);
    } catch (error: any) {
      throw new CustomError(
        error.statusCode || 400,
        error.message || error.sqlMessage
      );
    }
  }

  async getById(id: string): Promise<postDB> {
    try {
      const postDatabase = new PostDatabase();
      const post = await postDatabase.selectById(id);

      return post;
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  }
}
