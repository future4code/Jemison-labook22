import express from "express";
import { PostController } from "../controller/PostController";

export const postRouter = express.Router();
const postController = new PostController();
postRouter.post("/post", postController.create);

postRouter.post("/create", postController.create);

postRouter.get("/:id", postController.getById);
