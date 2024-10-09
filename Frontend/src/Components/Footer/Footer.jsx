import { Typography } from "@material-tailwind/react";
import { FaBurger } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="w-full bg-white p-8 mt-20">
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
      <h1 className="text-[black] flex gap-2 justify-center items-center text-white text-xl sm:text-2xl font-bold roboto-mono">
         <FaBurger/>
          BURGER la-VISTA
        </h1>
        <ul className="flex  items-center gap-y-2 gap-x-2 sm:gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-xs font-bold montserrat-alternates transition-colors hover:text-[goldenrod]"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-xs  font-bold montserrat-alternates transition-colors hover:text-[goldenrod]"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-xs  font-bold montserrat-alternates transition-colors hover:text-[goldenrod]"            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-xs  font-bold montserrat-alternates transition-colors hover:text-[goldenrod]"            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <div className=" gap-4 justify-center items-center">
        <Typography
          color="blue-gray"
          className="font-bold text-sm text-center montserrat-alternates mt-4 sm:mt-0"
        >
          &copy; 2024 All Rights Reserved By BURGER la-Vista
        </Typography>
        <Typography
          color="blue-gray"
          className="font-bold text-sm text-center montserrat-alternates mt-4 sm:mt-0"
        >
          Developed By <a className="text-[goldenrod]" href="http://md-econozzaman.vercel.app">Econ</a>
        </Typography>
      </div>
    </footer>
  );
}
