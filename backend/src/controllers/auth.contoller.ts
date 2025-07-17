import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

const myClient = new PrismaClient();

export const signupUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await myClient.user.create({
      data: {
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({
      message: "Account created!",
      welcome: `Fresh Notebook delivered to ${
        newUser.firstName + " " + newUser.lastName
      } 📓`,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: true,
      message:
        "Something broke. Probably that spaghetti code we swore we fixed.",
      recovery: "Try again, or send a motivational quote to the dev team.",
    });
  }
};
