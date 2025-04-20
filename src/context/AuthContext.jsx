import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('authUser'));
    if (storedUser) setUser(storedUser);
  }, []);

  // Iniciar sesión y guardar en localStorage
  const login = ({ email, nombre }) => {
    const newUser = { email, nombre };
    setUser(newUser);
    localStorage.setItem('authUser', JSON.stringify(newUser));
  };

  // Cerrar sesión y limpiar localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
