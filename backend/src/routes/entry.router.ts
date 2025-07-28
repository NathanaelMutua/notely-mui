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
import validateNullEntryCreationInfo from "../middlewares/EntryValidations/validateEntryCreationInfo";
import validateEntryId from "../middlewares/EntryValidations/validateEntryId";
import markdownToHtml from "../middlewares/markdownToHtml";

const entryRouter = Router();

entryRouter.post(
  "/",
  validateToken,
  validateNullEntryCreationInfo,
  markdownToHtml,
  createEntry
);
entryRouter.get("/", validateToken, getUserEntries);
entryRouter.get("/trash", validateToken, fetchTrashedEntries);
entryRouter.patch("/restore/:id", validateToken, validateEntryId, restoreEntry);
entryRouter.get("/:id", validateToken, validateEntryId, getSpecificEntry);
entryRouter.delete("/:id", validateToken, validateEntryId, addEntryToTrash);
entryRouter.patch(
  "/:id",
  validateToken,
  validateEntryId,
  validateNullEntryCreationInfo,
  updateEntry
);

export default entryRouter;
