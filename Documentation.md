# Coffee Brew Log

## 1. Project Description

Coffee Brew Log is a full-stack web application for a small micro-roastery to record and manage coffee brews.

The application allows users to:

- Create and save a brew entry
- View saved brews
- Filter brews by brew method
- Edit and update existing brews
- Delete brews
- View the total number of recorded brews

The project demonstrates full-stack development using a React frontend, Node.js/Express backend, Prisma ORM, and SQLite database.

---

## 2. Technology Stack

### Frontend

- React
- Vite
- JavaScript
- Bootstrap
- CSS

### Backend

- Node.js
- Express
- CORS

### Database

- SQLite
- Prisma ORM

### Development Tools

- Git
- GitHub
- VS Code
- Postman

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
│   │   └── schema.prisma
│   ├── routes/
│   │   └── brewRoutes.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
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
4. Application Features
Create a Brew

Users can create a brew by providing:

Coffee/bean name
Brew method
Coffee dose in grams
Water amount in grams
Rating
Tasting notes

The application validates the form before sending the data to the backend.

Read Brews

The application retrieves saved brews from the backend API and displays them in a list.

The page title displays the number of saved brews using:

Brews: {brewCount}

For example:

Brews: 5
Filter Brews

The brew list can be filtered by brew method.

The filter allows the user to select:

All
Aeropress
Pour Over
Other available brew methods

Selecting a method displays only brews made using that method.

Edit a Brew

Each brew has an edit button.

Selecting the edit button loads the existing brew information into the form.

The user can modify the information and save the changes.

Delete a Brew

Users can delete a brew from the edit form.

A confirmation prompt is displayed before the brew is deleted.

5. Frontend Validation

The frontend prevents incomplete forms from being submitted.

The following fields are required:

Coffee/bean name
Brew method
Coffee grams
Water grams
Rating
Tasting notes

The rating must be a whole number between 1 and 5.

Coffee and water amounts must be positive numbers.

6. Backend API

The frontend communicates with the backend using a JSON REST API.

The API base path is:

/api/brews
Get all brews
GET /api/brews

Returns all saved brews.

Create a brew
POST /api/brews

Creates a new brew record.

Update a brew
PUT /api/brews/:id

Updates an existing brew.

Delete a brew
DELETE /api/brews/:id

Deletes an existing brew.

7. Backend Validation

The backend validates incoming data before saving records to the database.

Required fields must be supplied.

Invalid requests return an appropriate HTTP status code and a JSON response containing an error message.

8. Database

The application uses SQLite as its SQL database.

Prisma is used as the ORM for database access.

The Prisma schema is located at:

backend/prisma/schema.prisma

Database migrations are located at:

backend/prisma/migrations/

The local SQLite database is excluded from version control.

9. Environment Variables

Environment variables are used for configuration where required.

The backend provides an environment variable template:

backend/.env.example

The actual .env file is not committed to Git.

Example local configuration:

DATABASE_URL="file:./dev.db"
PORT=5000
10. Installation
Clone the Repository
git clone <repository-url>

Navigate into the project:

cd full-stack-developer-bootcamp-Tidimalomotsepe
11. Backend Setup

Navigate to the backend:

cd backend

Install dependencies:

npm install

Create a .env file using .env.example as a guide.

Generate the Prisma client:

npx prisma generate

Apply the database migrations:

npx prisma migrate deploy

Start the backend:

node server.js

The backend runs locally on:

http://localhost:5000

The API endpoint is:

http://localhost:5000/api/brews
12. Frontend Setup

Open a second terminal and navigate to the frontend:

cd frontend

Install dependencies:

npm install

Start the Vite development server:

npm run dev

Vite will provide the local frontend URL in the terminal.

The default development URL is:

http://localhost:5173
13. Running the Application

The backend and frontend should run in separate terminals.

Terminal 1 — Backend
cd backend
node server.js
Terminal 2 — Frontend
cd frontend
npm run dev

Open the frontend URL displayed by Vite in a web browser.

14. Testing Checklist

Before committing or deploying the application, the following functionality should be tested:

 Backend starts successfully
 Frontend starts successfully
 The application loads successfully
 A new brew can be created
 A saved brew appears in the list
 The total brew count updates
 Brews can be filtered by method
 An existing brew can be edited
 An edited brew is saved correctly
 A brew can be deleted
 Blank form fields cannot be submitted
 Invalid ratings are rejected
 Invalid coffee amounts are rejected
 Invalid water amounts are rejected
 Frontend communicates successfully with the backend
 Database records are created, updated, retrieved, and deleted correctly
15. Security Hygiene

The project does not hardcode secrets.

Environment variables are used for configuration where appropriate.

The following files and directories are excluded from version control:

.env
.env.local
node_modules/
dev.db
.agents/
.windsurf/
.claude/
skills-lock.json

An environment variable template is provided:

backend/.env.example

This allows another developer to configure the application without exposing private environment variables.

16. Git and Collaboration

Git is used for version control.

Changes should be committed using descriptive commit messages.

Examples:

git add backend
git commit -m "Add backend brew API"
git add frontend
git commit -m "Add React brew log interface"
git add Documentation.md deployment.md
git commit -m "Add project documentation and deployment notes"

Before committing, the repository should be checked with:

git status

Staged changes can be reviewed with:

git diff --cached

The Git history should contain focused commits describing the features or changes introduced.

17. Deployment

Deployment information is documented separately in:

deployment.md

The deployment URLs will be added to deployment.md after the application has been successfully deployed.

18. Author

Coffee Brew Log was developed as a full-stack development project demonstrating:

React component development
Responsive frontend design
REST API development
CRUD operations
Form validation
Database persistence
Prisma ORM
Frontend/backend communication
Git version control
Application deployment