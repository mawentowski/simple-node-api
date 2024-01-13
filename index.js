const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, this is a simple Node.js API!");
});

app.post("/api/data", (req, res) => {
  const data = req.body;
  res.json({ message: "Data received successfully", data });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
