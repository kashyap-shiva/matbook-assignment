const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const schemaRoutes = require("./src/routes/schemaRoutes");
const submissionRoutes = require("./src/routes/submissionRoutes");

const app = express();
const cors = require("cors");
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/form-schema", schemaRoutes);
app.use("/api/submissions", submissionRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
