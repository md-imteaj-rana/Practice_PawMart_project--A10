import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddService = () => {

  const {user} = useContext(AuthContext)

  const navigation = useNavigate()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value
    const category = form.category.value
    const price = parseInt(form.price.value)
    const location = form.location.value
    const description = form.description.value
    const imageurl = form.image.value
    const date = form.date.value
    const email = form.email.value


    const formData = {
    name,
    category,
    price,
    location,
    description,
    imageurl,
    date,
    email,
    };

    //console.log(formData)

    axios.post('https://paw-mart-a10-backend.vercel.app/service', formData)
    .then(res => {
        
        if(res.data.acknowledged){
          Swal.fire({
          title: "Item added.",
          icon: "success",
          draggable: true
          });
          form.reset()
        }
        else{
          Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        }
        
        navigation('/Services')
    })
    .catch(err => {
      console.log(err)
      Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
    })
  };

  

  

  return (
    <div className="max-w-3xl mx-auto p-6">
      <title>Add Listing</title>
      <h1 className="text-4xl font-bold mb-6 text-center">Add Listing</h1>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 p-6 bg-white shadow rounded-2xl">
        {/* Product/Pet Name */}
        <label className="label text-gray-800 font-semibold">Product / Pet Name</label>
        <input
          type="text"
          name="name"
          placeholder="Product / Pet Name"
          
          
          className="p-3 border rounded-xl w-full"
          required
        />

        {/* Category */}
        <label className="label text-gray-800 font-semibold">Category</label>
        <select
          name="category"
          
          
          className="p-3 border rounded-xl w-full"
        >
          <option value="Pets">Pets</option>
          <option value="Food">Food</option>
          <option value="Accessories">Accessories</option>
          <option value="Care Products">Care Products</option>
        </select>

        {/* Price (0 if pet) */}
        <label className="label text-gray-800 font-semibold">Price(Tk)</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
          
          
          className="p-3 border rounded-xl w-full"
          min="0"
        />

        {/* Location */}
        <label className="label text-gray-800 font-semibold">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          
          
          className="p-3 border rounded-xl w-full"
          required
        />

        {/* Description */}
        <label className="label text-gray-800 font-semibold">Description</label>
        <textarea
          name="description"
          placeholder="Description"
          
          
          className="p-3 border rounded-xl w-full h-28"
          required
        />

        {/* Image URL */}
        <label className="label text-gray-800 font-semibold">Image URL</label>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          
          
          className="p-3 border rounded-xl w-full"
          required
        />

        {/* Date */}
        <label className="label text-gray-800 font-semibold">Select date</label>
        <input
          type="date"
          name="date"
          
          
          className="p-3 border rounded-xl w-full"
          required
        />

        {/* Email (readonly) */}
        <label className="label text-gray-800 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={user?.email}
          placeholder="Enter your email"
          className="p-3 border rounded-xl w-full"
          readOnly

        />

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 py-3 px-6 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
