import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
        <Navbar />
      <div className='flex justify-center items-center'>
        <div className='mb-6 text-center w-[60%] '>
          <h1 className='my-6 text-2xl font-black text-black'>About us</h1>
          <p className="text-gray-800 text-center mb-6">
            Welcome to <span className="font-semibold">Sweet Delights</span>, your one-stop destination for delicious,
            high-quality sweets delivered right to your doorstep! Our mission is to bring you the finest selection of traditional and modern sweets,
            crafted with love and the best ingredients.
          </p>
          <p className="text-gray-800 mb-4">
            At <span className="font-semibold">Sweet Delights</span>, we believe that sweets are more than just treats – they are a part of celebrations,
            cherished moments, and sweet memories. Whether you're craving classic candies, handmade chocolates, or festive sweets,
            we have something to satisfy every sweet tooth.
          </p>
          <p className="text-gray-800 mb-4">
            Our easy-to-use online ordering system ensures a seamless experience, allowing you to browse, customize, and order your favorite sweets with just a few clicks.
            With fast delivery, secure payment options, and a commitment to freshness, we guarantee an exceptional service every time you order.
          </p>
          <p className="text-gray-800 text-center font-semibold">
            Join us in spreading sweetness and making every moment special with <span className="text-P">Sweet Delights</span>!
          </p>
        </div>
    </div>
     <Footer />
    </div>
  )
}

export default AboutUs;
