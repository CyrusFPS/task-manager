const express = require("express");
const app = express();
const cors = require("cors");
const port = 9003;
const DBFuncs = require("./DBFuncs");

app.use(cors());
app.use(express.json());

app.get("/api/tasks/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);
  console.log(req.params);
  const result = await DBFuncs.getTasks(userId);
  if (result === "User not found") {
    return res.status(500).send("Error: could not find user");
  }
  res.status(200).json(result);
});

app.post("/api/auth/signup", async (req, res) => {
  const user = req.body;
  const result = await DBFuncs.signup(user);
  if (result === "User with email already exists")
    return res.status(400).send("User with email already exists");
  res.status(200).json(result);
});

app.post("/api/auth/login", async (req, res) => {
  const user = req.body;
  const result = await DBFuncs.login(user);
  if (result === "User not found")
    return res.status(400).send("Incorrect email or password");
  res.status(200).json(result);
});

app.post("/api/tasks", async (req, res) => {
  const task = req.body.task;
  const userId = req.body.userId;
  const result = await DBFuncs.addTask(task, userId);
  console.log(task);
});

app.patch("/api/tasks/:id", async (req, res) => {
  console.log(req.params);
  console.log("Patch request recieved");
});

app.listen(port, () => {
  console.log(`NODE SERVER LISTENING ON PORT ${port}`);
});
