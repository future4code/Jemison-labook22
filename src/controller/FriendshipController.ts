import { Request, Response } from "express";
import { FriendshipBusiness } from "../business/FriendshipBusiness";
import { CustomError } from "../error/CustomError";

export class FriendshipController {
  async friend(req: Request, res: Response): Promise<void> {
    try {
      const frindshipBusiness = new FriendshipBusiness();
      await frindshipBusiness.friend({
        user: req.body.user,
        friends: req.body.friends,
      });

      res.status(200).send("Parabéns pela nova amizade!");
    } catch (error: any) {
      throw new CustomError(
        error.statusCode || 400,
        error.message || error.sqlMessage
      );
    }
  }
  async deslike(req: Request, res: Response): Promise<void>{
    try{

      const friendshipBusiness = new FriendshipBusiness()
      await friendshipBusiness.deslike({ user: req.body.user, friendship: req.body.friendship })

      res.status(200).send("Deslike")
    }catch(error: any){
      throw new CustomError(error.statusCode || 400, error.message || error.sqlMessage)
    }
  }
}
