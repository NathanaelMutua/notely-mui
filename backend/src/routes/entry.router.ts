import { Router } from "express";
import {
  addEntryToTrash,
  createEntry,
  getSpecificEntry,
  getUserEntries,
} from "../controllers/entry.controller";
import validateToken from "../middlewares/validateToken";
import authRouter from "./auth.router";

const entryRouter = Router();

entryRouter.post("/", validateToken, createEntry);
entryRouter.get("/", validateToken, getUserEntries);
entryRouter.get("/:id", validateToken, getSpecificEntry);
entryRouter.delete("/:id", validateToken, addEntryToTrash);

export default entryRouter;
