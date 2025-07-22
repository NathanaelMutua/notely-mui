import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const myClient = new PrismaClient();

const validatePasswordChangeMatch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password } = req.body;
  const id = (req as any).notelyUser.id;

  const currentNotelyUser = await myClient.user.findFirst({
    where: {
      id,
    },
  });

  if (!currentNotelyUser || !currentNotelyUser.password) {
    res.status(400).json({
      status: "Invalid user",
      message: "User record incomplete or missing",
      hint: "Ensure you're logged in with an active account",
    });
    return;
  }

  const matchedPassword = await bcrypt.compare(
    password,
    currentNotelyUser.password
  );

  if (!matchedPassword) {
    return res.status(400).json({
      status: "fail",
      message: "Incorrect password. The vault remains sealed.",
      currentNotelyUser,
    });
  }

  next();
};

export default validatePasswordChangeMatch;
