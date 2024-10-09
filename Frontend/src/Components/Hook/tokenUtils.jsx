// tokenUtils.js

/**
 * Helper function to decode a JWT and check if it has expired.
 * @param {string} token - The JWT token to decode and check.
 * @returns {boolean} - Returns true if the token is expired, false otherwise.
 */
export const isTokenExpired = (token) => {
    if (!token) return true; // If no token, assume it's expired.
  
    try {
      const base64Url = token.split('.')[1]; // Extract the payload
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Replace URL-safe characters
      const jsonPayload = JSON.parse(
        decodeURIComponent(
          atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        )
      );
  
      const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
      return jsonPayload.exp < currentTime; // Compare exp with current time
  
    } catch (e) {
      console.error("Invalid token format or error decoding token:", e);
      return true; // Assume expired if error occurs
    }
  };
  