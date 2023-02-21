import { FriendshipDatabase } from "./../data/FriendshipDatabase";
import { FriendshipDTO } from "../model/friendshipDTO";
import { CustomError } from "./../error/CustomError";
import { InformationError } from "../error/InformationError"

export class FriendshipBusiness {

  async friend({ user, friends }: FriendshipDTO): Promise<void> {
    try{

    if (!user || !friends) {
      throw new Error("Insira os dados corretamente.");
    }

    const friend: FriendshipDTO = ({ user, friends });

    const friendshipDatabase = new FriendshipDatabase();
    await friendshipDatabase.friend(friend);

  }catch(error: any) {
    throw new CustomError(
      error.statusCode || 400,
      error.message || error.sqlMessage
    );
  }
}

async deslike ({user, friendship}:FriendshipDTO): Promise<void>{
  try{
    if(!user && !friendship){
       
       throw new Error("Insira os dados corretamente.");
    }
    const deslike:FriendshipDTO = ({ user, friendship  })

    const deslikeDatabase = new FriendshipDatabase()

    await deslikeDatabase.deslike(deslike)
  }catch(error: any){
     throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
  }
 }
}