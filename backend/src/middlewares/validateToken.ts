import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserPayload } from "../types";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = (req as any).cookies.notelyToken; //gets the notelyToken cookie that has the stored user data

  if (!token) {
    res.status(401).json({
      message: "Sorry no token found!",
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).notelyUser = decoded as UserPayload;
  } catch (error) {
    res.status(403).json({
      message: "Invalid token!",
    });
    return;
  }

  next();
};

export default validateToken;
