import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";
  import axios from "axios";
  import { useState } from "react";
  import toast from "react-hot-toast";
  
  export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const API_URL = 'http://127.0.0.1:8000/api/';
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${API_URL}token/`, {
          username,
          password,
        });
  
        if (response.status === 200) { // Check if the response status is 200 (OK)
          toast.success("Login Successfully");
          setUsername('');
          setPassword('');
          localStorage.setItem('refreshToken', response.data.refresh); 
          localStorage.setItem('accessToken', response.data.access); 
        }
      } catch (error) {
        if (error.response) {
          // If the server responded with an error, show the error message
          toast.error(error.response.data.message || "Login failed");
        } else {
          // If no response from the server, show a generic error message
          toast.error("An unexpected error occurred");
        }
        console.error("Login error:", error); // Log the error for debugging
      }
    };
  
    return (
      <div className="flex justify-center items-center">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Login
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              type="text"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              size="lg"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              size="lg"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleSubmit} variant="gradient" fullWidth>
              Login
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Register
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    );
  }
  