import { CustomError } from "./CustomError";

export class InvalidIdFriend extends CustomError{
    constructor(){
        super(400, "Falta passar o id.")
    }
}


