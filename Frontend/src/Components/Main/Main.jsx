import { Outlet } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
import Navbar from "../Navbar/Navbar";


export default function Main() {
  return (
    <div>
        <Navbar/>
        <div className="bg-[black] py-4 text-white font-bold roboto-mono gap-2 flex justify-center items-center">
            <FaLocationDot/>
            <p className="underline">CHOOSE A LOCATION TO ORDER </p>
            <Button className="bg-[#e28821] font-bold text-lg">Order Now</Button>

        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
