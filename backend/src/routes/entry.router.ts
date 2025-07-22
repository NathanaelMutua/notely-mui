import { Router } from "express";
import { createEntry, getUserEntries } from "../controllers/entry.controller";
import validateToken from "../middlewares/validateToken";

const entryRouter = Router();

entryRouter.post("/", validateToken, createEntry);
entryRouter.get("/", validateToken, getUserEntries);

export default entryRouter;
