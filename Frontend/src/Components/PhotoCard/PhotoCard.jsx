import { useNavigate } from 'react-router-dom';

export default function PhotoCard({ info }) {
    const { id, name, image, price } = info || {}; // Use a fallback to an empty object
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/burger/${id}`);
    };

    return (
        <div 
            className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            onClick={handleNavigate}
        >
            <img 
                src={image} 
                alt={name} 
                className="w-full h-80 object-cover transition-transform duration-200 hover:scale-105" 
            />
            <div className="p-4 bg-[#ffd2ad]">
                <h1 className="font-bold text-xl text-[#6d1c1c]">{name}</h1>
                <p className="text-lg text-gray-700">${price}</p>
            </div>
        </div>
    );
}
