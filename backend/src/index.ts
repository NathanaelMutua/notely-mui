import { PrismaClient } from "@prisma/client";
import express, { Express } from "express";
import authRouter from "./routes/auth.router";

const app: Express = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("<h1 style='text-align:center;' >Notely API</h1>");
});

app.use("/api/auth", authRouter);

const port = process.env.PORT || 7700;

app.listen(port, () => {
  console.log(`Notely is listening on port ${port}`);
});
