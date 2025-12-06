import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { motion } from "motion/react"
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const Services = () => {
    const [services, setServices] = useState([]);
    
        useEffect(() => {
            fetch('/services.json').then(res => res.json()).then(data => setServices(data)).catch(err => console.log(err))
        },[])
  return (
    <div className='my-10 px-5 pl-13 mb-20'>
        <title>Services</title>
        <h2 className='font-bold text-4xl text-center mb-10'>Find Your Furry Friend Today!</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-6'>
        {
            services.map(service => 
                <motion.div initial={{ scale: 0.6 }} animate={{scale: 1,transition: { duration: 1 }}} className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img className='w-full h-80 object-cover'
                    src={service?.image}
                    alt="pet care" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service?.serviceName}</h2>
                    <p>{service?.description}</p>
                    <div className='flex items-center'>
                        <p className='text-blue-400 font-semibold flex items-center gap-1'>{service?.rating}<FaStar /></p>
                        <p className='font-semibold text-purple-600'>Price: {service?.price}</p>
                        <p className='font-semibold text-red-600'>{service?.providerName}</p>
                    </div>
                    <div className="card-actions flex items-center justify-between mt-4">
                    <Link to={`/details/${service?.serviceId}`}><button className="btn btn-primary bg-gray-800 border-none shadow-none">View Details</button></Link>
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
