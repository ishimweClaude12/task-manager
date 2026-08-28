require("dotenv").config();

const app = require("./src/app");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Task Manager API listening on port ${PORT}`);
});
