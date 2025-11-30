📌 MatBook Dynamic Form System — Full-Stack Assignment
✅ Milestone Completion Status
Milestone	Status
Backend — Dynamic form schema API	✔ Completed
Backend — Form submission API with validation	✔ Completed
Backend — Paginated + sortable submissions API	✔ Completed
Frontend — Dynamic form page (Dynamic rendering + inline validation)	✔ Completed
Frontend — Submissions table (Pagination + sorting + API integration)	✔ Completed

🧰 Tech Stack Used
🔹 Backend

Node.js

Express.js

CORS

UUID

Validation middleware

In-memory / JSON persistence

🔹 Frontend

React 19

TypeScript

TanStack Query

TanStack Form

TanStack Table

Axios

Tailwind CSS

Vite

🚀 Setup & Run Instructions
🔧 Prerequisites
Requirement	Version
Node.js	v18+
npm	latest
🔥 Backend Setup
cd backend
npm install
npm start


Backend runs at:

http://localhost:5000

API Endpoints
Method	Endpoint	Description
GET	/api/form-schema	Returns the Employee Onboarding form schema
POST	/api/submissions	Validates + creates a form submission
GET	/api/submissions?page=&limit=&sortOrder=	Returns paginated, sortable submissions list
🎨 Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🧪 Sample POST body for /api/submissions
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "age": 26,
  "jobRole": "Frontend Developer",
  "technicalSkills": ["React", "Node.js"],
  "joiningDate": "2025-12-01",
  "selfIntroduction": "Hi, I am interested in the role.",
  "relocationRequired": true
}

🖥 Features Delivered
✔ Backend

Validations handled fully based on schema rules:

Required

minLength / maxLength

regex

min / max (numbers)

minDate

minSelected / maxSelected

Standardized success & error responses

Pagination + sorting on createdAt

Proper status codes and error handling

✔ Frontend

Dynamic form renderer — no hardcoded fields

Loading and error UI states

Inline validation messages

Disabled Submit button while submitting

Auto reset form after success

Navigation to submissions page after creation

Submissions table with:

Pagination

Sorting

Total pages & count

View formatted dates

🧩 Assumptions

Form schema is static and provided by backend (not editable by user)

No authentication required per assignment

In-memory persistence meets assignment expectation (DB was optional)

Backend and frontend run locally but can be deployed independently

🐞 Known Issues
Issue	Impact
Data resets on backend restart (due to in-memory storage)	Low
Some UI elements can be further polished	Low
📂 Folder Structure
project-root/
 ├── backend/
 │    ├── src/
 │    ├── package.json
 │    └── server.js
 ├── frontend/
 │    ├── src/
 │    ├── package.json
 │    └── vite.config.ts
 └── README.md

📍 Final Notes

This project demonstrates:

Schema-driven UI

Shared backend + frontend validation logic

Scalable REST architecture

Modern TanStack state management

The solution fulfills all core assignment requirements end-to-end.