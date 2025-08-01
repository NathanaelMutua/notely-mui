import { Router } from "express";
import validateToken from "../middlewares/validateToken";
import { updateAvatar, updateUserInfo } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.patch("/info", validateToken, updateUserInfo);
userRouter.post("/avatar", validateToken, updateAvatar);
