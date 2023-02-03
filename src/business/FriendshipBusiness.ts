import { FriendshipDatabase } from "./../data/FriendshipDatabase";
import { FriendshipDTO } from "../model/friendshipDTO";
import { CustomError } from "./../error/CustomError";

export class FriendshipBusiness {
  async friend({ user, friends }: FriendshipDTO): Promise<void> {
    if (!user || !friends) {
      throw new Error("Insira os dados corretamente.");
    }

    const friend: FriendshipDTO = {
      user,
      friends,
    };

    const friendshipDatabase = new FriendshipDatabase();
    await friendshipDatabase.friend(friend);
  }
  catch(error: any) {
    throw new CustomError(
      error.statusCode || 400,
      error.message || error.sqlMessage
    );
  }
}
