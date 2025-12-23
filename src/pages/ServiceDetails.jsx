import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import axios from 'axios'
import Swal from 'sweetalert2'

const ServiceDetail = () => {

  const { id } = useParams()
  const [service, setService] = useState([])
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://paw-mart-a10-backend.vercel.app/service/${id}`)
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

    axios.post('https://paw-mart-a10-backend.vercel.app/orders', formData)
      .then(res => {
        Swal.fire({
          title: "Your order has been placed",
          icon: "success",
          draggable: true
        });
        navigate('/MyOrders')
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      })
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6">
      <title>Listing Details</title>

      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-4 sm:p-8">

        {/* Image */}
        <div className="w-full">
          <img
            className="w-full h-64 sm:h-80 md:h-[420px] object-cover rounded-xl shadow-md"
            src={service?.imageurl}
            alt={service?.name}
          />
        </div>

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="space-y-4">
            <h2 className="font-bold text-2xl sm:text-3xl text-gray-800">
              {service?.name}
            </h2>

            <p className="text-gray-600">
              <span className="font-semibold">Category:</span> {service?.category}
            </p>

            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold block mb-1">Description:</span>
              {service?.description}
            </p>

            <p className="text-gray-600">
              <span className="font-semibold">Provider Email:</span> {service?.email}
            </p>

            <p className="text-gray-600">
              <span className="font-semibold">Location:</span> {service?.location}
            </p>

            <p className="text-gray-600">
              <span className="font-semibold">Listed at:</span> {service?.date}
            </p>
          </div>

          {/* Price + Button */}
          <div className="flex flex-col justify-between bg-gray-50 p-6 rounded-xl shadow-inner">
            <p className="text-3xl font-bold text-gray-800 mb-6">
              {service?.price} tk
            </p>

            <button
              className="w-full py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-all"
              onClick={() => document.getElementById('my_modal_3').showModal()}
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Modal */}
        <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box max-w-2xl rounded-2xl p-4 sm:p-6">

            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">✕</button>
            </form>

            <h3 className="font-bold text-2xl sm:text-3xl text-center mb-6 text-gray-700">
              Order Details
            </h3>

            <form onSubmit={handleOrder} className="space-y-4">

              {/* Item Info */}
              <div className="bg-indigo-50 p-4 rounded-lg text-sm space-y-1">
                <p><strong>Item:</strong> {service?.name}</p>
                <p><strong>Category:</strong> {service?.category}</p>
                <p><strong>Price:</strong> {service?.price} Tk</p>
                <p><strong>Seller Location:</strong> {service?.location}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="font-semibold">Buyer Name</label>
                  <input readOnly name="buyerName" defaultValue={user?.displayName} className="input input-bordered w-full" />
                </div>

                <div>
                  <label className="font-semibold">Email</label>
                  <input readOnly name="email" defaultValue={user?.email} className="input input-bordered w-full" />
                </div>

                <div>
                  <label className="font-semibold">Product ID</label>
                  <input readOnly name="productId" defaultValue={service?._id} className="input input-bordered w-full" />
                </div>

                <div>
                  <label className="font-semibold">Product Name</label>
                  <input readOnly name="productName" defaultValue={service?.name} className="input input-bordered w-full" />
                </div>

                <div>
                  <label className="font-semibold">Phone Number</label>
                  <input name="phoneNumber" required className="input input-bordered w-full" />
                </div>

                <div>
                  <label className="font-semibold">Quantity</label>
                  <input type="number" name="quantity" defaultValue={1} className="input input-bordered w-full" />
                </div>

                <div>
                  <label className="font-semibold">Price</label>
                  <input readOnly name="price" defaultValue={service?.price} className="input input-bordered w-full" />
                </div>

                <div>
                  <label className="font-semibold">Pickup Date</label>
                  <input type="date" name="date" required className="input input-bordered w-full" />
                </div>
              </div>

              <div>
                <label className="font-semibold">Address</label>
                <textarea name="address" required rows="2" className="textarea textarea-bordered w-full" />
              </div>

              <div>
                <label className="font-semibold">Additional Notes</label>
                <textarea name="notes" rows="3" className="textarea textarea-bordered w-full" />
              </div>

              <button type="submit" className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition">
                Submit Order
              </button>

            </form>
          </div>
        </dialog>

      </div>
    </div>
  )
}

export default ServiceDetail
