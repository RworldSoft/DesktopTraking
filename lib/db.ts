import Database from "@tauri-apps/plugin-sql";

let db: Database | null = null;

export async function getDb() {
  if (!db) {
    db = await Database.load("sqlite:app.db");
    await initDB(); // ✅ ensure table exists
  }
  return db;
}

// ✅ ADD THIS
async function initDB() {
  if (!db) return;

  await db.execute(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      synced INTEGER DEFAULT 0
    )
  `);
}
