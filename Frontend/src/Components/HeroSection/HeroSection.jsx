import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="pt-10 grid grid-cols-1 md:grid-cols-2 justify-center items-center px-4">
      {/* Left Section with Heading and Button */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-start items-center md:items-start">
          <h1 className="bebas-neue text-[#811b1b] font-bold text-4xl md:text-7xl mb-4">
            Meticulously Crafted To Be <br />DESTROYED
          </h1>
          <Link to="/products"><Button className="bg-[#e28821] font-bold text-xs sm:text-sm md:text-md lg:text-xl py-2 px-4 sm:px-6 lg:px-8">
              Order Now
            </Button>
            </Link>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="flex justify-center items-center">
        <img
          className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg"
          src="https://smashburger.com/cdn-cgi/image/format=auto,width=600,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/smashburger_double_classic_hero_195c5015ee.png"
          alt="Burger"
        />
      </div>
    </div>
  );
}

