const express = require("express");
const tasksRouter = require("./routes/tasks");

const app = express();

app.use(express.json());

// Home route should show something

app.get("/", (req, res) => {
  // Send a simple html response for the home route
  res.send(
    "<h1>Welcome to the Task Manager API</h1><p>Use the /tasks endpoint to manage your tasks.</p>",
  );
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/tasks", tasksRouter);

module.exports = app;
