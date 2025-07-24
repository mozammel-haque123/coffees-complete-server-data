import nain from '../../assets/nain.png';
import ten from '../../assets/ten.png';
import aliben from '../../assets/aliben.png';
import towwalep from '../../assets/towwalep.png';
import tarten from '../../assets/tartin.png';
import fortin from '../../assets/fortin.png';
import fivtin from '../../assets/fivetin.png';
import sixstin from '../../assets/sixstin.png';
import { FaInstagram } from 'react-icons/fa';

const Cups = () => {
    const images = [nain, ten, aliben, towwalep, tarten, fortin, fivtin, sixstin];

    return (
        <div className="py-10 px-4 text-center">
            <p className="text-sm text-gray-500 rancho-regular">Follow Us Now</p>
            <h2 className="text-3xl font-bold text-brown-800 flex justify-center items-center gap-2">
                <FaInstagram className="text-pink-600 text-2xl" />
                <span className="font-semibold text-gray-800 rancho-regular">Follow on Instagram</span>
            </h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {images?.map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
                        <img src={img} alt={`coffee-${idx}`} className="w-full h-80 object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cups;
