import express from 'express';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (_, res) => {
  res.send('Hello World 2');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);