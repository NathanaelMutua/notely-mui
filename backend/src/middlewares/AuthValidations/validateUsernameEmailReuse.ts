import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const myClient = new PrismaClient();

const validateUsernameEmailReuse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email } = req.body;

  const reusedUsername = await myClient.user.findFirst({
    where: { username },
  });

  if (reusedUsername) {
    return res.status(400).json({
      message: "That username is already taken. It's popular - but so are you.",
      suggestion: "Try a remix",
    });
  }

  const reusedEmail = await myClient.user.findFirst({
    where: { email },
  });

  if (reusedEmail) {
    return res.status(400).json({
      message:
        "That Email is already taken. We have your productivity in our files",
      suggestion: "Do you want to SignIn instead?",
    });
  }

  next();
};

export default validateUsernameEmailReuse;
