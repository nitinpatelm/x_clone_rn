import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
const app = express();
import userRoutes from "./routes/user.routes.js";
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());
app.get("/", (req, res) => {
  console.log("running");
  res.send("hello from server");
});
app.use("/api/users", userRoutes);
const startServer = async () => {
  try {
    await connectDB();

    app.listen(ENV.PORT, (err) => {
      console.log("server running on port: ", ENV.PORT);
    });
  } catch (error) {
    console.log("Failed to start server", error.message);
    process.exit(1);
  }
};

startServer();
