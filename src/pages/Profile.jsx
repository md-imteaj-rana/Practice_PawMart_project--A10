import { updateProfile } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import auth from '../firebase/firebase.config'
import { AuthContext } from '../provider/AuthProvider'
import Swal from 'sweetalert2'

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
      displayName: name, 
      photoURL: imageurl
    }).then(() => {
      setUser({...user, photoURL: imageurl, displayName: name})
      Swal.fire({
        title: "Profile info updated!",
        icon: "success",
        draggable: true
      });
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-purple-200 via-pink-200 to-yellow-100 flex flex-col items-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-lg flex flex-col items-center transition-transform transform hover:scale-105">
        
        <div className="avatar mb-5">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
            <img src={user?.photoURL} alt="User Avatar" className="object-cover w-full h-full"/>
          </div>
        </div>

        <h2 className='font-extrabold text-3xl md:text-4xl text-gray-800 mb-2'>{user?.displayName}</h2>
        <h2 className='font-semibold text-lg md:text-2xl text-blue-500 mb-5'>Email: {user?.email}</h2>

        <button 
          onClick={handleUpdateform} 
          className="btn px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl shadow-md mb-8 transition-transform transform hover:scale-105"
        >
          Update your profile info!
        </button>

        {isOpen && (
          <form onSubmit={handleUpdateSubmit} className="w-full space-y-4">
            <div>
              <label className="label text-gray-700 font-semibold">Name</label>
              <input 
                defaultValue={user?.displayName} 
                name='name' 
                type="text" 
                placeholder="New name" 
                className="input input-bordered w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="label text-gray-700 font-semibold">PhotoURL</label>
              <input 
                defaultValue={user?.photoURL} 
                name='imageurl' 
                type="text" 
                placeholder="New PhotoURL" 
                className="input input-bordered w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
              />
            </div>

            <button className="btn w-full bg-pink-500 hover:bg-pink-600 text-white rounded-xl shadow-lg transition-transform transform hover:scale-105">
              Update info!
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Profile
