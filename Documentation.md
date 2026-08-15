# Coffee Brew Log

## 1. Project Description

Coffee Brew Log is a full-stack web application for a small micro-roastery to record and manage coffee brews.

The application allows users to:

* Create and save a brew entry
* View saved brews
* Filter brews by brew method
* Edit and update existing brews
* Delete brews
* View the total number of recorded brews

The project demonstrates full-stack development using React, Node.js/Express, Prisma ORM, and SQLite.

---

## 2. Technology Stack

### Frontend

* React
* Vite
* JavaScript
* Bootstrap
* CSS

### Backend

* Node.js
* Express
* CORS

### Database

* SQLite
* Prisma ORM

### Development Tools

* Git
* GitHub
* VS Code
* Postman

---

## 3. Project Structure

```text
full-stack-developer-bootcamp-Tidimalomotsepe/
│
├── backend/
│   ├── controllers/
│   │   └── brewController.js
│   ├── prisma/
│   │   ├── migrations/
│   │   │   └── 20260812230529_init/
│   │   │       └── migration.sql
│   │   └── schema.prisma
│   ├── routes/
│   │   └── brewRoutes.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── prisma.config.ts
│   ├── prismaClient.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BrewForm.jsx
│   │   │   └── BrewList.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── Documentation.md
├── deployment.md
└── .gitignore
```

---

## 4. Application Features

### Create a Brew

Users can create a brew by providing:

* Coffee/bean name
* Brew method
* Coffee dose in grams
* Water amount in grams
* Rating
* Tasting notes

The application validates the form before sending the data to the backend.

### Read Brews

The application retrieves saved brews from the backend API and displays them in a list.

The page title displays the number of saved brews.

For example:

```text
Brews: 5
```

### Filter Brews

The brew list can be filtered by brew method.

The filter allows users to select:

* All
* Aeropress
* Pour Over
* Other available brew methods

Selecting a method displays only brews made using that method.

### Edit a Brew

Each brew has an edit button.

Selecting the edit button loads the existing brew information into the form.

The user can modify the information and save the changes.

### Delete a Brew

Users can delete a brew from the edit form.

A confirmation prompt is displayed before the brew is deleted.

---

## 5. Frontend Validation

The frontend prevents incomplete or invalid forms from being submitted.

The following fields are required:

* Coffee/bean name
* Brew method
* Coffee grams
* Water grams
* Rating
* Tasting notes

The rating must be a whole number between 1 and 5.

Coffee and water amounts must be positive numbers.

---

## 6. Backend API

The frontend communicates with the backend using a JSON REST API.

### API Base Path

Local development:

```text
http://localhost:5000/api/brews
```

Production:

```text
https://coffee-brew-log-mxrn.onrender.com/api/brews
```

### Get All Brews

```text
GET /api/brews
```

Returns all saved brews.

### Create a Brew

```text
POST /api/brews
```

Creates a new brew record.

### Update a Brew

```text
PUT /api/brews/:id
```

Updates an existing brew.

### Delete a Brew

```text
DELETE /api/brews/:id
```

Deletes an existing brew.

---

## 7. Backend Validation

The backend validates incoming data before saving records to the database.

Required fields must be supplied.

Invalid requests return an appropriate HTTP status code and a JSON response containing an error message.

The backend also converts numeric values such as coffee grams, water grams, and rating into numbers before storing them.

---

## 8. Database

The application uses SQLite as its SQL database.

Prisma is used as the ORM for database access.

The Prisma schema is located at:

```text
backend/prisma/schema.prisma
```

Prisma configuration is located at:

```text
backend/prisma.config.ts
```

Database migrations are located at:

```text
backend/prisma/migrations/
```

The local SQLite database is excluded from version control.

The `Brew` table contains:

* `id`
* `coffeeName`
* `method`
* `coffeeGrams`
* `waterGrams`
* `rating`
* `tastingNotes`
* `createdAt`

---

## 9. Environment Variables

Environment variables are used for configuration where required.

The backend provides an environment variable template:

```text
backend/.env.example
```

The actual `.env` file is not committed to Git.

Example local configuration:

```text
DATABASE_URL="file:./dev.db"
PORT=5000
```

Production environment configuration is managed by the hosting provider.

---

## 10. Installation

### Clone the Repository

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd full-stack-developer-bootcamp-Tidimalomotsepe
```

---

## 11. Backend Setup

Navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file using `.env.example` as a guide.

Generate the Prisma client:

```bash
npx prisma generate
```

For a local development database, apply the migrations with:

```bash
npx prisma migrate dev
```

Start the backend:

```bash
node server.js
```

The backend runs locally on:

```text
http://localhost:5000
```

The API endpoint is:

```text
http://localhost:5000/api/brews
```

---

## 12. Frontend Setup

Open a second terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Vite will provide the local frontend URL in the terminal.

The default development URL is:

```text
http://localhost:5173
```

---

## 13. Running the Application

The backend and frontend should run in separate terminals.

### Terminal 1 — Backend

```bash
cd backend
node server.js
```

### Terminal 2 — Frontend

```bash
cd frontend
npm run dev
```

Open the frontend URL displayed by Vite in a web browser.

---

## 14. Testing Checklist

Before committing or deploying the application, the following functionality was tested:

* [x] Backend starts successfully
* [x] Frontend starts successfully
* [x] Application loads successfully
* [x] A new brew can be created
* [x] A saved brew appears in the list
* [x] Total brew count updates
* [x] Brews can be filtered by method
* [x] An existing brew can be edited
* [x] An edited brew is saved correctly
* [x] A brew can be deleted
* [x] Blank form fields cannot be submitted
* [x] Invalid ratings are rejected
* [x] Invalid coffee amounts are rejected
* [x] Invalid water amounts are rejected
* [x] Frontend communicates successfully with the backend
* [x] Database records can be created
* [x] Database records can be retrieved
* [x] Database records can be updated
* [x] Database records can be deleted
* [x] Production API successfully connects to the SQLite database

---

## 15. Security Hygiene

The project does not hardcode secrets.

Environment variables are used for configuration where appropriate.

The following files and directories are excluded from version control:

```text
.env
.env.local
node_modules/
dev.db
.agents/
.windsurf/
.claude/
skills-lock.json
```

An environment variable template is provided:

```text
backend/.env.example
```

This allows another developer to configure the application without exposing private environment variables.

---

## 16. Git and Collaboration

Git is used for version control.

Changes should be committed using descriptive commit messages.

Examples:

```bash
git add backend
git commit -m "Add backend brew API"

git add frontend
git commit -m "Add React brew log interface"

git add Documentation.md deployment.md
git commit -m "Update project documentation and deployment notes"
```

Before committing, the repository should be checked with:

```bash
git status
```

Staged changes can be reviewed with:

```bash
git diff --cached
```

The Git history contains focused commits describing the features and fixes introduced during development.

---

## 17. Deployment

The backend is deployed using Render.

### Production Backend

```text
https://coffee-brew-log-mxrn.onrender.com
```

### Production API

```text
https://coffee-brew-log-mxrn.onrender.com/api/brews
```

The deployment process uses Prisma migrations to create and update the SQLite database.

Detailed deployment information and troubleshooting notes are documented separately in:

```text
deployment.md
```

---

## 18. Deployment Troubleshooting

During deployment, the application initially returned a database error because the `Brew` table did not exist in the database being used by the running backend.

The issue was investigated using the Render application logs.

The Prisma database path was corrected so that the migration process and the running Prisma client use the same SQLite database file.

The deployment was then configured to run the Prisma migration before starting the backend.

After redeployment, the Render logs confirmed that the migration was applied and the backend was running successfully.

The final deployment was tested by loading the production API and creating and retrieving brew records.

---

## 19. Author

Coffee Brew Log was developed as a full-stack development project demonstrating:

* React component development
* Responsive frontend design
* REST API development
* CRUD operations
* Form validation
* Database persistence
* Prisma ORM
* Frontend/backend communication
* Git version control
* Application deployment
* Deployment troubleshooting
