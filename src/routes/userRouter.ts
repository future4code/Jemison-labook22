import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();
const userController = new UserController();
userRouter.post("/user", userController.create);
userRouter.post("/:userId/add", userController.users);
