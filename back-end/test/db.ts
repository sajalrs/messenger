import { Pool } from "pg";

const ConnectionPool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: "messenger_database",
  host: "db",
  port: 5432,
});

export default ConnectionPool;
