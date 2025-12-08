import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';

const MyServices = () => {

    const [Myservices, setMyServices] = useState([]);

    const {user} = useContext(AuthContext)

    const navigation = useNavigate()
        
            useEffect(() => {
                fetch(`http://localhost:3000/MyServices?email=${user?.email}`).then(res => res.json()).then(data => setMyServices(data)).catch(err => console.log(err))
            },[user?.email])
    

    const handleDelete = (id) => {
      axios.delete(`http://localhost:3000/delete/${id}`)
      .then(res => {
        console.log(res.data)
        alert("Deletion successful.")
        const filterData = MyServices.filter(service => service._id != id)
        setMyServices(filterData)
        navigation('/MyServices')
      })
      .catch(err => {
        console.log(err)
      })
    }
    
  return (
    <div className='pl-10 py-10'>
      <title>My Listings</title>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              Myservices?.map(service => (<tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={service?.imageurl}
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{service?.name}</div>
                    <div className="text-sm opacity-50">{service?.location}</div>
                  </div>
                </div>
              </td>
              <td>
                <p>{service?.description}</p>
              </td>
              <td>{service?.category}</td>
              <td>{service?.price}</td>
              <th className='flex gap-2 items-center'>
                <button onClick={() => handleDelete(service?._id)} className="btn btn-error btn-xs text-white p-3">Delete</button>
                <Link to={`/UpdateService/${service?._id}`}><button className="btn btn-primary btn-xs p-3">Edit</button></Link>
              </th>
            </tr>))
            }
            
          </tbody>
          
        </table>
      </div>
    </div>
  )
}

export default MyServices
