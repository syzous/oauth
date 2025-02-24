import express from "express";
import http from "http";
import { Client } from "pg";

const app = express();
const server = http.createServer(app);
const PORT = 3000;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "oauth",
  password: "Hutbot@5",
  port: 5432,
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
