import  { useEffect, useState } from 'react';

const decodeJWT = (token) => {
  const base64Url = token.split('.')[1]; // Get the payload part
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Replace URL-safe characters
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload); // Parse the JSON string to an object
};

const Home = () => {
  const [tokenInfo, setTokenInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      try {
        const decoded = decodeJWT(token); // Decode the token manually
        setTokenInfo(decoded); // Set the decoded token info in state
      } catch (error) {
        console.error("Failed to decode token:", error); // Log error if decoding fails
      }
    }
  }, []);

  return (
    <div>
      <h1>Token Information</h1>
      {tokenInfo ? (
        <pre>{JSON.stringify(tokenInfo, null, 2)}</pre> // Display the decoded token info
      ) : (
        <p>No token found</p> // Message if no token is found
      )}
    </div>
  );
};

export default Home;
