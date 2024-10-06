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
import { Link, useNavigate } from "react-router-dom";
  
  export function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState(''); // New field for password confirmation
    const [firstName, setFirstName] = useState(''); // New field for first name
    const [lastName, setLastName] = useState(''); // New field for last name
    const navigate = useNavigate();
    const API_URL = 'http://127.0.0.1:8000/api/';
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${API_URL}auth/register/`, {
          username,
          email,
          password,
          password2,  // Include password2 for confirmation
          first_name: firstName,  // Send first name
          last_name: lastName,  // Send last name
        });
  
        if (response.status === 201) {
          toast.success("Registered Successfully");
          // Reset form fields after successful registration
          setUsername('');
          setEmail('');
          setPassword('');
          setPassword2(''); // Reset password2
          setFirstName(''); // Reset first name
          setLastName(''); // Reset last name
          navigate('/login')
        }
      } catch (error) {
        if (error.response) {
          // If the server responded with an error, show the error message
          toast.error(error.response.data.message || "Registration failed");
        } else {
          // If no response from the server, show a generic error message
          toast.error("An unexpected error occurred");
        }
        console.error("Registration error:", error); // Log the error for debugging
      }
    };
  
    return (
      <div className="flex justify-center items-center mt-20">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Register
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              type="text"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              size="lg"
            />
            <Input
              type="text"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              size="lg"
            />
             <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              size="lg"
            />
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
            <Input
              type="password"
              placeholder="Confirm Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
              size="lg"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleSubmit} variant="gradient" fullWidth>
              Register
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/login"><Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Login
              </Typography></Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    );
  }
  