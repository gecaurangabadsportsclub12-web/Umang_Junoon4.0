// src/utils/auth.js

// Save token + user after login
export const setAuth = (token, user) => {
  const expiry = new Date().getTime() + 7 * 24 * 60 * 60 * 1000; // 7 days

  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token_expiry", expiry);
};

// Check if user is logged in
export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  const expiry = localStorage.getItem("token_expiry");

  if (!token || !expiry) return false;

  if (new Date().getTime() > expiry) {
    logout();
    return false;
  }

  return true;
};

// Get token (for axios headers)
export const getToken = () => {
  return localStorage.getItem("token");
};

// Get logged in user
export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Logout user
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("token_expiry");
};
