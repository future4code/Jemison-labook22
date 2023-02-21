import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/CustomError";
import { AuthenticationDataDTO, CreatePostDTO, InsertPostDTO } from "./../model/postDTO";
import { PostFriends } from '../model/userDTO';

export class PostDatabase extends BaseDatabase {
  private static TABLE_POST = "labook_posts";
  private static TABLE_FRIEND = "labook_friend";

  async create({id, photo, description, type, createdAt, authorId}: InsertPostDTO): Promise<void> {
    try {
      await PostDatabase.connection
        .insert({
          id: post.id,
          photo: post.photo,
          description: post.description,
          type: post.type,
          created_at: post.createdAt,
          author_id: post.authorId,
        })
        .into(PostDatabase.TABLE_POST);
    } 
    async getPost(): Promise<CreatePostDTO>{
      return await PostDatabase.connection.select().from(PostDatabase.TABLE_POST)
    }

    async getId({id}: AuthenticationDataDTO): Promise<AuthenticationDataDTO[]>{
      return await PostDatabase.connection.select().from(PostDatabase.TABLE_POST).where("id", id)
    }

    async postFriends({id, user}: PostFriends): Promise<void[]> 
        try{
          const result = await PostDatabase.connection
            .select()
            .from(PostDatabase.TABLE_FRIEND)
            .innerJoin(PostDatabase.TABLE_POST)
            .on(PostDatabase.TABLE_FRIEND.user , PostDatabase.TABLE_POST.id)

            return result[0]
        }catch (error: any) {
          throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
        }
      }
    }
