import { Router } from "express";
import {
  signinUser,
  signoutUser,
  signupUser,
} from "../controllers/auth.contoller";
import validateNullRegistrationInfo from "../middlewares/validateNullRegistrationInfo";
import validateUsernameEmailReuse from "../middlewares/validateUsernameEmailReuse";
import validatePasswordStrength from "../middlewares/validatePasswordStrength";
import validateLoginInfo from "../middlewares/validateLoginInfo";

const authRouter = Router();

authRouter.post(
  "/register",
  validateNullRegistrationInfo,
  validateUsernameEmailReuse,
  validatePasswordStrength,
  signupUser
);
authRouter.post("/login", validateLoginInfo, signinUser);
authRouter.post("/logout", signoutUser);

export default authRouter;
