import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvaider/AuthProvaider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";

const Singin = () => {
    const {signinEmailPass} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
        const emailRefs = useRef()
        const [pass, setPass] = useState(true)

           useEffect(()=>{
          emailRefs.current.focus()
         },[]) 

       const signinHandle = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // const userData = {
        // fullName,
        //   email,
        //   password,
        //   gender,
        // };
        // console.log(userData)
      signinEmailPass(email,password)
      .then((result)=>{
    console.log(result.user)
    const lastSignInTime = result?.user?.metadata?.lastSignInTime;
     const userData = {email,lastSignInTime};

// using axios
axios.patch('https://coffee-store-server-indol-mu.vercel.app/users', userData)
.then(data =>{
       if(data.insertedId){
            Swal.fire({
        title: 'Success!',
        text: 'users Singin Successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
    });
      }

     if(location.state?.from){
    navigate(location.state?.from)
    }else{
   // কোন নিউজে এর ডিটেলসে না গিয়ে শুধু লগইন করার পর তাকে হোম পেজে নিয়ে যাবে
    navigate('/')
    }
})

// using fatch

    //  fetch(`http://localhost:5000/users`,{
    //   method: 'PATCH',
    //    headers: {
    //   'content-type': 'application/json'
    //       },
    //   body: JSON.stringify(userData)
    //  })
    //  .then(res => res.json())
    //  .then(data => {
    //   console.log(data)
    //   if(data.insertedId){
    //         Swal.fire({
    //     title: 'Success!',
    //     text: 'users Singin Successfully',
    //     icon: 'success',
    //     confirmButtonText: 'Cool'
    // });
    //   }
    //  })
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    return (
         <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign In</h2>
        <form onSubmit={signinHandle} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" ref={emailRefs} name="email" placeholder="email@example.com" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type={pass ? 'password' : 'text'} placeholder="••••••••" name="password" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
           <div className="absolute right-2 bottom-2">
           
            <button onClick={()=> setPass(!pass)}> {pass ? <FaRegEyeSlash /> : <LiaEyeSolid />} </button> 
           
           </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">Create Account</button>
        </form>
             <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to={'/signup'} className="text-purple-600 font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Singin;