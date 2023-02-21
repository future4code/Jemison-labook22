export interface PostFriends {
    id : string,
    user : string
}

export interface InsertUserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface UserInputDTO {
  name: string;
  email: string;
  password: string;
}
