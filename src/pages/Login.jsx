import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import auth from '../firebase/firebase.config'
import { AuthContext } from '../provider/AuthProvider'

const Login = () => {

  const {setUser, handleGoogleSignin} = useContext(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

   const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;

        signInWithEmailAndPassword(auth, email, pass)
          .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setUser(user)
          alert("Login success")
          navigate(location.state ? location.state : '/')
          // ...
        })
        .catch((error) => {
          console.log(error)
          alert(error)
        });

      }
      //console.log(user)

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                <label className="label text-gray-800">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} name='email' type="email" className="input" placeholder="Email" />

                <label className="label text-gray-800">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />

                <div><a className="link text-red-700 underline link-hover">Forgot password?</a></div>
                <div className='underline text-blue-600'><Link to={'/Register'}>New at PawMart? Register now.</Link></div>
                <button className="btn btn-neutral mt-4 bg-gray-800 rounded-lg">Login</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login
