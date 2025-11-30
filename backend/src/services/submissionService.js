const formSchema = require("../config/formSchema");
const generateId = require("../utils/generateId");
const store = require("../models/submissionModel");

exports.create = (payload) => {
  const id = generateId();
  const createdAt = new Date().toISOString();
  const record = { id, createdAt, ...payload };
  store.save(record);
  return { id, createdAt };
};

exports.list = (page, limit, sortOrder) => {
  let data = store.getAll();

  data = data.sort((a, b) =>
    sortOrder === "asc"
      ? new Date(a.createdAt) - new Date(b.createdAt)
      : new Date(b.createdAt) - new Date(a.createdAt)
  );

  const total = data.length;
  const start = (page - 1) * limit;
  const paginated = data.slice(start, start + limit);

  return { total, totalPages: Math.ceil(total / limit), records: paginated };
};
