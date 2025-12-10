import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-4ope.onrender.com/api",
  withCredentials: true, // if using cookies
});

// Attach token automatically
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;
