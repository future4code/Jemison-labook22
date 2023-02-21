enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export interface InsertPostDTO {
  id: string;
  photo: string;
  description: string;
  type: POST_TYPES;
  createdAt: Date;
  authorId: string;
}

export interface CreatePostDTO {
  photo: string;
  description: string;
  type: POST_TYPES;
  authorId: string;
}

export interface AuthenticationDataDTO {
  id: string;
}

export interface PostInputDTO {
  photo: string;
  description: string;
  type: POST_TYPES;
  token: string;
}
