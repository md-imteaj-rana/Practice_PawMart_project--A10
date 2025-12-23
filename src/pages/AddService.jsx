import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const location = form.location.value;
    const description = form.description.value;
    const imageurl = form.image.value;
    const date = form.date.value;
    const email = form.email.value;

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

    axios
      .post("https://paw-mart-a10-backend.vercel.app/service", formData)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Item added.",
            icon: "success",
            draggable: true,
          });
          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
        navigation("/Services");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center py-8 px-4 sm:px-6">
      <div className="w-full max-w-3xl">
        <title>Add Listing</title>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-gray-800">
          Add Listing
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 p-6 bg-white shadow-2xl rounded-3xl"
        >
          {/* Product/Pet Name */}
          <label className="font-semibold text-gray-800">Product / Pet Name</label>
          <input
            type="text"
            name="name"
            placeholder="Product / Pet Name"
            className="p-3 border rounded-2xl w-full focus:ring-2 focus:ring-indigo-400 outline-none transition"
            required
          />

          {/* Category */}
          <label className="font-semibold text-gray-800">Category</label>
          <select
            name="category"
            className="p-3 border rounded-2xl w-full focus:ring-2 focus:ring-indigo-400 outline-none transition"
          >
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>

          {/* Price */}
          <label className="font-semibold text-gray-800">Price(Tk)</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="p-3 border rounded-2xl w-full focus:ring-2 focus:ring-indigo-400 outline-none transition"
            min="0"
          />

          {/* Location */}
          <label className="font-semibold text-gray-800">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="p-3 border rounded-2xl w-full focus:ring-2 focus:ring-indigo-400 outline-none transition"
            required
          />

          {/* Description */}
          <label className="font-semibold text-gray-800">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            className="p-3 border rounded-2xl w-full h-28 focus:ring-2 focus:ring-indigo-400 outline-none transition"
            required
          />

          {/* Image URL */}
          <label className="font-semibold text-gray-800">Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="p-3 border rounded-2xl w-full focus:ring-2 focus:ring-indigo-400 outline-none transition"
            required
          />

          {/* Date */}
          <label className="font-semibold text-gray-800">Select date</label>
          <input
            type="date"
            name="date"
            className="p-3 border rounded-2xl w-full focus:ring-2 focus:ring-indigo-400 outline-none transition"
            required
          />

          {/* Email */}
          <label className="font-semibold text-gray-800">Email</label>
          <input
            type="email"
            name="email"
            value={user?.email}
            placeholder="Enter your email"
            className="p-3 border rounded-2xl w-full bg-gray-100 cursor-not-allowed"
            readOnly
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 py-3 px-6 bg-gray-800 text-white font-semibold rounded-2xl shadow-lg hover:bg-gray-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
