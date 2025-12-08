import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import axios from 'axios'

const ServiceDetail = () => {

  const { id } = useParams()
  const [service, setService] = useState([])
  const {user} = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:3000/service/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
      .catch(err => console.log(err))
  }, [id])

  const handleOrder = (e) => {
    e.preventDefault()
    const form = e.target;

    const productName = form.productName.value
    const buyerName = form.buyerName.value
    const address = form.address.value
    const phoneNumber = form.phoneNumber.value
    const email = form.email.value
    const price = parseInt(form.price.value)
    const productId = form.productId.value
    const quantity = parseInt(form.quantity.value)
    const date = form.date.value
    const notes = form.notes.value

    const formData = {
        productName,
        buyerName,
        address,
        phoneNumber,
        email,
        price,
        productId,
        quantity,
        date,
        notes,
    }

    axios.post('http://localhost:3000/orders', formData)
    .then(res => {
        console.log(res.data)
        alert('Your order has been placed.')
    })
    .catch(err => {
        console.log(err)
    })

  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <title>Listing Details</title>

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            className="w-full max-h-[420px] object-cover rounded-xl shadow-md"
            src={service?.imageurl}
            alt={service?.name}
          />
        </div>

        {/* Text Content */}
        <div className="mt-8 space-y-4">
          <h2 className="font-bold text-3xl text-gray-800">
            {service?.name}
          </h2>

          <p className="text-lg text-gray-600">
            <span className="font-semibold text-gray-700">Category:</span> {service?.category}
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-700 block mb-1">Description:</span> 
            {service?.description}
          </p>

          <p className="text-lg text-gray-600">
            <span className="font-semibold text-gray-700">Provider Email:</span> {service?.email}
          </p>

          <p className="text-lg text-gray-600">
            <span className="font-semibold text-gray-700">Location:</span> {service?.location}
          </p>

          <p className="text-lg text-gray-600">
            <span className="font-semibold text-gray-700">Listed at:</span> {service?.date}
          </p>

          <p className="text-xl font-bold text-gray-800">
            Price: {service?.price} tk
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button
            className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-900 transition"
            onClick={() => document.getElementById('my_modal_3').showModal()}
          >
            Order Now
          </button>
        </div>

        {/* Modal */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box rounded-xl p-6">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-3xl text-center text-gray-700">Order Details</h3>
            {/* Modal order form */}
            <form onSubmit={handleOrder} className="max-w-xl mx-auto bg-white shadow-xl rounded-xl p-6 mt-10 border">

                {/* Pet Info */}
                <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                    <p><strong>Item/Pet Name :</strong> {service?.name}</p>
                    <p><strong>Category :</strong> {service?.category}</p>
                    <p><strong>Price :</strong> {service?.price}Tk</p>
                    <p><strong>Seller Location :</strong> {service?.location}</p>
                </div>

                <div className="space-y-4">

                    <div>
                    <label className="font-semibold">Buyer Name</label>
                    <input
                        type="text"
                        name='buyerName'
                        readOnly
                        defaultValue={user?.displayName}
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter name"
                    />
                    </div>

                    <div>
                    <label className="font-semibold">Email</label>
                    <input
                        type="email"
                        name='email'
                        readOnly
                        defaultValue={user?.email}
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter your email"
                    />
                    </div>

                    <div>
                    <label className="font-semibold">Product/Listing ID</label>
                    <input
                        type="text"
                        name='productId'
                        readOnly
                        defaultValue={service?._id}
                        className="w-full p-2 border rounded-md"
                        placeholder="Product/Listing ID"
                    />
                    </div>

                    <div>
                    <label className="font-semibold">Product/Listing Name</label>
                    <input
                        type="text"
                        name='productName'
                        readOnly
                        defaultValue={service?.name}
                        className="w-full p-2 border rounded-md"
                        placeholder="Product/Listing Name"
                    />
                    </div>

                    <div>
                    <label className="font-semibold">Phone Number</label>
                    <input
                        type="text"
                        name='phoneNumber'
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter phone number"
                        required
                    />
                    </div>

                    <div>
                    <label className="font-semibold">Quantity</label>
                    <input
                        type="number"
                        name='quantity'
                        defaultValue={1}
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter Quantity"
                    />
                    </div>

                    <div>
                    <label className="font-semibold">Price</label>
                    <input
                        type="number"
                        name='price'
                        readOnly
                        defaultValue={service?.price}
                        className="w-full p-2 border rounded-md"
                        placeholder="Price"
                    />
                    </div>

                    <div>
                    <label className="font-semibold">Address</label>
                    <textarea
                        className="w-full p-2 border rounded-md"
                        name='address'
                        rows="2"
                        placeholder="Enter full address"
                        required
                    ></textarea>
                    </div>

                    <div>
                    <label className="font-semibold">Select PickUp date</label>
                    <input
                    type="date"
                    name="date"
                    
                    
                    className="p-3 border rounded-xl w-full"
                    required
                    />
                    </div>

                    

                    <div>
                    <label className="font-semibold">Additional notes (Optional)</label>
                    <textarea
                        className="w-full p-2 border rounded-md"
                        name='notes'
                        rows="3"
                        placeholder="Write any message or additional notes if you want to add..."
                    ></textarea>
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-2 rounded-xl hover:bg-gray-600 transition"
                    >
                        Submit Order
                    </button>

                </div>

                </form>

            
          </div>
        </dialog>

      </div>
    </div>
  )
}

export default ServiceDetail
