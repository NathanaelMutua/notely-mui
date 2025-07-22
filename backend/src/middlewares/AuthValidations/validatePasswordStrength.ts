import { Request, Response, NextFunction } from "express";
import zxcvbn from "zxcvbn";

const validatePasswordStrength = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { password } = req.body;

  const result = zxcvbn(password);

  if (password.length < 5) {
    res.status(400).json({
      message:
        "Password must be at least 6 characters. We value your security.",
    });
    return;
  }

  if (result.score < 3) {
    res.status(400).json({
      message: `Weak Password! ${result.feedback.suggestions[0]}.`,
    });
    return;
  }
  next();
};

export default validatePasswordStrength;
