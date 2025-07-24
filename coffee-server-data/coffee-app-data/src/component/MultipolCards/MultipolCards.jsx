import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const MultipolCards = ({coffees,coffesDelet,setCoffeesDelet}) => {
     const  {_id,name,photo,chef,taste} = coffees;
    const handaleDelet = (id)=>{
   
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
  fetch(`https://coffee-store-server-indol-mu.vercel.app/coffee/${id}`, {
      method: 'DELETE'
     })
     .then(res => res.json())
     .then(data => {
      // console.log(data)
        if(data.deletedCount > 0){
              Swal.fire({
      title: "Deleted!",
      text: "Your Coffee has been deleted.",
      icon: "success"
    });

    const dataCoffee = coffesDelet?.filter((fil)=> fil._id !== id);
    setCoffeesDelet(dataCoffee

    )
        }

     }) 
  }

});


    }
    return (
        <div>
               <div
          className="flex items-center bg-base-200 p-4 rounded-lg shadow-md  hover:scale-105 transition-transform duration-300"
        >
          <div className="w-1/3">
            <img
              src={photo}
              alt={name}
              className="rounded-lg w-full h-44"
            />
          </div>
          <div className="flex-1 px-4">
            <p className="text-lg font-bold">
              Name: <span className="font-normal">{name}</span>
            </p>
            <p>
              Chef: <span className="text-gray-600">{chef}</span>
            </p>
            <p>
              Taste: <span className="text-gray-600">{taste}</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link to={`/ditails/${_id}`} className="btn btn-sm btn-ghost text-primary FaEye"> 
              <FaEye /></Link>
          
            <Link to={`/updatecoffee/${_id}`} className="btn btn-sm btn-ghost text-white bg-black">
              <FaPen />
            </Link> 
            <Link className="btn btn-sm btn-ghost bg-red-500 text-white">
              <FaTrash onClick={()=> handaleDelet(_id)}/>
            </Link>
          </div>
        </div>
        </div>
    );
};

export default MultipolCards;