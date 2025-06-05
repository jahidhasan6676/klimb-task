import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaMountain } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/' },
    { name: 'Tracker', path: '/' },
    { name: 'Testimonials', path: '/' },
  ];

  const handleGetStartedClick = () => {
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Listen to scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 py-3 z-50 transition-colors duration-300 ${scrolled || isOpen ? 'bg-white border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="w-11/12 mx-auto ">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaMountain className="text-blue-600 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">KLIMB</h2>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className=" text-gray-600 hover:text-blue-500 transition-colors text-[17px] font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={handleGetStartedClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute w-full left-0 right-0 md:hidden bg-white py-4">
            <ul className="flex flex-col space-y-2 w-11/12 mx-auto">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="block text-gray-600 hover:text-blue-500 text-[17px] transition-colors py-2  rounded hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleGetStartedClick}
                  className="w-fit text-left bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
