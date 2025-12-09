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
        <h2 className='text-3xl font-bold text-center my-5 underline'>My Orders</h2>
        {/*table starts */}

        <div className="overflow-x-auto">
            <table className="table table-md">
                <thead>
                <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Price(TK)</th>
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
                            <td>{order?.productName}</td>
                            <td>{order?.price}</td>
                            <td>{order?.quantity}</td>
                            <td>{order?.buyerName}</td>
                            <td>{order?.email}</td>
                            <td>{order?.phoneNumber}</td>
                            <td>{order?.address}</td>
                            <td>{order?.date}</td>
                            <td>{order?.notes}</td>
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
