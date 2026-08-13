require("dotenv").config();

const express = require("express");
const cors = require("cors");

const brewRoutes = require("./routes/brewRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Coffee Brew API is running",
  });
});

app.use("/api/brews", brewRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});