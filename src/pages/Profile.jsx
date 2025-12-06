import { updateProfile } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import auth from '../firebase/firebase.config'
import { AuthContext } from '../provider/AuthProvider'

const Profile = () => {

  const {setUser, user} = useContext(AuthContext)

  const [isOpen, setIsOpen] = useState(false)

  const handleUpdateform = () => {
    setIsOpen(!isOpen)
  }

  const handleUpdateSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const imageurl = e.target.imageurl.value;

    updateProfile(auth.currentUser, {
            displayName: name, photoURL: imageurl
            }).then(() => {
                setUser({...user, photoURL: imageurl, displayName: name})
            // Profile updated!
            // ...
            }).catch((error) => {
                console.log(error)
            // An error occurred
            // ...
            });
  }

  return (
    <div>
      <title>User Profile</title>

      <div className='flex flex-col justify-center items-center py-10'>
        <div className="avatar">
          <div className="w-65 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <h2 className='font-bold text-4xl my-3 text-gray-800'>{user?.displayName}</h2>
        <h2 className='font-semibold text-2xl mb-5 text-blue-500'>Email : {user?.email}</h2>
        <button onClick={handleUpdateform} className="btn px-6 btn-primary shadow-none bg-gray-800 mb-10">Update your profile info!</button>

        {
          isOpen && (
              <form onSubmit={handleUpdateSubmit} className="fieldset">
                
                <label className="label text-gray-800">Name</label>
                <input defaultValue={user?.displayName} name='name' type="text" className="input" placeholder="New name" />

                <label className="label text-gray-800">PhotoURL</label>
                <input defaultValue={user?.photoURL} name='imageurl' type="text" className="input" placeholder="New PhotoURL" />
                
                
                <button className="btn btn-neutral mt-4 bg-gray-800">Update info!</button>
                
                </form>
          )
        }
        
      </div>
    </div>
  )
}

export default Profile