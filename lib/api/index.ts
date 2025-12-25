import { OfflineAPI } from "./offline";
import { OnlineAPI } from "./online";
import { isOnline } from "@/lib/utils/network";

export const API = {
  async addTask(title: string) {
    if (navigator.onLine) {
      try {
        await OnlineAPI.addTask(title);
        return;
      } catch {
        // server failed → fallback to offline
        await OfflineAPI.addTask(title);
      }
    } else {
      await OfflineAPI.addTask(title);
    }
  },
  async getTasks() {
    if (isOnline()) {
      try {
        return await OnlineAPI.getTasks();
      } catch {
        return await OfflineAPI.getTasks();
      }
    } else {
      return await OfflineAPI.getTasks();
    }
  },
};
