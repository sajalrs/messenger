import express from "express";
require("dotenv/config");
// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (_, res) => {
  res.send(process.env.POSTGRES_USER);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
