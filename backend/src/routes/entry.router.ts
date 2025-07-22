import { Router } from "express";
import { createEntry } from "../controllers/entry.controller";
import validateToken from "../middlewares/validateToken";

const entryRouter = Router();

entryRouter.post("/", validateToken, createEntry);

export default entryRouter;
