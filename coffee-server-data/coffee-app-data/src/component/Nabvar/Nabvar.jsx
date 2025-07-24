import { Link, NavLink, useLocation } from "react-router-dom";
import navlogo from '../../assets/logo1.png'
import HeroSection from "../HeroSection/HeroSection";
import FeatureSection from "../FeatureSection/FeatureSection";
import { AuthContext } from "../AuthProvaider/AuthProvaider";
import { useContext } from "react";
import Swal from "sweetalert2";
const Nabvar = () => {
    const {logOut,user} = useContext(AuthContext)
    const location = useLocation()

    const userlogOut = ()=>{
        
        Swal.fire({
  title: "Are you sure?",
  text:  "You will be logged out!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, log out!"
}).then((result) => {
  if (result.isConfirmed) {
            logOut()
        .then((result)=>{
        console.log(result)
          Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    
    });
        })
        .catch((error)=>{
          Swal.fire("Oops!", "Something went wrong: " + error.message, "error");
            console.log(error)
        } )
  }
});

    }
    return (
        <div> 
        <div className="nav p-4 flex justify-center items-center gap-2">
        <img className="w-18" src={navlogo} alt="nav logo" />
        <h1 className="text-4xl text-white rancho-regular">Espresso Emporium</h1>
        </div>

        <div className={location.pathname === '/AddCoffee'  || location.pathname.startsWith('/ditails/') || location.pathname.startsWith('/updatecoffee/') || location.pathname.startsWith('/users') ? 'hidden' : '' }>
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
        </div>
        
        <div className={location.pathname.startsWith('/ditails/') || location.pathname.startsWith('/updatecoffee/')  ? 'hidden' : `flex justify-center gap-3 mt-4`}>
            <NavLink className={'btn'} to={'/'}>
            All Coffee
            </NavLink>

            <NavLink to={'/AddCoffee'} className={'btn'}>
                Add Coffee 
            </NavLink>

            <NavLink to={'/users'} className={'btn'}>
               Users
            </NavLink>

            {
            user ?  (
                 <NavLink to={'#'} onClick={userlogOut} className={({ isActive }) => isActive ? "btn" : "btn"}>
            logOut
            </NavLink>
            ) : (
         <NavLink to={'/singin'} className={'btn'}>
           Sign in
            </NavLink>
            )
            }
          
          
        </div>
        </div>
       
    );
};

export default Nabvar;