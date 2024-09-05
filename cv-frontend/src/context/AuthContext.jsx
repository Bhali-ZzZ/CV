import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [backendURL] = useState('https://cvapplication.onrender.com/api');

  return (
    <AuthContext.Provider value={{ backendURL }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
