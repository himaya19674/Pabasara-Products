import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Assuming you have these components
import Navbar1 from '../components/Navbar1'; // Authenticated user navbar
import Footer from '../components/Footer';
import bg from '../assets/Sweets.jpg'; // Using same background as login

export default function Home() {
  const [isUserAvailable, setIsUserAvailable] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = () => {
      try {
        // Check if userId exists in localStorage from login
        const userId = localStorage.getItem('userId');
        setIsUserAvailable(!!userId); // Convert to boolean
      } catch (error) {
        console.error('Error checking user:', error);
        setIsUserAvailable(false);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-black">
        Loading...
      </div>
    );
  }

  return (
    <div>
      {isUserAvailable ? <Navbar /> : <Navbar1 />}
      <div 
        className="relative h-screen flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to SweetDiv</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empower your sweets business with a custom website and app,
            offering no commission fees,<br/> full control over your customer data,
            and a seamless ordering experience. Let your customers enjoy their 
            favorite sweets with ease,<br/> while you manage everything on your terms.
          </p>
          {isUserAvailable && (
            <button className="mt-6 px-6 py-2 border border-white bg-transparent rounded-md font-bold text-white hover:bg-white hover:text-black transition-colors">
              Go to Dashboard
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}