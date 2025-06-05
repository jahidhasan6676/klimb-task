import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaMountain } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links data
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Tracker', path: '/tracker' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const handleGetStartedClick = () => {
    // Scroll to quiz section or open quiz launcher
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-white py-3 shadow-sm z-50">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo with icon */}
          <div className="flex items-center space-x-2">
            <FaMountain className="text-blue-600 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">KLIMB</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-[17px] font-medium">
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

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="block text-gray-600 hover:text-gray-900 text-[17px] transition-colors py-2 px-2 rounded hover:bg-gray-50"
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