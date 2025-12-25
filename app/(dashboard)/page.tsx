"use client";

import { API } from "@/lib/api";
import { syncOfflineTasks } from "@/lib/api/sync";
import { Task } from "@/types/task";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  async function loadTasks() {
    const data = await API.getTasks();
    setTasks(data);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    await API.addTask(title);
    setTitle("");
    await loadTasks();
  }

  useEffect(() => {
    // ✅ 1. Load tasks on app start
    loadTasks();

    // ✅ 2. Sync immediately if already online
    if (navigator.onLine) {
      syncOfflineTasks().then(loadTasks);
    }

    // ✅ 3. Sync when internet comes back
    const handleOnline = async () => {
      console.log("🌐 Internet is back — syncing...");
      await syncOfflineTasks();
      await loadTasks();
    };

    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome Back!</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
          className="border p-2 rounded w-full"
        />
        <button className="bg-black text-white px-4 rounded">Add</button>
      </form>

      {/* TABLE */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Tasks</h3>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Synced</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="border p-2">{task.id}</td>
                <td className="border p-2">{task.title}</td>
                <td className="border p-2">{task.synced ? "✅" : "❌"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
