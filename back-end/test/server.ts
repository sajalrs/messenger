import express from "express";
import ConnectionPool from "./db";
// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const newUser = await ConnectionPool.query(
      "INSERT INTO users (first_name, last_name) VALUES ($1, $2) RETURNING *",
      [firstName, lastName]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
