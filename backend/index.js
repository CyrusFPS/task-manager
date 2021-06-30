const express = require("express");
const app = express();
const cors = require("cors");
const port = 9003;
const DBFuncs = require("./DBFuncs");

app.use(cors());
app.use(express.json());

app.get("/api/tasks/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);
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
  const userId = parseInt(req.body.userId);
  const result = await DBFuncs.addTask(task, userId);
});

app.patch("/api/tasks/:id/:userId", async (req, res) => {
  const id = parseInt(req.params.id);
  const userId = parseInt(req.params.userId);
  const result = await DBFuncs.changeTaskStatus(id, userId);
  if (result === "User not found") return res.sendStatus(500);
  if (result === "Task updated") return res.sendStatus(200);
});

app.delete("/api/tasks/:id/:userId", async (req, res) => {
  const id = parseInt(req.params.id);
  const userId = parseInt(req.params.userId);
  console.log(userId, id);
  const result = await DBFuncs.deleteTask(id, userId);
  if (result === "User not found") return res.sendStatus(500);
  if (result === "Task not found") return res.sendStatus(500);
  return res.json(result);
});

app.listen(port, () => {
  console.log(`NODE SERVER LISTENING ON PORT ${port}`);
});
