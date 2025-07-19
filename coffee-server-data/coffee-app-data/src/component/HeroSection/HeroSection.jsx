import { FaCoffee } from "react-icons/fa";
import heroImg from '../../assets/hero.png';
const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center min-h-[90vh] flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="absolute right-70 bg-opacity-60 text-white px-6 py-10 md:px-16 md:py-20 rounded-lg max-w-2xl text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif rancho-regular">
          Would you like a <span className="text-yellow-400">Cup of Delicious Coffee</span>?
        </h1>
        <p className="mb-6 text-sm md:text-base leading-relaxed text-gray-300 rancho-regular">
          It’s coffee time – Sip & Savor – Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!! Enjoy the beautiful moments and make them memorable.
        </p>
        <button className="btn bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rancho-regular">
          <FaCoffee className="mr-2" /> Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
