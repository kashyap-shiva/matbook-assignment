module.exports = {
  title: "Employee Onboarding",
  description: "Collect required details to onboard a new employee into the company.",
  fields: [
    { name: "fullName", label: "Full Name", type: "text", placeholder: "Enter full name", validations: { minLength: 3, maxLength: 50 } },
    { name: "email", label: "Email", type: "text", placeholder: "Enter email", validations: { regex: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$" } },
    { name: "age", label: "Age", type: "number", validations: { min: 18, max: 60 } },
    { name: "role", label: "Job Role", type: "select", options: ["Developer", "Designer", "Manager", "HR"] },
    { name: "skills", label: "Technical Skills", type: "multi-select", options: ["React", "Node.js", "Angular", "Java", "Python", "AWS"], validations: { minSelected: 1, maxSelected: 5 } },
    { name: "joiningDate", label: "Joining Date", type: "date", validations: { minDate: "2024-01-01" } },
    { name: "introduction", label: "Self Introduction", type: "textarea", validations: { minLength: 20, maxLength: 500 } },
    { name: "isRelocationRequired", label: "Relocation Required?", type: "switch" }
  ]
};
