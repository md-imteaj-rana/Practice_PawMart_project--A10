import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'

const UpdateService = () => {

    const {user} = useContext(AuthContext)

    const {id} = useParams()

    const [service, setService] = useState()

    const [category, setCategory] = useState(service?.category)

    const navigation = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/service/${id}`)
        .then(res => {
            setService(res.data)
            setCategory(res.data.category)
        })
    },[id])

    const handleUpdate = (e) => {
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
    createdAt:service?.createdAt
    };

    axios.put(`http://localhost:3000/update/${id}`, formData)
    .then(res => {
        console.log(res.data)
        alert("Update Successfull.")
        navigation('/MyServices')
    })
    .catch(err => {
        console.log(err)
    })
 }

  return (
    <div>
      <title>Update Listing info</title>

      <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Update Service info</h1>
      
      <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-4 p-6 bg-white shadow rounded-2xl">
        {/* Product/Pet Name */}
        <label className="label text-gray-800 font-semibold">Product / Pet Name</label>
        <input
          defaultValue={service?.name}
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
          defaultValue={category}
          
          
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
          defaultValue={service?.price}
          
          
          className="p-3 border rounded-xl w-full"
          min="0"
        />

        {/* Location */}
        <label className="label text-gray-800 font-semibold">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          defaultValue={service?.location}
          
          
          className="p-3 border rounded-xl w-full"
          required
        />

        {/* Description */}
        <label className="label text-gray-800 font-semibold">Description</label>
        <textarea
          name="description"
          placeholder="Description"
          defaultValue={service?.description}
          
          
          className="p-3 border rounded-xl w-full h-28"
          required
        />

        {/* Image URL */}
        <label className="label text-gray-800 font-semibold">Image URL</label>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          defaultValue={service?.imageurl}
          
          
          className="p-3 border rounded-xl w-full"
          required
        />

        {/* Date */}
        <label className="label text-gray-800 font-semibold">Select date</label>
        <input
          type="date"
          name="date"
          defaultValue={service?.date}
          
          
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
          Update
        </button>
      </form>
    </div>
    </div>
  )
}

export default UpdateService
