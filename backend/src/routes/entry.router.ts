import { Router } from "express";
import {
  addEntryToTrash,
  createEntry,
  fetchTrashedEntries,
  getSpecificEntry,
  getUserEntries,
  restoreEntry,
  updateEntry,
} from "../controllers/entry.controller";
import validateToken from "../middlewares/validateToken";
import authRouter from "./auth.router";

const entryRouter = Router();

entryRouter.post("/", validateToken, createEntry);
entryRouter.get("/", validateToken, getUserEntries);
entryRouter.get("/:id", validateToken, getSpecificEntry);
entryRouter.delete("/:id", validateToken, addEntryToTrash);
entryRouter.get("/trash", validateToken, fetchTrashedEntries);
entryRouter.patch("/restore/:id", validateToken, restoreEntry);
entryRouter.patch("/:id", validateToken, updateEntry);

export default entryRouter;
