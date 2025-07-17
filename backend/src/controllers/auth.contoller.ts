import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const myClient = new PrismaClient();

// Register user implementation
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
    // console.log(e);
    res.status(500).json({
      error: true,
      message:
        "Something broke. Probably that spaghetti code we swore we fixed.",
      recovery: "Try again, or send a motivational quote to the dev team.",
    });
  }
};

// Sign in User implementation
export const signinUser = async (req: Request, res: Response) => {
  try {
    const { userIdentifier, password } = req.body;

    const matchedUser = await myClient.user.findFirst({
      where: {
        OR: [{ username: userIdentifier }, { email: userIdentifier }],
      },
    });

    if (!matchedUser) {
      return res.status(400).json({
        status: "error",
        message: "Incorrect Credentials. Try again or summon support",
      });
    }

    const matchedPassword = await bcrypt.compare(
      password,
      matchedUser.password
    );

    if (!matchedPassword) {
      return res.status(400).json({
        status: "error",
        message: "Incorrect Credentials. Try again or summon support",
      });
    }

    const { password: loginPassword, dateJoined, ...userDetails } = matchedUser;

    const token = jwt.sign(userDetails, process.env.JWT_SECRET!);
    res.cookie("Notely-User", token).json({
      message: "SignIn successful. Let's get Notely!",
    });
  } catch (e) {
    // console.log(e)
    res.status(500).json({
      status: "error",
      message:
        "Something broke. Probably that spaghetti code we swore we fixed.",
      recovery: "Try again, or send a motivational quote to the dev team.",
    });
  }
};
