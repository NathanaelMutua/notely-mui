import { Router } from "express";
import {
  passCurrentUserDetails,
  signinUser,
  signoutUser,
  signupUser,
  updatePassword,
} from "../controllers/auth.contoller";
import validateNullRegistrationInfo from "../middlewares/AuthValidations/validateNullRegistrationInfo";
import validateUsernameEmailReuse from "../middlewares/AuthValidations/validateUsernameEmailReuse";
import validatePasswordStrength from "../middlewares/AuthValidations/validatePasswordStrength";
import validateLoginInfo from "../middlewares/AuthValidations/validateLoginInfo";
import validateToken from "../middlewares/validateToken";
import validatePasswordChangeInfo from "../middlewares/AuthValidations/validatePasswordChangeInfo";
import validatePasswordChangeMatch from "../middlewares/AuthValidations/validatePasswordChangeMatch";

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
authRouter.patch(
  "/password",
  validateToken,
  validatePasswordChangeInfo,
  validatePasswordChangeMatch,
  updatePassword
);
authRouter.get("/user/:id", validateToken, passCurrentUserDetails);

export default authRouter;
