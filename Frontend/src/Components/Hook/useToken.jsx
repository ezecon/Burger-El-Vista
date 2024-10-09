import { useState } from "react";

// Helper function to decode JWT payload
const decodeToken = (token) => {
  if (!token) return null;

  const base64Url = token.split('.')[1]; 
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); 
  try {
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload); // Return the decoded payload
  } catch (e) {
    console.error("Invalid token format");
    return null;
  }
};

export const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem('accessToken');
    return tokenString;
  };

  const [token, setToken] = useState(getToken());
  const decodedToken = decodeToken(token);

  const saveToken = (userToken) => {
    localStorage.setItem('accessToken', userToken);
    setToken(userToken);
  };

  const removeToken = () => {
    localStorage.removeItem('accessToken');
    setToken(null);
  };

  return {
    setToken: saveToken,
    token,
    
    decodedToken, 
    removeToken,
  };
};
