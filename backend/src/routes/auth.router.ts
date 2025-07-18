import { Router } from "express";
import {
  signinUser,
  signoutUser,
  signupUser,
  updatePassword,
} from "../controllers/auth.contoller";
import validateNullRegistrationInfo from "../middlewares/validateNullRegistrationInfo";
import validateUsernameEmailReuse from "../middlewares/validateUsernameEmailReuse";
import validatePasswordStrength from "../middlewares/validatePasswordStrength";
import validateLoginInfo from "../middlewares/validateLoginInfo";
import validateToken from "../middlewares/validateToken";
import validatePasswordChangeInfo from "../middlewares/validatePasswordChangeInfo";
import validatePasswordChangeMatch from "../middlewares/validatePasswordChangeMatch";

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
authRouter.post(
  "/password",
  validateToken,
  validatePasswordChangeInfo,
  validatePasswordChangeMatch,
  updatePassword
);

export default authRouter;
