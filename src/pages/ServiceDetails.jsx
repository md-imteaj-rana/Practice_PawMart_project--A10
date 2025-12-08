import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ServiceDetail = () => {

  const { id } = useParams()
  const [service, setService] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/service/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
      .catch(err => console.log(err))
  }, [id])

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
            <h3 className="font-bold text-2xl">Order Service</h3>
            <p className="py-4 text-gray-600">
              This is a demo modal. You can add your order form here.
            </p>
          </div>
        </dialog>

      </div>
    </div>
  )
}

export default ServiceDetail
