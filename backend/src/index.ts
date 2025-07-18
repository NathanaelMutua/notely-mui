import express, { Express } from "express";
import authRouter from "./routes/auth.router";
import dotenv from "dotenv";
import CookieParser from "cookie-parser";

const app: Express = express();
dotenv.config();
app.use(express.json());
app.use(CookieParser());

app.get("/", (_req, res) => {
  res.send("<h1 style='text-align:center;' >Notely API</h1>");
});

app.use("/api/auth", authRouter);

const port = process.env.PORT || 7700;

app.listen(port, () => {
  console.log(`Notely is listening on port ${port}`);
});
