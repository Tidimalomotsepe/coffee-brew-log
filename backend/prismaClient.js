require("dotenv").config();

const path = require("path");
const { PrismaClient } = require("@prisma/client");
const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");

const databasePath = path.join(__dirname, "dev.db");

console.log("DATABASE FILE:", databasePath);

const adapter = new PrismaBetterSqlite3({
  url: `file:${databasePath}`,
});

const prisma = new PrismaClient({
  adapter,
});

module.exports = prisma;