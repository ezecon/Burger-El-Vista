import { Link, Outlet } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
import Navbar from "../Navbar/Navbar";


export default function Main() {
  return (
    <div>
        <Navbar/>
        <div className="bg-[black] py-4 text-white font-bold roboto-mono gap-2 flex justify-center items-center">
            <FaLocationDot/>
            <p className="underline text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
              CHOOSE A LOCATION TO ORDER
            </p>

            <Link to="/products"><Button className="bg-[#e28821] font-bold text-xs sm:text-sm md:text-md lg:text-xl py-2 px-4 sm:px-6 lg:px-8">
              Order Now
            </Button>
            </Link>


        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
