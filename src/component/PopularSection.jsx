import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
import { motion } from "motion/react"

const PopularSection = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://paw-mart-a10-backend.vercel.app/service')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(err => console.log(err))
    },[])

    console.log(services)

  return (
    <div className='mt-24 px-4 sm:px-6 md:px-10 lg:px-16'>
      <div>
        <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl text-center mb-12'>
          Because Every Pet Deserves Love and Care.
        </h2>
      </div>

      {/* card */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 place-items-center'>
        {
          services.slice(0,6).map(service => 
            <motion.div
              key={service?._id}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1, transition: { duration: 0.6 } }}
              className="card bg-base-100 w-full max-w-sm shadow-md hover:shadow-xl rounded-2xl transition-all duration-300"
            >
              <figure className="overflow-hidden rounded-t-2xl">
                <img
                  className='w-full h-56 sm:h-64 md:h-72 object-cover hover:scale-110 transition-transform duration-500'
                  src={service?.imageurl}
                  alt="pet care"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title font-bold text-lg sm:text-xl">
                  {service?.name}
                </h2>

                <p className='text-sm sm:text-base text-gray-500'>
                  {service?.description}
                </p>

                {/* DETAILS — NOT REMOVED */}
                <div className='flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mt-2'>
                  <p className='text-blue-400 font-semibold'>
                    {service?.category}
                  </p>
                  <p className='font-semibold text-purple-600'>
                    Price: {service?.price} tk
                  </p>
                  <p className='font-semibold text-red-600'>
                    Location: {service?.location}
                  </p>
                </div>

                {/* BUTTON — NOT REMOVED */}
                <div className="card-actions flex items-center justify-between mt-4">
                  <Link to={`/details/${service?._id}`}>
                    <button className="btn btn-primary bg-gray-800 border-none shadow-none hover:bg-gray-900 transition">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )
        }
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/Services">
          <button className="btn btn-primary shadow-none bg-gray-800 hover:bg-gray-900 transition mb-5">
            Show All
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PopularSection
