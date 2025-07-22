import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserPayload } from "../types";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = (req as any).cookies.notelyToken; //gets the notelyToken cookie that has the stored user data

  if (!token) {
    res.status(401).json({
      status: "unauthorized",
      message:
        "No token found. Log in and get your token - your VIP pass to Notely HQ.",
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).notelyUser = decoded as UserPayload;
  } catch (error) {
    res.status(403).json({
      status: "forbidden",
      message: "Invalid token. Our productivity bouncer says 'nope.'",
      reason:
        "Token could be expired, malformed, or from an alternate dimension.",
    });
    return;
  }

  next();
};

export default validateToken;
