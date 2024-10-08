import { Avatar, Button, Drawer, IconButton, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaBurger } from "react-icons/fa6";
import { useToken } from "../Hook/useToken";
import { isTokenExpired } from "../Hook/tokenUtils";


export default function Navbar() {
  const [displayComponent, setDisplayComponent] = useState(null);
  const [openRight, setOpenRight] = useState(false);

  const [userID, setUserID] = useState('');
  const [userInfo, setUserInfo] = useState(false);

  const { token, decodedToken, removeToken } = useToken();
  const navigate = useNavigate()
  
  useEffect(() => {
    if (isTokenExpired(token)) {
      console.log("Token has expired. Logging out...");
    } else {
      setUserID(decodedToken.username);
      console.log(decodedToken.username);
    }
  }, [token, decodedToken]);
  

  // Open and close the drawer
  const openDrawerRight = () => {
    setOpenRight(true);
  };

  // Handle screen size change
  useEffect(() => {
    const smMediaQuery = window.matchMedia('(max-width: 640px)');

    const handleScreenSizeChange = (e) => {
      if (!e.matches) {
        // Small screen
        setDisplayComponent(
          <>
            <Link to="/menus"><h1 className="text-xl text-white montserrat-alternates-light cursor-pointer hover:text-[#832424] bebas-neue">Menu</h1></Link>
            <Link to="/products"><h1 className="text-xl bebas-neue  text-white montserrat-alternates-light cursor-pointer hover:text-[#832424]">Products</h1></Link>
            <Link to="/about"><h1 className="text-xl bebas-neue text-white montserrat-alternates-light cursor-pointer hover:text-[#832424]">About</h1></Link>
            {userID ? (
              <Menu>
                <MenuHandler>
                  <div className="text-center text-white font-bold cursor-pointer">
                  <FaCircleUser className="ml-2 text-3xl text-white"/><p>{userID}</p>
                  </div>
                </MenuHandler>
                <MenuList>
                  <Link to="/dashboard"><MenuItem>Dashboard</MenuItem></Link>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <div className="flex gap-2">
                <Link to="/login"><Button className="bg-black">Login</Button></Link>
                <Link to="/register"><Button className="text-black bg-white">Sign Up</Button></Link>
              </div>                
            )}
          </>
        );
      } else {  
        // Large screen
        setDisplayComponent(<CgDetailsMore onClick={openDrawerRight} className="text-white text-2xl"/>);
      }
    };

    // Initial check and add event listener
    handleScreenSizeChange(smMediaQuery);
    smMediaQuery.addEventListener('change', handleScreenSizeChange);

    // Clean up event listener on component unmount
    return () => smMediaQuery.removeEventListener('change', handleScreenSizeChange);
  }, [userID, userInfo]);

  const handleLogout = () => {
    removeToken();
  };

  return (
    <div className="bg-[#ffa600] w-full h-20 flex justify-between items-center px-6">
      <Link to="/">
        <h1 className="flex gap-2 justify-center items-center text-white text-xl sm:text-2xl font-bold roboto-mono">
         <FaBurger/>
          BURGER la-VISTA
        </h1>
      </Link>
      <div className="flex items-center gap-6">
        {displayComponent}
      </div>
      <Drawer
        placement="right"
        open={openRight}
        onClose={() => setOpenRight(false)}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenRight(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {userID ? (
          <div className="bebas-neue flex flex-col montserrat-alternates-regular gap-y-4 h-full">
            <div className="flex flex-col gap-3 justify-center items-center text-[#832424]">
            <div className="text-center text-[#832424] font-bold cursor-pointer">
                  <FaCircleUser className="ml-1 text-3xl"/><p>{userID}</p>
            </div>
            </div>
            <div className="bg-[#cdcecd67] p-5 rounded-lg flex justify-between">
              <Link to="/dashboard"><h1 className="text-[#832424] cursor-pointer hover:text-gray-300">Dashboard</h1></Link>
              <h1 onClick={handleLogout} className="text-[#832424] cursor-pointer hover:text-gray-300">Logout</h1>
            </div>
            <Link to="/menus"><h1 className="bebas-neue text-[#832424] cursor-pointer hover:text-gray-300">Menu</h1></Link>
            <Link to="/products"><h1 className="text-[#832424] cursor-pointer hover:text-gray-300">Products</h1></Link>
            <h1 className="text-[#832424] cursor-pointer hover:text-gray-300">About</h1>
          </div>
        ) : (
          <div className="flex justify-between px-10">
            <Link to="/login"><Button className="bg-black">Login</Button></Link>
            <Link to="/register"><Button className="text-black bg-white">Sign Up</Button></Link>
          </div>
        )}
      </Drawer>
    </div>
  );
}
