# ☕ Coffee Brew Log

A full-stack web application for creating, managing and reviewing coffee brew records.

## Live Demo

**Application:** https://coffee-brew-log-mxrn.onrender.com/

**GitHub:** https://github.com/Tidimalomotsepe/coffee-brew-log

## About the Project

Coffee Brew Log is a full-stack application developed to allow users to keep track of their coffee brewing records.

The application provides a simple interface for recording brew details and managing saved records. It demonstrates full-stack development, REST API integration, database operations, frontend state management, validation, testing and deployment.

## Features

* Create a new brew record
* View saved brew records
* Filter brews by brewing method
* Edit existing brew records
* Delete brew records
* Validate form input
* Store brew information in a database
* Communicate between the React frontend and Node.js backend through a REST API
* Display brew ratings with visual indicators
* Responsive user interface

## Technology Stack

### Frontend

* React
* JavaScript
* Vite
* HTML
* CSS

### Backend

* Node.js
* Express.js
* REST API

### Database

* SQLite
* Prisma ORM

### Development & Deployment

* Git
* GitHub
* Postman
* VS Code
* Render

## Application Architecture

The project is organised into separate frontend and backend applications:

```text
coffee-brew-log/
├── frontend/
│   └── React application
│
├── backend/
│   ├── Express server
│   ├── API routes
│   ├── Controllers
│   └── Prisma database configuration
│
├── Documentation.md
├── deployment.md
└── README.md
```

## API Endpoints

The backend exposes REST API endpoints for managing brew records.

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/brews`     | Retrieve all brews      |
| POST   | `/api/brews`     | Create a new brew       |
| PUT    | `/api/brews/:id` | Update an existing brew |
| DELETE | `/api/brews/:id` | Delete a brew           |

## Example Brew Data

A brew record contains information such as:

* Coffee name
* Brewing method
* Coffee dose
* Water amount
* Grind size
* Rating
* Tasting notes

## Validation & Error Handling

The application includes validation to prevent incomplete brew records from being submitted.

The backend validates incoming data before saving records and returns appropriate HTTP responses for API operations.

During development, frontend, backend, API and database issues were investigated and resolved, including database schema mismatches, API route issues and frontend/backend integration problems.

## Testing

API functionality was tested using **Postman**.

Application functionality was tested during development to verify:

* Creating brew records
* Retrieving brew records
* Updating brew records
* Deleting brew records
* Filtering brew records
* Form validation
* Frontend/backend communication

## Running the Project Locally

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

### Clone the repository

```bash
git clone https://github.com/Tidimalomotsepe/coffee-brew-log.git
cd coffee-brew-log
```

### Backend

```bash
cd backend
npm install
```

Configure the required environment variables using the provided `.env.example` file.

Run the Prisma database setup as described in `Documentation.md`.

Start the backend:

```bash
node server.js
```

### Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend can then be accessed through the local development URL displayed by Vite.

## Deployment

The application backend has been deployed using **Render**.

**Live Application:**
https://coffee-brew-log-mxrn.onrender.com/

Deployment configuration and troubleshooting notes are documented in `deployment.md`.

## Security

Sensitive configuration values are not committed to the repository.

Environment variables are used where appropriate, and an `.env.example` file is provided to assist with local setup.

## What I Learned

Through this project, I gained practical experience with:

* Full-stack web application development
* React component development
* Building REST APIs with Node.js and Express
* Database integration using Prisma and SQLite
* CRUD operations
* API testing with Postman
* Debugging frontend and backend issues
* Database troubleshooting
* Git and GitHub version control
* Application deployment using Render
* Managing environment configuration

## Author

**Tidimalo Motsepe**

Diploma in Information Technology
Vaal University of Technology

**GitHub:** https://github.com/Tidimalomotsepe

**Portfolio Project:** Coffee Brew Log
