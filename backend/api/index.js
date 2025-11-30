const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const schemaRoutes = require("../src/routes/schemaRoutes");
const submissionRoutes = require("../src/routes/submissionRoutes");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/form-schema", schemaRoutes);
app.use("/api/submissions", submissionRoutes);

module.exports.handler = serverless(app);
