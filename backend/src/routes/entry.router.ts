import { Router } from "express";
import {
  createEntry,
  getSpecificEntry,
  getUserEntries,
} from "../controllers/entry.controller";
import validateToken from "../middlewares/validateToken";

const entryRouter = Router();

entryRouter.post("/", validateToken, createEntry);
entryRouter.get("/", validateToken, getUserEntries);
entryRouter.get("/:id", validateToken, getSpecificEntry);

export default entryRouter;
