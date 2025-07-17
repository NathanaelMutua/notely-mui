import { PrismaClient } from "@prisma/client";
import express, { Express, json, Request, Response } from "express";
import bcrypt from "bcryptjs";

const app: Express = express();
const myClient = new PrismaClient();
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("<h1 style='text-align:center;' >Notely API</h1>");
});

app.post("/api/auth/register", async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await myClient.user.create({
      data: {
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({
      message: "Account created! Fresh Notebook delivered 📓.",
      newUser,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: true,
      message:
        "Something broke. Probably that spaghetti code we swore we fixed.",
      recovery: "Try again, or send a motivational quote to the dev team.",
    });
  }
});

const port = process.env.PORT || 7700;

app.listen(port, () => {
  console.log(`Notely is listening on port ${port}`);
});
