import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { motion } from "motion/react"
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const Services = () => {
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState('')
    
    useEffect(() => {
        fetch(`https://paw-mart-a10-backend.vercel.app/service?category=${category}`)
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(err => console.log(err))
    }, [category])

  return (
    <div className='my-10 px-4 sm:px-6 lg:px-12 mb-20'>
        <title>Pets & Supplies</title>

        <h2 className='font-bold text-3xl sm:text-4xl text-center mb-10'>
          Find Your Furry Friend Today!
        </h2>

        {/* filter by category */}
        <div className="flex justify-center mb-6">
          <select 
            onChange={(e) => setCategory(e.target.value)} 
            defaultValue="Filter by Category" 
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled={true}>Filter by Category</option>
            <option value=''>All items</option>
            <option value='Pets'>Pets</option>
            <option value='Food'>Food</option>
            <option value='Accessories'>Accessories</option>
            <option value='Care Products'>Care Products</option>
          </select>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {
            services.map(service => 
                <motion.div 
                  key={service?._id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
                  whileHover={{ scale: 1.03 }}
                  className="card bg-base-100 w-full shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden"
                >
                  <figure className="overflow-hidden">
                      <img 
                        className='w-full h-64 sm:h-72 object-cover hover:scale-110 transition-transform duration-500'
                        src={service?.imageurl}
                        alt="pet care" 
                      />
                  </figure>

                  <div className="card-body">
                      <h2 className="card-title text-lg sm:text-xl">
                        {service?.name}
                      </h2>

                      <p className="text-sm text-gray-600">
                        {service?.description}
                      </p>

                      <div className='flex flex-wrap gap-2 mt-2 text-sm'>
                          <p className='text-blue-500 font-semibold'>
                            {service?.category}
                          </p>
                          <p className='text-purple-600 font-semibold'>
                            Price: {service?.price} tk
                          </p>
                          <p className='text-red-500 font-semibold'>
                            Location: {service?.location}
                          </p>
                      </div>

                      <div className="card-actions mt-4">
                        <Link to={`/details/${service?._id}`} className="w-full">
                          <button className="btn w-full bg-gray-900 hover:bg-gray-800 text-white border-none">
                            View Details
                          </button>
                        </Link>
                      </div>
                  </div>
                </motion.div>
            )
        }
        </div>
    </div>
  )
}

export default Services
