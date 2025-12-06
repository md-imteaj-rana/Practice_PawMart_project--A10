import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router'

const ServiceDetail = () => {

    const {id} = useParams()

    const [services, setServices] = useState([]);
        
            useEffect(() => {
                fetch('/services.json').then(res => res.json()).then(data => setServices(data)).catch(err => console.log(err))
            },[])
    

            
    
    const findRes = services.find(service => service.serviceId == id)
    console.log(findRes)

  return (
    <div>
        <title>Service details</title>
        <div className='flex flex-col justify-center items-center py-10 gap-2'>
            <img className='w-1/2 h-120 object-cover rounded-2xl' src={findRes?.image} alt="" />
            <h2 className='font-bold text-3xl text-gray-800'>Title : {findRes?.serviceName}</h2>
            <h2 className='font-semibold text-xl text-gray-600'>Category : {findRes?.category}</h2>
            <h2 className='font-semibold text-xl text-gray-600'>Description :<br></br> {findRes?.description}</h2>
            <h2 className='font-semibold text-xl text-gray-600'>Ratings : {findRes?.rating}</h2>
            <h2 className='font-semibold text-xl text-gray-600'>Provider name : {findRes?.providerName}</h2>
            <h2 className='font-semibold text-xl text-gray-600'>Provider Email : {findRes?.providerEmail}</h2>
            <h2 className='font-semibold text-xl text-gray-600'>Price : {findRes?.price}</h2>
            
        </div>
    </div>
  )
}

export default ServiceDetail