import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
      try {
          const decodedUser = jwtDecode(token);
          const isTokenExpired = decodedUser.exp * 1000 < Date.now();
          if (isTokenExpired) {
              logout();
          } else {
              setUser({ ...decodedUser, token });
              console.log('Authenticated user:', decodedUser);
            }
      } catch (error) {
          console.error('Invalid token:', error);
          logout();
      }
      } else {
          setUser(null);
      }    
  }, []);
    
  useEffect(() => {
    if (user) {
      console.log('User state updated:', user);
    }
  }, [user]);
  

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};