import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import { createToDo } from "./types.js";
import { updateToDo } from "./types.js";
import { connectDB } from "./db.js";

const app = express();
configDotenv();
app.use(express.json());


app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createToDo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateToDo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
  }
});

app.get("/", (req, res) => {
  res.send("App is ok");
});

app.listen(process.env.PORT, async () => {
   await connectDB();

  console.log(`App is running at port ${process.env.PORT} `);
});
