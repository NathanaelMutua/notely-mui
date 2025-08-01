import { Router } from "express";
import validateToken from "../middlewares/validateToken";
import {
  removeAvatar,
  updateUserInfo,
  uploadAvatar,
} from "../controllers/user.controller";

export const userRouter = Router();

userRouter.patch("/info", validateToken, updateUserInfo);
userRouter.post("/upload-avatar", validateToken, uploadAvatar); // Add this
userRouter.delete("/avatar", validateToken, removeAvatar); // Add this
