import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MyOrders = () => {
    const [MyOrders, setMyOrders] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/orders')
        .then(res => {
            setMyOrders(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
  return (
    <div>
      <title>My Orders</title>
        <h2 className='text-3xl font-bold text-center text-gray-700 my-5 underline'>My Orders</h2>
        {/*table starts */}

        <div className="overflow-x-auto">
            <table className="table table-md">
                <thead>
                <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Buyer Name</th>
                    <th>Buyer Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Pickup date</th>
                    <th>Additional note</th>
                </tr>
                </thead>
                <tbody>

                    {
                        MyOrders.map((order, index) => 
                            <tr>
                            <th>{index + 1}</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                            </tr>
                        )
                    }
                
                </tbody>
            </table>
            </div>
        
      {/*table ends */}
    </div>
  )
}

export default MyOrders
