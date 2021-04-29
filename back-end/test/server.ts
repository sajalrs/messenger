import express from "express";
// import pool from "./db";
// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(express.json());
app.get("/", (_, res) => {
  res.send("Hello World");
});

app.post("/user", async (_, __) => {
  console.log("Hi");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
