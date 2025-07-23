import "dotenv/config";
import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
  ssl: {
    rejectUnauthorized: false, // Supabase membutuhkan SSL
  }
});

pool.connect()
  .then(() => console.log("Berhasil terhubung ke Supabase PostgreSQL"))
  .catch((err) => console.error("Gagal koneksi ke DB:", err));
