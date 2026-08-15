require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const brewRoutes = require("./routes/brewRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ============================
// API
// ============================

app.get("/api", (req, res) => {
  res.json({
    message: "Coffee Brew API is running",
  });
});

app.use("/api/brews", brewRoutes);

// ============================
// SERVE REACT FRONTEND
// ============================

const frontendPath = path.join(__dirname, "../frontend/dist");

app.use(express.static(frontendPath));

// React fallback
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ============================
// START SERVER
// ============================

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});