// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));
    if (storedUser) setUser(storedUser);
  }, []);

  // ✅ Login con nombre y email
  const login = ({ email, nombre }) => {
    const newUser = { email, nombre };
    setUser(newUser);
    localStorage.setItem("authUser", JSON.stringify(newUser));
  };

  // ✅ Logout limpio
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
