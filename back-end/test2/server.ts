import express from "express";
import ConnectionPool from "./db";
// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", async (_, res) => {
  try {
    const allUsers = await ConnectionPool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
