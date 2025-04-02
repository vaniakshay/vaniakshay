const express = require("express");
const app = express();
const taskRouter = require("./routes/task");
app.use(express.json());
app.use("/", taskRouter);
// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
