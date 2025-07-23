import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const myClient = new PrismaClient();

const validateEntryId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const validatedEntry = await myClient.entry.findFirst({ where: { id } });

  if (!validatedEntry) {
    return res.status(401).json({
      status: "not-found",
      message: "Sorry the entry your looking for doesn't exist",
    });
  }

  next();
};

export default validateEntryId;
