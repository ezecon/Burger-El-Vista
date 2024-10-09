import axios from "axios";
import { useEffect, useState } from "react";
import PhotoCard from "../../Components/PhotoCard/PhotoCard";

export default function All() {
    const [data, setData] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true); // Add a loading state
    const [error, setError] = useState(null); // State for error handling
    const [cart, setCart] = useState([]); // Initialize cart state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/menu-items/`);
                if (response.status === 200) {
                    setData(response.data.data); // Assuming response.data.data is the correct structure
                } else {
                    setError("Error fetching data"); // Handle unexpected response
                }
            } catch (error) {
                console.log(error);
                setError("Failed to fetch data. Please try again later."); // Set error message
            } finally {
                setLoading(false); // Set loading to false when done
            }
        };

        fetchData();
    }, []); // Run only once on mount

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]); // Add the item to the cart
    };

    const getCartCount = () => {
        return cart.length; // Get the number of items in the cart
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    if (error) {
        return <div>{error}</div>; // Show error message if any
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Menu Items</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Cart ({getCartCount()}) {/* Display cart count */}
                </button>
            </div>

            {data.length > 0 ? (
                <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.map((item) => (
                        <div key={item.id} className="p-4"> {/* Adjust the padding as needed */}
                            <PhotoCard info={item} />
                            <button
                                className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                                onClick={() => addToCart(item)} // Add to cart on click
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
}
