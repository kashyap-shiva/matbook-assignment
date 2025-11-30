const router = require("express").Router();
const validate = require("../middlewares/validateSubmission");
const { createSubmission, getSubmissions } = require("../controllers/submissionController");

router.post("/", validate, createSubmission);
router.get("/", getSubmissions);

module.exports = router;
