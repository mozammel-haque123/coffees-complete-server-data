import { NavLink, useLocation } from "react-router-dom";
import navlogo from '../../assets/logo1.png'
import HeroSection from "../HeroSection/HeroSection";
import FeatureSection from "../FeatureSection/FeatureSection";
const Nabvar = () => {
    const location = useLocation()
    return (
        <div> 
        <div className="nav p-4 flex justify-center items-center gap-2">
        <img className="w-18" src={navlogo} alt="nav logo" />
        <h1 className="text-4xl text-white rancho-regular">Espresso Emporium</h1>
        </div>

        <div className={location.pathname === '/AddCoffee'  || location.pathname.startsWith('/ditails/') || location.pathname.startsWith('/updatecoffee/') ? 'hidden' : '' }>
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
        </div>
        
        <div className="flex justify-center gap-3 mt-4">
            <NavLink className={'btn'} to={'/'}>
            All Coffee
            </NavLink>

            <NavLink to={'/AddCoffee'} className={'btn'}>
                Add Coffee 
            </NavLink>
        </div>
        </div>
       
    );
};

export default Nabvar;