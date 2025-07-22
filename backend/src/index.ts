import express, { Express } from "express";
import authRouter from "./routes/auth.router";
import dotenv from "dotenv";
import CookieParser from "cookie-parser";
import cors from "cors";
import entryRouter from "./routes/entry.router";

const app: Express = express();
dotenv.config();
app.use(express.json());
app.use(CookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
    credentials: true, // Allow cookies to be sent
  })
);

app.get("/", (_req, res) => {
  res.send("<h1 style='text-align:center;' >Notely API</h1>");
});

app.use("/api/auth", authRouter);
app.use("/api/entry", entryRouter);

const port = process.env.PORT || 7700;

app.listen(port, () => {
  console.log(`Notely is listening on port ${port}`);
});
