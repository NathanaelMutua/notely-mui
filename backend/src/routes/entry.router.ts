import { Router } from "express";
import {
  addEntryToTrash,
  createEntry,
  fetchTrashedEntries,
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
entryRouter.get("/trash", validateToken, fetchTrashedEntries);

export default entryRouter;
