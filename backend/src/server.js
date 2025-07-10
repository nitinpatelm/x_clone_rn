import express from "express";

const app = express();

app.listen(8001, (err) => {
  console.log("server running on port 8001");
});
