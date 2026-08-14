import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'
import bcrypt from 'bcryptjs'

const { Pool } = pg

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export async function query(text, params) {
  return pool.query(text, params)
}

export async function migrate() {
  const schemaPath = path.join(__dirname, '..', 'sql', 'schema.sql')
  const sql = fs.readFileSync(schemaPath, 'utf8')
  await pool.query(sql)
  await pool.query(
    `INSERT INTO focus_daily (user_id, day, seconds)
     SELECT user_id,
            (timezone('Asia/Shanghai', updated_at))::date AS day,
            SUM(seconds)::int
     FROM focus_time
     GROUP BY user_id, day
     ON CONFLICT (user_id, day) DO NOTHING`,
  )
}

export async function ensureAdmin() {
  const username = process.env.ADMIN_USERNAME || 'chenhh'
  const password = process.env.ADMIN_PASSWORD
  if (!password) {
    console.warn('ADMIN_PASSWORD not set; skipping admin bootstrap')
    return
  }

  const existing = await pool.query(
    'SELECT id, role FROM users WHERE username = $1',
    [username],
  )

  if (existing.rowCount === 0) {
    const passwordHash = await bcrypt.hash(password, 10)
    await pool.query(
      `INSERT INTO users (username, password_hash, role)
       VALUES ($1, $2, 'admin')`,
      [username, passwordHash],
    )
    console.log(`Created admin user "${username}"`)
    return
  }

  if (existing.rows[0].role !== 'admin') {
    await pool.query(`UPDATE users SET role = 'admin' WHERE id = $1`, [
      existing.rows[0].id,
    ])
    console.log(`Promoted user "${username}" to admin`)
  }
}
