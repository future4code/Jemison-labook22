import { PostDatabase } from "./../data/PostDatabase";
import { CustomError } from "./../error/CustomError";
import { AuthenticationDataDTO, CreatePostDTO, InsertPostDTO } from "./../model/postDTO";
import { InvalidDescription, InvalidType, InvalidDataPost, InvalidIdPost } from "../error/PostError";
import { PostFriendShip } from "../model/postDTO";
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
        throw new InvalidDataPost
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

      const postDataBase = new PostDataBase()
      await postDataBase.create(post);

    } catch (error: any) {
      throw new CustomError(
        error.statusCode || 400,
        error.message || error.sqlMessage
      );
    }
  }

  async getPost(req:Request, res:Response): Promise<postDB> {
    try {
      const postDatabase = new PostDatabase();
      const post = await postDatabase.getPost();

      res.status(200).send(post)

    } catch (error: any) {
      throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
    }
  }

  async getId({id}: AuthenticationDataDTO): Promise<AuthenticationDataDTO[]>{

    try{
      if(!id){
        throw new InvalidDescription
      }

      const idPost: AuthenticationDataDTO ={
        id: id
      }
      const postDataBase = new PostDatabase()

      return await postDataBase.getId(idPost)
    }catch(error: any){
      throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
    }
  }

  async postFriends({id, user}: PostFriendShip): Promise<void>{
    try{
      if(!id || !user){
         throw new InvalidDescription
      }
      const posts: PostFriendShip = {user, id}
    }
    const userDatabase = new PostDatabase()
    return userDatabase.postFriends(friendship)
  }catch(error: any){
    throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
  }
}
