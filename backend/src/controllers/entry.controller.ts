import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const myClient = new PrismaClient();

// function to create an entry
export const createEntry = async (req: Request, res: Response) => {
  try {
    const { title, synopsis, content, htmlContent } = req.body;
    const { id, firstName } = (req as any).notelyUser;

    if (!id) {
      return res.status(401).json({
        message: "Ensure You are logged in! Then continue the adventure",
      });
    }

    await myClient.entry.create({
      data: {
        userId: id,
        title,
        synopsis,
        content,
        htmlContent,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Entry created! Your thoughts are now part of Notely history.",
      entry: `${title} by ${firstName}`,
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

// function to get all user entries
export const getUserEntries = async (req: Request, res: Response) => {
  try {
    const id = (req as any).notelyUser.id;

    const userEntries = await myClient.entry.findMany({
      where: {
        isDeleted: false,
        userId: id,
      },
      include: {
        author: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: {
        lastUpdated: "desc",
      },
    });
    res.status(200).json({
      status: "retrieved",
      message: `Pulled ${userEntries.length} notes from your creative vault.`,
      entries: userEntries,
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

// function to retrieve a specific entry
export const getSpecificEntry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const retrievedEntry = await myClient.entry.findFirst({
      where: {
        id,
      },
    });
    res.status(200).json({
      status: "success",
      message:
        "Entry retrieved. Looks like your thoughts made it out of the archive.",
      entry: retrievedEntry,
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

// function to mark entry as deleted
export const addEntryToTrash = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const trashedEntry = await myClient.entry.update({
      where: {
        id,
      },
      data: {
        isDeleted: true,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Entry successfully marked as deleted.",
      entry: trashedEntry.title,
    });
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

//function to retrieve all the trashed entries
export const fetchTrashedEntries = async (_req: Request, res: Response) => {
  try {
    const trashedEntries = await myClient.entry.findMany({
      where: {
        isDeleted: true,
      },
      orderBy: {
        lastUpdated: "desc",
      },
    });
    res.status(200).json({
      status: "retrieved",
      message: `${trashedEntries.length} deleted entries recovered.`,
      trash_status: trashedEntries.length > 0 ? "Occupied" : "Empty bin 🗑️",
      trashed_entries: trashedEntries.length > 0 && trashedEntries,
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

// function to restore a specific deleted entry
export const restoreEntry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const restoredEntry = await myClient.entry.update({
      where: {
        id,
        isDeleted: true,
      },
      data: {
        isDeleted: false,
      },
    });

    res.status(200).json({
      status: "restored",
      message: "Entry restored successfully.",
      entry: restoredEntry.title,
    });
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

// function to update an entry's details
export const updateEntry = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, synopsis, content, htmlContent } = req.body;

    const updatedEntry = await myClient.entry.update({
      where: {
        id,
      },
      data: {
        title,
        synopsis,
        content,
        htmlContent,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Entry updated successfully",
      entry: updatedEntry.title,
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
