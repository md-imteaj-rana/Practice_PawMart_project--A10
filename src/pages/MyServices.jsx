import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';

const MyServices = () => {

    const [Myservices, setMyServices] = useState([]);

    const {user} = useContext(AuthContext)
        
            useEffect(() => {
                fetch(`http://localhost:3000/MyServices?email=${user?.email}`).then(res => res.json()).then(data => setMyServices(data)).catch(err => console.log(err))
            },[user?.email])
    
    
  return (
    <div>
      
    </div>
  )
}

export default MyServices
