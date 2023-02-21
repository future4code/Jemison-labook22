import { BaseDatabase } from "./BaseDatabase";
import { FriendshipDTO } from "../model/friendshipDTO";
import { CustomError } from "./../error/CustomError";

export class FriendshipDatabase extends BaseDatabase {
  private static TABLE_FRIEND = "labook_friend";

  async friend({ user, friends }: FriendshipDTO): Promise<void> {
    try {
      await FriendshipDatabase.connection
        .insert({
          user,
          friends,
        })
        .into(FriendshipDatabase.TABLE_FRIEND);
    } catch (error: any) {
      throw new CustomError(
        error.statusCode || 400,
        error.message || error.sqlMessage
      );
    }
  }
   async deslike({ user, friends }: FriendshipDTO): Promise<void> {
    try {
         await FriendshipDatabase.connection
         .delete()
         .from(FriendshipDatabase.TABLE_FRIEND)
           .where("user", user)
    }catch (error: any) {
      throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
    }
  }
}