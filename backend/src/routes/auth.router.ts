import { Router } from "express";
import { signupUser } from "../controllers/auth.contoller";
import validateNullRegistrationInfo from "../middlewares/validateNullRegistrationInfo";
import validateUsernameEmailReuse from "../middlewares/validateUsernameEmailReuse";
import validatePasswordStrength from "../middlewares/validatePasswordStrength";

const authRouter = Router();

authRouter.post(
  "/register",
  validateNullRegistrationInfo,
  validateUsernameEmailReuse,
  validatePasswordStrength,
  signupUser
);

export default authRouter;
