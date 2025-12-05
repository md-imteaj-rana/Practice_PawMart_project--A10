import React from 'react'
import { Link } from 'react-router'

const Register = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-5">Welcome to the PawMart family!!🥳</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                
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
