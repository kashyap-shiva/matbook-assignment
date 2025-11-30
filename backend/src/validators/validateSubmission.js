const formSchema = require("../config/formSchema");

module.exports = (req, res, next) => {
  const body = req.body;
  const errors = {};

  formSchema.fields.forEach((f) => {
    const value = body[f.name];

    // minLength / maxLength
    if (f.validations?.minLength && value.length < f.validations.minLength)
      errors[f.name] = `${f.label} must be at least ${f.validations.minLength} characters`;

    if (f.validations?.maxLength && value.length > f.validations.maxLength)
      errors[f.name] = `${f.label} must be under ${f.validations.maxLength} characters`;

    // regex
    if (f.validations?.regex && !new RegExp(f.validations.regex).test(value))
      errors[f.name] = `${f.label} format is invalid`;

    // number min/max
    if (f.type === "number") {
      if (f.validations?.min && value < f.validations.min)
        errors[f.name] = `${f.label} must be ≥ ${f.validations.min}`;
      if (f.validations?.max && value > f.validations.max)
        errors[f.name] = `${f.label} must be ≤ ${f.validations.max}`;
    }

    // multi-select min/max
    if (f.type === "multi-select" && Array.isArray(value)) {
      if (f.validations?.minSelected && value.length < f.validations.minSelected)
        errors[f.name] = `${f.label} requires at least ${f.validations.minSelected} choices`;
      if (f.validations?.maxSelected && value.length > f.validations.maxSelected)
        errors[f.name] = `${f.label} allows max ${f.validations.maxSelected} choices`;
    }

    // minDate
    if (f.validations?.minDate && f.type === "date" && value < f.validations.minDate)
      errors[f.name] = `${f.label} cannot be earlier than ${f.validations.minDate}`;
  });

  if (Object.keys(errors).length > 0)
    return res.status(400).json({ success: false, errors });

  next();
};
