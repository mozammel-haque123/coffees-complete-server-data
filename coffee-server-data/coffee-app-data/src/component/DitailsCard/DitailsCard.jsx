import { useLoaderData } from "react-router-dom";
import { FaUserTie, FaUtensils, FaInfoCircle, FaCoffee, FaList } from "react-icons/fa";

const DitailsCard = () => {
    const coffee = useLoaderData();
    const { name, supplier, category, photo, chef, taste, details } = coffee;

    return (
        <div className="max-w-md mx-auto p-4">
            <div className="card card-compact bg-base-100 shadow-xl border">
                <figure>
                    <img src={photo} alt={name} className="h-40-full object-cover" />
                </figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title text-xl font-bold flex items-center gap-2">
                        <FaCoffee className="text-orange-500" /> {name}
                    </h2>
                    <p className="flex items-center gap-2 text-gray-700">
                        <FaUserTie className="text-blue-500" /> Supplier: {supplier}
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                        <FaUtensils className="text-green-600" /> Category: {category}
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                        <FaUserTie className="text-purple-600" /> Chef: {chef}
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                        <FaList className="text-pink-500" /> Taste: {taste}
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                        <FaInfoCircle className="text-gray-500" /> Details: {details}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DitailsCard;
