import { CustomError } from "./CustomError";

export class FriendsIdError extends CustomError {
    constructor() {
        super(400, "IDs de usuários não fornecidos.")
    }
}

export class InvalidEmail extends CustomError {
    constructor(){
        super(400, "E-mail inválido.")
    }
}

export class InvalidPassword extends CustomError {
    constructor(){
        super(400, "Senha inválida.")
    }
}

export class InvalidDataUser extends CustomError{
    constructor(){
        super(400, "Informação inválida!")
    }
}

export class InvalidName extends CustomError {
    constructor(){
        super(400, "Nome inválido. Deve ter pelo menos 3 caracteres.")
    }
}

export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "Usuário não encontrado.")
    }
}