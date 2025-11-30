const express = require("express");
const cors = require("cors");

const schemaRoutes = require("../src/routes/schemaRoutes");
const submissionRoutes = require("../src/routes/submissionRoutes");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use("/api/form-schema", schemaRoutes);
app.use("/api/submissions", submissionRoutes);

// Optional: Add a health check
app.get("/", (req, res) => {
  res.json({ message: "Matbook Assignment Backend is running!" });
});

// This is what Vercel needs
module.exports = app;