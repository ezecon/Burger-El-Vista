import { Button } from "@material-tailwind/react";

export default function TopDish() {
  return (
    <div className="bg-[#d4701e] flex justify-center items-center sm:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center m-20 p-10 sm:py-20 bg-white rounded-lg shadow-xl">
        {/* Left Section with Image */}
        <div className="flex justify-center">
          <img
            className="w-full h-auto max-w-sm rounded-lg"
            src="https://smashburger.com/cdn-cgi/image/format=auto,width=768,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/burger_turntable_03dacedeae.PNG"
            alt="Burger"
          />
        </div>
        
        {/* Right Section with Text */}
        <div className="flex flex-col justify-center items-start p-4">
          <h1 className="bebas-neue text-2xl md:text-3xl font-bold">New Look, Great Taste!</h1>
          <p className="roboto-mono text-base md:text-lg mt-2">
            We gave our Certified Angus Beef® burgers, fresh ingredients, and bold flavors a makeover. Time to eat like no one's watching!
          </p>
          <Button className="bg-[#e28821] font-bold text-xl mt-4">Order Now</Button>
        </div>
      </div>
    </div>
  );
}
