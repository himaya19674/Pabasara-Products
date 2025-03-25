import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full bg-P text-white py-10 px-6 relative">
      <div className="flex justify-around flex-wrap">
        
        <div>
          <h2 className="text-xl font-bold text-orange-600">SweetDiv</h2>
          <p>3939 N 26th Street, Lincoln, Nebraska 68521, USA</p>
          <p>601B IT Tower-1,colombo 07, Sri Lanaka</p>
          <p>contact@sweetdiv.com</p>
        </div>

        <div>
          <h3 className="font-semibold text-orange-600">More information</h3>
          <ul>
            <li><a href="onOrdering">Online Ordering</a></li>
            <li><a href="wSweets">Wholesale Sweets</a></li>
            <li><a href="pSweets">Pick n Mix Sweets</a></li>
            <li><a href="cGifts">Corporate Gifts</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-orange-600">Useful links</h3>
          <ul>
            <li><a href="contactus">Contac Us</a></li>
            <li><a href="p">Pricing</a></li>
            <li><a href="f">FAQs</a></li>
            <li><a href="pPolicy">Privacy Policy</a></li>
            <li><a href="T&C">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-orange-600">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="intstr" className="text-xl hover:text-gray-500"><FaInstagram /></a>
            <a href="fb" className="text-xl hover:text-gray-500"><FaFacebook /></a>
            <a href="twitter" className="text-xl hover:text-gray-500"><FaTwitter /></a>
            <a href="youtube" className="text-xl hover:text-gray-500"><FaYoutube /></a>
            <a href="pinterest" className="text-xl hover:text-gray-500"><FaPinterest /></a>
          </div>
        </div>
      </div>
      
      <button className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600">
        <IoChatbubbleEllipsesSharp size={24} />
      </button>
    </div>
  );
};

export default Footer;
