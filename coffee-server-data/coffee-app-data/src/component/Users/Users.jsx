import { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvaider/AuthProvaider";

const Users = () => {
    const loder = useLoaderData();
    const {logOut} = useContext(AuthContext);
    const [users, setUsers] = useState(loder);

    const deleteHandle = (id)=>{
    //  console.log(id)

  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

     fetch(`https://coffee-store-server-indol-mu.vercel.app/users/${id}`,{
     method: 'DELETE'
     })
     .then(res => res.json())
     .then(data => {
    //  console.log(data)
     logOut()

     if(data.deletedCount > 0){
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    const updateUi = loder?.filter((fil)=> fil._id !== id);
    setUsers(updateUi)
     }

     })
  }
});
    
    }

    return (
        <div className="overflow-x-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">All Users</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Creation Time</th>
                        <th>last SignIn Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) => (
                            <tr key={user._id} className="hover:bg-base-300">
                                <td>{index + 1}</td>
                                <td>{user.fullName}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.creationTime}</td>
                                <td>{user.lastSignInTime}</td>
                                <td className="text-[18px]"> <Link to={'/update'} className="btn"><MdOutlineModeEditOutline  /></Link> </td>
                                <td><button className="btn" onClick={()=> deleteHandle(user._id)}><AiOutlineDelete className="text-[18px]" /></button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;
