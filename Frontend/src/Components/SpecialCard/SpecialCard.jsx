import { Button } from "@material-tailwind/react";
import toast from "react-hot-toast";

export default function SpecialCard() {
    const handleToast = () => {
        toast.success("Taken");
    };

    return (
        <div className="bg-[#6d1c1c] flex justify-center items-center py-10 px-4 sm:px-8 md:px-20 lg:px-52">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {/* VIP Member Card */}
                <div className="border-2 rounded-lg bg-white p-6 flex flex-col items-center text-center">
                    <img
                        src="https://smashburger.com/cdn-cgi/image/format=auto,width=300,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Header_Phone_Burger_ea03dc130e.png"
                        alt="VIP Member"
                        className="w-full max-w-xs mb-4"
                    />
                    <h1 className="bebas-neue text-xl sm:text-2xl text-[#6d1c1c] mb-2">VIP MEMBER</h1>
                    <p className="roboto-mono text-sm sm:text-md mb-4">
                        Become a VIP member to enjoy special offers and exclusive benefits.
                    </p>
                    <Button
                        onClick={handleToast}
                        className="bg-[#e28821] font-bold text-xs sm:text-sm md:text-base lg:text-lg py-2 px-4"
                    >
                        Take Membership
                    </Button>
                </div>

                {/* Gift Card Card */}
                <div className="border-2 rounded-lg bg-white p-6 flex flex-col items-center text-center">
                    <img
                        src="https://smashburger.com/cdn-cgi/image/format=auto,width=300,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Gift_Cards_c8c48c7a41.png"
                        alt="Gift Card"
                        className="w-full max-w-xs mb-4"
                    />
                    <h1 className="bebas-neue text-xl sm:text-2xl text-[#6d1c1c] mb-2">Gift Card</h1>
                    <p className="roboto-mono text-sm sm:text-md mb-4">
                        Grab the latest offers with our special gift cards.
                    </p>
                    <Button
                        onClick={handleToast}
                        className="bg-[#e28821] font-bold text-xs sm:text-sm md:text-base lg:text-lg py-2 px-4"
                    >
                        Take Gift Card
                    </Button>
                </div>

                {/* More Cards */}
                <div className="border-2 rounded-lg bg-white p-6 flex flex-col items-center text-center">
                    <img
                        src="https://smashburger.com/cdn-cgi/image/format=auto,width=300,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Gift_Cards_c8c48c7a41.png"
                        alt="Gift Card"
                        className="w-full max-w-xs mb-4"
                    />
                    <h1 className="bebas-neue text-xl sm:text-2xl text-[#6d1c1c] mb-2">Gift Card</h1>
                    <p className="roboto-mono text-sm sm:text-md mb-4">
                        Grab the latest offers with our special gift cards.
                    </p>
                    <Button
                        onClick={handleToast}
                        className="bg-[#e28821] font-bold text-xs sm:text-sm md:text-base lg:text-lg py-2 px-4"
                    >
                        Take Gift Card
                    </Button>
                </div>

                <div className="border-2 rounded-lg bg-white p-6 flex flex-col items-center text-center">
                    <img
                        src="https://smashburger.com/cdn-cgi/image/format=auto,width=300,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Gift_Cards_c8c48c7a41.png"
                        alt="Catering"
                        className="w-full max-w-xs mb-4"
                    />
                    <h1 className="bebas-neue text-xl sm:text-2xl text-[#6d1c1c] mb-2">Catering</h1>
                    <p className="roboto-mono text-sm sm:text-md mb-4">
                        Make your next event a Smash!
                    </p>
                    <Button
                        onClick={handleToast}
                        className="bg-[#e28821] font-bold text-xs sm:text-sm md:text-base lg:text-lg py-2 px-4"
                    >
                        Catering
                    </Button>
                </div>
            </div>
        </div>
    );
}
