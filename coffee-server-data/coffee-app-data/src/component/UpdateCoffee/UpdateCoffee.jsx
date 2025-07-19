import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { FaCoffee } from "react-icons/fa";
const UpdateCoffee = () => {
    const loder = useLoaderData()
   
      const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
       
         const name =  form.name.value
         const supplier =  form.supplier.value
         const category =  form.category.value
         const photo =  form.photo.value
         const chef =  form.chef.value
         const taste =  form.taste.value
         const details =  form.details.value
        const coffeeUpdate = {name,supplier,category,photo,chef,taste,details };
    
        console.log(coffeeUpdate);
        
        fetch(`http://localhost:5000/coffee/${loder._id}`,{
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(coffeeUpdate)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount > 0){
            Swal.fire({
      title: 'Success!',
      text: 'Coffee Updated Successfully',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
          }
        })
      };

    return (
           <div className=" p-10 rounded-xl max-w-4xl mx-auto mt-10 shadow-xl bg-stone-200">
             <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2 rancho-regular">
               <FaCoffee className="text-brown-600" /> Update Existing Coffee Details
             </h2>
             <p className="text-center mb-10 text-gray-600 max-w-2xl mx-auto">
      It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
             </p>
             <form onSubmit={handleUpdate}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                 <div>
                   <label className="label">
                     <span className="label-text">Name</span>
                   </label>
                   <input type="text" name="name" placeholder="Enter coffee name" defaultValue={loder.name} className="input input-bordered w-full" />
                 </div>
                 <div>
                   <label className="label">
                     <span className="label-text">Chef</span>
                   </label>
                   <input type="text" name="chef" placeholder="Enter coffee chef" defaultValue={loder.chef} className="input input-bordered w-full" />
                 </div>
                 <div>
                   <label className="label">
                     <span className="label-text">Supplier</span>
                   </label>
                   <input type="text" name="supplier" placeholder="Enter coffee supplier" defaultValue={loder.supplier} className="input input-bordered w-full" />
                 </div>
                 <div>
                   <label className="label">
                     <span className="label-text">Taste</span>
                   </label>
                   <input type="text" name="taste" placeholder="Enter coffee taste" defaultValue={loder.taste} className="input input-bordered w-full" />
                 </div>
                 <div>
                   <label className="label">
                     <span className="label-text">Category</span>
                   </label>
                   <input type="text" name="category" placeholder="Enter coffee category" defaultValue={loder.category} className="input input-bordered w-full" />
                 </div>
                 <div>
                   <label className="label">
                     <span className="label-text">Details</span>
                   </label>
                   <input type="text" name="details" placeholder="Enter coffee details" defaultValue={loder.details} className="input input-bordered w-full" />
                 </div>
                 <div className="md:col-span-2">
                   <label className="label">
                     <span className="label-text">Photo</span>
                   </label>
                   <input type="text" name="photo" placeholder="Enter photo URL" defaultValue={loder.photo} className="input input-bordered w-full" />
                 </div>
               </div>
               <div className="text-center mt-6">
                 <button type="submit" className="btn btn-outline  bg-amber-300 border border-black w-full rancho-regular">
                  Update Coffee Details
                 </button>
               </div>
             </form>
           </div>
    );
};

export default UpdateCoffee;