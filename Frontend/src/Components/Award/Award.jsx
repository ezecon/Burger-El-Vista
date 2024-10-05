export default function Award() {
    return (
      <div className="bg-[#6d1c1c] grid grid-cols-1 md:grid-cols-2 p-10 gap-8">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            className="rounded-lg w-full max-w-md"
            src="https://smashburger.com/cdn-cgi/image/format=auto,width=768,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/we_take_pride_74e7758318.PNG"
            alt="Award Image"
          />
        </div>
  
        {/* Text Section */}
        <div className="text-white px-4 flex flex-col justify-center">
          <h1 className="bebas-neue text-3xl mb-4">We Take Pride in Our Craft</h1>
          <p className="roboto-mono text-md mb-4">
            Our made-to-order burgers are built differently. Using our signature proprietary burger smasher, our culinary masters utilize a special smashing technique to create a mouthwatering caramelized, crispy sear that seals in all the juicy goodness within. Our passion for culinary innovation drives us to continuously experiment with thousands of ingredient combinations until we achieve the perfect recipe. We use only the finest, high-quality ingredients, each one meticulously selected for maximum flavor impact, including our custom burger spice blend, carefully curated to add a distinctive, bold flavor to every bite.
          </p>
          <button className="bg-transparent border-2 rounded-lg font-bold text-lg px-4 py-2 hover:bg-white hover:text-[#6d1c1c] transition duration-300">
            About
          </button>
        </div>
      </div>
    );
  }
  