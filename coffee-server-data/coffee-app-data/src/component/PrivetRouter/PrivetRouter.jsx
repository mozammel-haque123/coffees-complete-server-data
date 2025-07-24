import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvaider/AuthProvaider";
import { useContext } from "react";

const PrivetRouter = ({children}) => {
const {user,loding} = useContext(AuthContext)
   if(loding){
    return <div className="text-center mt-10"><span className="loading loading-bars loading-xl"></span></div> ;
   }
    if(!user){
     return <Navigate state={{from: location?.pathname}} to={'/singin'}  replace></Navigate>
    }
    return (
        <div>
       {children}
        </div>
    );
};

export default PrivetRouter;