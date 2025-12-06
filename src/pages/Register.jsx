import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Register = () => {
  const {registerWithEmailPassword, setUser} = useContext(AuthContext);

  const location = useLocation()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const name = e.target.name.value;
        const imageurl = e.target.imageurl.value;

        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/
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
            //const user = userCredential.user
            updateProfile(auth.currentUser, {
            displayName: name, photoURL: imageurl
            }).then(() => {
                setUser(userCredential.user)
                alert("Registration successful")
                navigate(location.state ? location.state : '/')
            // Profile updated!
            // ...
            }).catch((error) => {
                console.log(error)
                alert(error)
            // An error occurred
            // ...
            });
        })
        .catch((error) => {
        console.log(error)
        alert(error)
         });

  }      
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5">Welcome to the PawMart family!!🥳</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                <label className="label text-gray-800">Name</label>
                <input name='name' type="text" className="input" placeholder="Enter your name" />

                <label className="label text-gray-800">Image URL</label>
                <input name='imageurl' type="text" className="input" placeholder="Image URL" />

                <label className="label text-gray-800">Email</label>
                <input name='email'type="email" className="input" placeholder="Email" />

                <label className="label text-gray-800">Password</label>
                <input name='password'type="password" className="input" placeholder="Password" />
                
                <div className='underline text-blue-600'><Link to={'/Login'}>Already have an account? Login now.</Link></div>
                <button className="btn btn-neutral mt-4 bg-gray-800 rounded-lg">Sign Up</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Register
