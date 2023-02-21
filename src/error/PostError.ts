import { CustomError } from "./CustomError";

export class InvalidDescription extends CustomError {
    constructor(){
        super(422, "A descrição deve ter pelo menos 5 caracteres.")
    }
}

export class InvalidType extends CustomError {
    constructor(){
        super(422, "O tipo deve ser 'normal' ou 'evento'.")
    }
}

export class InvalidDataPost extends CustomError{
    constructor(){
        super(422, "Post invalido.")
    }
}

export class InvalidIdPost extends CustomError{
    constructor(){
        super(422, "Informar o id")
    }
}