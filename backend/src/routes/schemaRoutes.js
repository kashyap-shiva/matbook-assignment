const router = require("express").Router();
const { getFormSchema } = require("../controllers/schemaController");
router.get("/", getFormSchema);
module.exports = router;