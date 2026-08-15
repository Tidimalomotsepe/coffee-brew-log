Deployment
Backend Deployment

The Coffee Brew Log backend is deployed using Render.

Backend URL

https://coffee-brew-log-mxrn.onrender.com

API URL

https://coffee-brew-log-mxrn.onrender.com/api/brews

Backend Configuration

The backend is a Node.js/Express application using Prisma with SQLite.

The backend is started on Render using:

cd backend && npx prisma migrate deploy --config=prisma.config.ts && cd .. && node backend/server.js

The application uses the PORT provided by Render.

Environment variables are configured through the hosting provider and are not committed to the repository.

The repository includes backend/.env.example as a template for local configuration.

Database Deployment

Prisma migrations are included in the repository under:

backend/prisma/migrations/

The deployment runs:

npx prisma migrate deploy --config=prisma.config.ts

The migration creates the Brew table required by the application.

The SQLite database is configured in backend/prisma.config.ts:

file:./dev.db

The backend Prisma client uses the same database path.

Troubleshooting

During deployment, the application initially returned:

{
  "error": "Failed to fetch brews"
}

The Render logs showed that the Brew table did not exist in the database.

The issue was caused by the Prisma database path being different between the migration command and the running backend.

The Prisma configuration was updated so that the migration and backend use the same SQLite database:

file:./dev.db

The deployment was then updated to run the Prisma migration before starting the server.

After redeployment, the Render logs confirmed:

Datasource "db": SQLite database "dev.db" at "file:./dev.db"
No pending migrations to apply.
Server running on port 10000

The backend was then able to connect to the database and retrieve brews successfully.

Frontend Deployment

The frontend is built using Vite.

The production build is created with:

npm run build --prefix frontend

The frontend was configured to connect to the deployed Render API instead of the local development API.

The production API endpoint is:

https://coffee-brew-log-mxrn.onrender.com/api/brews
Final Deployment Status

The application was successfully deployed and tested.

The backend is live on Render and the API can be accessed through:

https://coffee-brew-log-mxrn.onrender.com/api/brews