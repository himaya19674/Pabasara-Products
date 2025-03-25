import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Navbar1 = () => {
  return (
    <nav className="bg-P text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">SweetDiv</div>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:text-orange-400">Home</a></li>
        <li><a href="order" className="hover:text-orange-400">Order</a></li>
        <li><a href="pay" className="hover:text-orange-400">Pay</a></li>
        <li><a href="res" className="hover:text-orange-400">Resources</a></li>
        <li><a href="pricing" className="hover:text-orange-400">Pricing</a></li>
        <li><a href="db" className="hover:text-orange-400">DashBoard</a></li>
        <li><a href="aboutUs" className="hover:text-orange-400">About Us</a></li>
      </ul>
      <div className='flex gap-8'>
        <a href="/profile"><FaUserCircle  className='text-3xl'/></a>
        <a href='/logout' className="w-32 text-center font-semibold rounded-lg bg-red-700">Logout</a>
      </div>      
    </nav>
  )
}

export default Navbar1;