import { useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Lógica simulada de login
    if (username && password) {
      setUser({ username });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    login,
    logout,
    isLoggedIn: !!user,
  };
};
