require("dotenv").config();

const path = require("path");
const { PrismaClient } = require("@prisma/client");
const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");

const databaseUrl = `file:${path.join(__dirname, "dev.db")}`;

const adapter = new PrismaBetterSqlite3({
  url: databaseUrl,
});

const prisma = new PrismaClient({
  adapter,
});

module.exports = prisma;