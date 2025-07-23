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
import validateNullEntryCreationInfo from "../middlewares/EntryValidations/validateEntryCreationInfo";
import validateEntryId from "../middlewares/EntryValidations/validateEntryId";

const entryRouter = Router();

entryRouter.post(
  "/",
  validateToken,
  validateNullEntryCreationInfo,
  createEntry
);
entryRouter.get("/", validateToken, getUserEntries);
entryRouter.get("/:id", validateToken, validateEntryId, getSpecificEntry);
entryRouter.delete("/:id", validateToken, validateEntryId, addEntryToTrash);
entryRouter.get("/trash", validateToken, validateEntryId, fetchTrashedEntries);
entryRouter.patch("/restore/:id", validateToken, validateEntryId, restoreEntry);
entryRouter.patch(
  "/:id",
  validateToken,
  validateNullEntryCreationInfo,
  updateEntry
);

export default entryRouter;
