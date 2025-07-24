// import Swal from "sweetalert2";

// const Update = () => {
//     const signupHandle = (e) => {
//         e.preventDefault();
//         const form = e.target;
    
//         const firstName = form.firstName.value;
//         const lastName = form.lastName.value;
//         const fullName = `${firstName} ${lastName}`
    
//         const email = form.email.value;
//         const password = form.password.value;
//         const gender = form.gender.value;
    
//         // const userData = {
//         // fullName,
//         //   email,
//         //   password,
//         //   gender,
//         // };
//         // console.log(userData)
//       emailPass(email,password)
//       .then((result)=>{
//     console.log(result.user)
//     const creationTime = result?.user?.metadata?.creationTime;
//      const userData = {fullName,email,gender,creationTime};
//      fetch(`http://localhost:5000/users`,{
//       method: 'POST',
//        headers: {
//       'content-type': 'application/json'
//           },
//       body: JSON.stringify(userData)
//      })
//      .then(res => res.json())
//      .then(data => {
//       console.log(data)
//       if(data.insertedId){
//             Swal.fire({
//         title: 'Success!',
//         text: 'users Added Successfully',
//         icon: 'success',
//         confirmButtonText: 'Cool'
//     });
//       }
//      })
//       })
//       .catch((error)=>{
//         console.log(error)
//       })
//     }
//     return (
//          <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>
//         <form onSubmit={signupHandle} className="space-y-4">
//           <div className="flex gap-4">
//             <div className="w-1/2">
//               <label className="block text-sm font-medium text-gray-700">First Name</label>
//               <input type="text" placeholder="firstName" name="firstName" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-sm font-medium text-gray-700">Last Name</label>
//               <input type="text" placeholder="lastName" name="lastName" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" name="email" placeholder="email@example.com" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input type="password" placeholder="••••••••" name="password" className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
//             <div className="flex items-center gap-4">
//               <label className="inline-flex items-center">
//                 <input type="radio" name="gender" value="male" className="form-radio text-blue-600" />
//                 <span className="ml-2">Male</span>
//               </label>
//               <label className="inline-flex items-center">
//                 <input type="radio" name="gender" value="female" className="form-radio text-pink-600" />
//                 <span className="ml-2">Female</span>
//               </label>
//             </div>
//           </div>

//           <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">Create Account</button>
//         </form>
//       </div>
//     </div>
//     );
// };

// export default Update;