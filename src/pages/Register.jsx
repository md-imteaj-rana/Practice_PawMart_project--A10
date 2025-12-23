import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import Swal from 'sweetalert2';

const Register = () => {
  const {registerWithEmailPassword, setUser, handleGoogleSignin} = useContext(AuthContext);

  const location = useLocation()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const imageurl = e.target.imageurl.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const number = /[0-9]/;           
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if(pass.length < 6){
      return alert("Password length can not be less than 6!!!")
    }
    if(!uppercase.test(pass)){
      return alert("You must use uppercase letters in your password.")
    }
    if(!lowercase.test(pass)){
      return alert("You must use lowercase letters in your password.")
    }
    if (!number.test(pass)) {
      return alert("You must include at least one number.");
    }
    if (!specialChar.test(pass)) {
      return alert("You must include at least one special character.");
    }

    registerWithEmailPassword(email, pass)
    .then((userCredential) =>{
        updateProfile(auth.currentUser, {
        displayName: name, photoURL: imageurl
        }).then(() => {
            setUser(userCredential.user)
            Swal.fire({
              title: "Registration successful",
              icon: "success",
              draggable: true
            });
            navigate(location.state ? location.state : '/')
        }).catch((error) => {
            console.log(error)
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
        });
    })
    .catch((error) => {
      console.log(error)
    });
  }   

  const googleSignup = () => {
    handleGoogleSignin()
    .then(result => {
      const user = result.user
      setUser({...user, photoURL: user.photoURL, displayName: user.displayName})
      navigate(location.state ? location.state : '/')
      Swal.fire({
        title: "Registration successful",
        icon: "success",
        draggable: true
      });
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-purple-200 via-pink-200 to-yellow-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 md:p-12 transition-transform transform hover:scale-105 duration-500">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6">
          Welcome to the <span className="text-pink-500">PawMart</span> family! 🐾
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label text-gray-700 font-semibold">Name</label>
            <input name='name' type="text" placeholder="Enter your name" required
              className="input input-bordered w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"/>
          </div>
          <div>
            <label className="label text-gray-700 font-semibold">Image URL</label>
            <input name='imageurl' type="text" placeholder="Image URL"
              className="input input-bordered w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"/>
          </div>
          <div>
            <label className="label text-gray-700 font-semibold">Email</label>
            <input name='email' type="email" placeholder="Email" required
              className="input input-bordered w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"/>
          </div>
          <div>
            <label className="label text-gray-700 font-semibold">Password</label>
            <input name='password' type="password" placeholder="Password" required
              className="input input-bordered w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"/>
          </div>
          <div className="text-right">
            <Link to={'/Login'} className="text-blue-600 hover:underline text-sm md:text-base">Already have an account? Login now.</Link>
          </div>
          <button className="btn w-full bg-pink-500 hover:bg-pink-600 text-white rounded-xl mt-4 shadow-lg transition-transform transform hover:scale-105">
            Sign Up
          </button>
          <button type="button" onClick={googleSignup}
            className="btn w-full flex items-center justify-center bg-white text-gray-800 border border-gray-300 rounded-xl mt-2 shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            <svg aria-label="Google logo" width="20" height="20" className="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Signup with Google
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
