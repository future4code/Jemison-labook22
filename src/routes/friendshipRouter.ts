import express from "express";
import { FriendshipController } from "./../controller/FriendshipController";

export const friendshipRouter = express.Router();

const friendshipController = new FriendshipController();

friendshipRouter.post("/friendship", friendshipController.friend);
friendshipRouter.post("/deslike", friendshipController.deslike);