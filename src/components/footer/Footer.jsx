import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaMountain } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-12">
          
          {/* Logo and tagline */}
          <div className="">
            <div className="flex items-center space-x-2 mb-4">
              <FaMountain className="text-blue-400 text-2xl" />
              <span className="text-2xl font-bold">KLIMB</span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Helping kids discover their perfect sport match through fun and science.
            </p>
            
            {/* Fun stat */}
            <div className="mt-6 p-3 bg-blue-600 rounded-lg inline-block">
              <p className="font-bold">🚀 5,000+ Kids Matched!</p>
            </div>
          </div>

          {/* Site links */}
         
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Explore</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Tracker</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition">Terms</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Blog</a></li>
              </ul>
            </div>
         
        </div>

        {/* Social media and copyright */}
        <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-white transition text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition text-xl">
              <FaLinkedin />
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} KLIMB Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;