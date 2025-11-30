const service = require("../services/submissionService");

exports.createSubmission = (req, res) => {
  const { id, createdAt } = service.create(req.body);
  res.status(201).json({ success: true, id, createdAt });
};

exports.getSubmissions = (req, res) => {
  let { page = 1, limit = 10, sortOrder = "desc" } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);

  const result = service.list(page, limit, sortOrder);
  res.status(200).json({ success: true, ...result });
};
