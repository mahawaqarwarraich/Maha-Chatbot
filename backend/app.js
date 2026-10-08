const express = require("express");
const chatRoutes = require("./src/routes/chatRoutes");

const app = express();
const PORT = 5000;

app.get("/api/test", (req, res) => {
  res.json({ message: "hello" });
});

app.use("/api", chatRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
