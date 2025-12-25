import { getDb } from "@/lib/db";
import { Task } from "@/types/task";

export const OfflineAPI = {
  async addTask(title: string): Promise<void> {
    const db = await getDb();
    await db.execute("INSERT INTO tasks (title, synced) VALUES (?, ?)", [
      title,
      0,
    ]);
  },

  async getTasks(): Promise<Task[]> {
    const db = await getDb();
    return await db.select<Task[]>("SELECT * FROM tasks ORDER BY id DESC");
  },

  async getUnsyncedTasks(): Promise<Task[]> {
    const db = await getDb();
    return await db.select<Task[]>("SELECT * FROM tasks WHERE synced = 0");
  },

  async markAsSynced(id: number): Promise<void> {
    const db = await getDb();
    await db.execute("UPDATE tasks SET synced = 1 WHERE id = ?", [id]);
  },
};
