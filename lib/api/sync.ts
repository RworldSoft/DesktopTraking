import { OfflineAPI } from "./offline";
import { OnlineAPI } from "./online";
import { Task } from "@/types/task";

export async function syncOfflineTasks(): Promise<void> {
  const unsyncedTasks: Task[] = await OfflineAPI.getUnsyncedTasks();

  if (unsyncedTasks.length === 0) {
    console.log("✅ No offline tasks to sync");
    return;
  }

  console.log(`🔁 Syncing ${unsyncedTasks.length} tasks...`);

  for (const task of unsyncedTasks) {
    try {
      await OnlineAPI.addTask(task.title);
      await OfflineAPI.markAsSynced(task.id);
    } catch (err) {
      console.error("❌ Failed to sync task:", task.title);
    }
  }

  console.log("✅ Sync completed");
}
