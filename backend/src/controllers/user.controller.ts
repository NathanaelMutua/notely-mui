import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const myClient = new PrismaClient();

// update user information
export const updateUserInfo = async (req: Request, res: Response) => {
  try {
    const id = (req as any).notelyUser.id;

    const { firstName, lastName, username } = req.body;

    if (!firstName || !lastName || !username) {
      return res.status(400).json({
        status: "fail",
        message: "First and last name, together with username are required",
      });
    }

    await myClient.user.update({
      where: {
        id,
      },
      data: {
        firstName,
        lastName,
        username,
      },
    });

    res
      .status(200)
      .json({ success: true, message: `Profile updated for user ID ${id}` });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "error",
      message:
        "Something broke. Probably that spaghetti code we swore we fixed.",
      recovery: "Try again, or send a motivational quote to the dev team.",
    });
  }
};

// update profile image
export const updateAvatar = async (req: Request, res: Response) => {
  try {
    const id = (req as any).notelyUser.id;
    const { avatarURL } = req.body;

    await myClient.user.update({
      where: {
        id,
      },
      data: {
        avatar: avatarURL,
      },
    });
    res.status(200).json({
      success: true,
      message: `Avatar updated for user ID ${id}`,
    });
  } catch (e) {
    // console.log(e);
    res.status(500).json({
      status: "error",
      message:
        "Something broke. Probably that spaghetti code we swore we fixed.",
      recovery: "Try again, or send a motivational quote to the dev team.",
    });
  }
};

// Delete account
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = (res as any).notelyUser.id;

    const deletedUser = await myClient.user.update({
      where: { id },
      data: { isDeleted: true },
    });

    res.status(200).json({
      message: `Account deleted successfully, see you ${deletedUser.firstName}`,
    });
  } catch (e) {
    // console.log(e);
    res.status(500).json({
      status: "error",
      message:
        "Something broke. Probably that spaghetti code we swore we fixed.",
      recovery: "Try again, or send a motivational quote to the dev team.",
    });
  }
};
