import { Outlet, useLocation } from "react-router-dom";
import Nabvar from "../Nabvar/Nabvar";
import Footer from "../Footer/Footer";
import Cups from "../Cups/Cups";

const Mainleyaut = () => {
        const location = useLocation()
    return (
        <div>
        <div className="">
        <Nabvar></Nabvar>
            </div>    
     <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
        </div> 
        <div className={location.pathname === '/AddCoffee' || location.pathname === '/users'  || location.pathname.startsWith('/ditails/') || location.pathname.startsWith('/updatecoffee/') ? 'hidden' : '' }>
     <Cups></Cups>
        </div>
        <div className="mt-8">
      <Footer></Footer>
        </div>     
        </div>
   
    );
};

export default Mainleyaut;