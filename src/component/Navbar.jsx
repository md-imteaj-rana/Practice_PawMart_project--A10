import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import { signOut } from 'firebase/auth'
import auth from '../firebase/firebase.config'

const Navbar = () => {
  const { user } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const [isChecked, setIsChecked] = useState(true)

  const handleTheme = () => {
    setIsChecked(!isChecked)

    if (isChecked) {
      document.querySelector('html').setAttribute('data-theme', 'dark')
    } else {
      document.querySelector('html').setAttribute('data-theme', 'light')
    }
  }

  const handleSignOut = () => {
    signOut(auth)
    alert("Logout success.")
    navigate(location.state - '/')
  }

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100/90 backdrop-blur-md shadow-md px-4 sm:px-6 lg:px-10">
        
        {/* Left */}
        <div className="navbar-start gap-2">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-xl z-10 mt-3 w-56 p-3 shadow-lg space-y-1">
              <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
              <li><Link to="/Services" className="hover:text-pink-500">Pets & Supplies</Link></li>
              {user && (
                <>
                  <li><Link to="/Profile">My Profile</Link></li>
                  <li><Link to="/AddService">Add Listing</Link></li>
                  <li><Link to="/MyServices">My Listings</Link></li>
                  <li><Link to="/MyOrders">My Orders</Link></li>
                </>
              )}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            <span className="text-pink-500">Paw</span>Mart
          </Link>

          {/* Theme Toggle */}
          <label className="toggle text-base-content ml-1 scale-90 sm:scale-100">
            <input onClick={handleTheme} type="checkbox" className="theme-controller" />

            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2"
                fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </g>
            </svg>

            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2"
                fill="none" stroke="currentColor">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </g>
            </svg>
          </label>
        </div>

        {/* Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 text-[15px] font-medium">
            <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
            <li><Link to="/Services" className="hover:text-pink-500">Pets & Supplies</Link></li>
            {user && (
              <>
                <li><Link to="/Profile">My Profile</Link></li>
                <li><Link to="/AddService">Add Listing</Link></li>
                <li><Link to="/MyServices">My Listings</Link></li>
                <li><Link to="/MyOrders">My Orders</Link></li>
              </>
            )}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-sm sm:btn-md px-5 bg-gray-800 hover:bg-pink-500 transition-all duration-300 text-white rounded-full">
              Logout
            </button>
          ) : (
            <Link
              to="/Login"
              className="btn btn-sm sm:btn-md px-6 bg-gray-800 hover:bg-pink-500 transition-all duration-300 text-white rounded-full">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
