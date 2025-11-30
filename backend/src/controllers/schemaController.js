const formSchema = require("../config/formSchema");

exports.getFormSchema = (req, res) => {
  res.status(200).json(formSchema);
};
