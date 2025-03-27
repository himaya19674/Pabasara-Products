import Navbar from '../components/Navbar'; // Assuming you have these components
import Footer from '../components/Footer';
import bg from '../assets/Sweets.jpg'; // Using same background as login

export default function Welcome() {
  
  return (
    <div>
      <Navbar />
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
          
            <button className="mt-6 px-6 py-2 border border-white bg-transparent rounded-md font-bold text-white hover:bg-white hover:text-black transition-colors">
              Go to Dashboard
            </button>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}