import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cloudinary from "../config/cloudinary";

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

// Upload avatar image
export const uploadAvatar = async (req: Request, res: Response) => {
  try {
    const id = (req as any).notelyUser.id;
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({
        status: "fail",
        message: "Image URL is required",
      });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(imageUrl, {
      folder: "notely-avatars",
      width: 300,
      height: 300,
      crop: "fill",
      quality: "auto",
    });

    // database update
    await myClient.user.update({
      where: { id },
      data: {
        avatar: result.secure_url,
      },
    });

    res.status(200).json({
      success: true,
      message: "Avatar uploaded successfully",
      avatarUrl: result.secure_url,
    });
  } catch (error) {
    console.error("Avatar upload error:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to upload avatar",
    });
  }
};

// Remove avatar
export const removeAvatar = async (req: Request, res: Response) => {
  try {
    const id = (req as any).notelyUser.id;

    await myClient.user.update({
      where: { id },
      data: {
        avatar: null,
      },
    });

    res.status(200).json({
      success: true,
      message: "Avatar removed successfully",
    });
  } catch (error) {
    console.error("Avatar removal error:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to remove avatar",
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
