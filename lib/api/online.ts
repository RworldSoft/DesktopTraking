import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const OnlineAPI = {
  async addTask(title: string) {
    return api.post("/tasks", { title });
  },

  async getTasks() {
    const res = await api.get("/tasks");
    return res.data;
  },
};
