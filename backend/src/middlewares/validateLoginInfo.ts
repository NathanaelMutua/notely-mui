import { Request, Response, NextFunction } from "express";

const validateLoginInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userIdentifier, password } = req.body;

  if (!userIdentifier) {
    return res.status(400).json({
      status: "oops",
      message: "Something is missing. We need your identifier",
      suggestion: "Enter your email or username",
    });
  }

  if (!password) {
    return res.status(400).json({
      status: "oops",
      message:
        "Password required. We can't let you in without a secret handshake",
      suggestion: "Try recalling your password",
    });
  }

  next();
};

export default validateLoginInfo;
