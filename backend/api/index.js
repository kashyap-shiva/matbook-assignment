const express = require("express");
const cors = require("cors");

const schemaRoutes = require("../src/routes/schemaRoutes");
const submissionRoutes = require("../src/routes/submissionRoutes");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/form-schema", schemaRoutes);
app.use("/api/submissions", submissionRoutes);

// Health check (test this first)
app.get("/", (req, res) => {
  res.json({ message: "Matbook Assignment Backend is live!" });
});

// NO app.listen() here – Vercel handles it
module.exports = app;  // This is REQUIRED for Vercel