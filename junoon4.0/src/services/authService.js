import axios from "axios";

const API = axios.create({
  baseURL: "https://umang-junoon4-0.onrender.com/api",
});

/* ================= SIGNUP ================= */
export const signupUser = async (data) => {
  const res = await API.post("/auth/signup", data);
  return res.data;
};

/* ================= LOGIN ================= */
export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};
