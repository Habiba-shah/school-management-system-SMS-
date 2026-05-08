 School Management System (SMS)

School Management System is a web-based platform designed to simplify and optimize school operations. It provides an efficient way to manage student records, attendance, and academic workflows while improving user experience through better UI/UX design and system performance.

---

 Features

| Feature                     | Description                                             |
| --------------------------- | ------------------------------------------------------- |
| 🧑‍🎓 Student Records       | Manage student data efficiently with secure storage     |
| 🗓️ Attendance Module       | Mark, submit, and track attendance easily               |
| ⚡ Simplified Workflow       | Reduced steps for faster task completion                |
| 🎯 Dashboard Access         | Direct access to key features like attendance           |
| ✅ Confirmation System       | Instant feedback messages after actions                 |
| 🎨 UI/UX Improvements       | Clean, consistent, and user-friendly interface          |
| 🔁 Refactored Codebase      | Eliminated duplicate code & improved maintainability    |
| 🔐 Authentication           | Secure login with validation                            |
| 📊 Performance Optimization | Fast data retrieval and responsive UI                   |
| 🧪 Software Quality         | Reliable system with improved readability and structure |

---

 3-Tier Architecture

The system follows a 3-Tier Architecture** to ensure scalability and maintainability.

### Tier 1: Presentation Layer (Frontend)

* Technology: React + HTML + CSS + Tailwind + Bootstrap
* Responsibility: UI/UX design, dashboards, and user interaction
* Focus: Consistency, simplicity, and reduced cognitive load

### Tier 2: Application Layer (Backend)

* Technology: Node.js + Express
* Responsibility: Business logic, validation, and API handling
* Security: JWT authentication and input validation

### Tier 3: Data Layer (Database)

* Technology: MongoDB
* ODM: Mongoose
* Responsibility: Stores student records, attendance, and system data

```
┌────────────────────┐      HTTPS API      ┌──────────────────────┐
│   Frontend (React) │ ──────────────────► │   Backend (Node.js)  │
│  HTML/CSS/Tailwind │                     │     Express.js       │
└────────────────────┘                     └──────────┬───────────┘
                                                      │ Mongoose
                                                      ▼
                                         ┌──────────────────────┐
                                         │      MongoDB         │
                                         │    (Database)        │
                                         └──────────────────────┘
```

---

##  Key Improvements

###  Workflow Optimization

Before (Complex Flow):

* Multiple navigation steps
* Repeated class selection
* Switching between modules
* High cognitive effort

After (Simplified Flow):

* Direct attendance access from dashboard
* Reduced steps
* Faster interaction
* Clear confirmation messages

---

###  UI/UX Enhancements

* Consistent navigation bar across all pages
* Standardized button styles
* Clear labels and layout structure
* Immediate feedback after actions
* Improved visual hierarchy

---

###  Code Refactoring & Technical Debt Reduction

**Problems Identified (Code Smells):**

* Duplicate code (e.g., button styles repeated)
* Poor variable naming
* Large, hard-to-maintain functions

**Solutions Implemented:

* Created reusable CSS classes (`.btn`, `.btn-primary`, `.btn-secondary`)
* Improved variable naming for readability
* Modularized code for better maintainability

---

##  Software Quality & Metrics

###  Reliability

* Confirmation messages for actions (e.g., record added)
* Secure login validation
* Accurate database operations

###  Performance

* Fast data retrieval from MongoDB
* Quick dashboard and page load times
* Optimized frontend rendering

---

##  Tech Stack

### Frontend

* React.js
* HTML5 / CSS3
* Tailwind CSS
* Bootstrap
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js
* JWT Authentication

### Database

* MongoDB
* Mongoose

---

##  Local Development Setup

### Prerequisites

* Node.js v18+
* MongoDB
* Git

---

### 1. Clone Repository

```bash
git clone https://github.com/Habiba-shah/school-management-system-SMS-.git
cd school-management-system
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
```

Run server:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

---

##  Project Structure

```
school-management-system/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── styles/
│
└── README.md
```

---

##  Contributing

This project is developed for academic purposes.
Feel free to improve and contribute.

---

##  Future Improvements

* Mobile App 
* AI-based Analytics 
* Parent Portal 
* Advanced Reporting System 

---
