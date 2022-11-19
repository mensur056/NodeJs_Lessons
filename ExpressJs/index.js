const express = require("express");
const data = require("./data");
const server = express();
const port = 5000;
server.get("/", (req, res) => {
  res.send("Hello from Express");
});
server.get("/users", (req, res) => {
  res.status(200).json(data);
});
server.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const user = data.find((user) => user.id === parseInt(id));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("sdfsdfsdf");
  }
});

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
