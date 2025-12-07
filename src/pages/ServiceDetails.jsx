import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router'

const ServiceDetail = () => {

    const {id} = useParams()

    const [service, setService] = useState([]);
        
            useEffect(() => {
                fetch(`http://localhost:3000/service/${id}`).then(res => res.json()).then(data => setService(data)).catch(err => console.log(err))
            },[id])
    

            
    
    

  return (
    <div>
        <title>Service details</title>
        <div className='flex flex-col justify-center items-center py-10 gap-2'>
            <img className='w-1/2 h-120 object-cover rounded-2xl' src={service?.image} alt="" />
            <h2 className='font-bold text-3xl text-gray-800'>Title : {service?.name}</h2>
            <h2 className='font-semibold text-xl text-gray-600'>Category : {service?.category}</h2>
            <h2 className='font-semibold text-xl text-gray-600'>Description :<br></br> {service?.description}</h2>
            {/* <h2 className='font-semibold text-xl text-gray-600'>Ratings : {service?.rating}</h2>
            <h2 className='font-semibold text-xl text-gray-600'>Provider name : {service?.providerName}</h2> */}
            <h2 className='font-semibold text-xl text-gray-600'>Provider Email : {service?.email}</h2>
            <h2 className='font-semibold text-xl text-gray-600'>Price : {service?.price} tk</h2>
            <button className="btn btn-primary bg-gray-800 border-none shadow-none"><a target='blank'>Book Now</a></button>
        </div>
    </div>
  )
}

export default ServiceDetail