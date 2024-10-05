export default function Menu() {
    const data = [
      {
        img: 'https://smashburger.com/cdn-cgi/image/format=auto,width=420,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/double_classic_Smash_063b55ea95.png',
        name: 'Smashburgers',
      },
      {
        img: 'https://smashburger.com/cdn-cgi/image/format=auto,width=420,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Crispy_Chicken_tenders_sandwich_457d704fd2.webp',
        name: 'Chicken',
      },
      {
        img: 'https://smashburger.com/cdn-cgi/image/format=auto,width=420,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Veggie_BB_Smash_Original_file_a9c549b107.webp',
        name: 'Veggie',
      },
      {
        img: 'https://smashburger.com/cdn-cgi/image/format=auto,width=420,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/3_sides_group_shot_579b2acac7.png',
        name: 'Sides',
      },
      {
        img: 'https://smashburger.com/cdn-cgi/image/format=auto,width=420,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/w_AA_YY_Sc_eeeaf3600f.png',
        name: 'Kids Meals',
      },
      {
        img: 'https://smashburger.com/cdn-cgi/image/format=auto,width=420,quality=75/https://sbprod-web-assets.s3.us-west-2.amazonaws.com/Microsoft_Teams_image_2_8e5a374ddf.png',
        name: 'Hand-Spun Shakes',
      },
    ];
  
    return (
      <div>
        <h1 className="text-center font-bold roboto-mono text-3xl py-6">MENU</h1>
        <div className="px-4 sm:px-40 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data.map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                <img src={item.img} alt={item.name} className="w-full h-auto max-w-sm" />
                <p className="text-center border rounded-lg p-2 bebas-neue text-lg mt-2">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  