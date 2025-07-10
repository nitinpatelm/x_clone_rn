import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.get("/", (req, res) => {
  console.log("running");
  res.send("hello from server");
});

app.listen(ENV.PORT, (err) => {
  console.log("server running on port: ", ENV.PORT);
});
