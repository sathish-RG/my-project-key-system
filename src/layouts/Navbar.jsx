import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeIcon from '../components/ThemIcone'; // Corrected typo from 'ThemIcone'
import logo from '../assets/key-system-logo.png';
import { Menu, X } from 'lucide-react'; // Icons for the hamburger menu

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  // State to manage whether the mobile menu is open or not
  const [isOpen, setIsOpen] = useState(false);

  // Common class names for nav links to reduce repetition
  const navLinkClasses = "text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300";

  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            {/* Note: w-30 is not a default Tailwind class. You might prefer w-28 or w-32. */}
            <img src={logo} alt="Key Kissan Logo" className='w-32 h-13' />
          </Link>

          {/* Desktop Menu & Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className={navLinkClasses}>Home</a>
            <a href="#about" className={navLinkClasses}>About</a>
            <a href="#features" className={navLinkClasses}>Contacts</a>
            <a href="#features" className={navLinkClasses}>Features</a>
            <a href="#login" className={navLinkClasses}>Login</a>
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle Dark Mode"
            >
              <ThemeIcon isDarkMode={isDarkMode} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
              aria-label="Toggle Dark Mode"
            >
              <ThemeIcon isDarkMode={isDarkMode} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (conditionally rendered) */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col items-center space-y-4">
              <a href="#home" className={navLinkClasses} onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" className={navLinkClasses} onClick={() => setIsOpen(false)}>About</a>
              <a href="#features" className={navLinkClasses} onClick={() => setIsOpen(false)}>Contacts</a>
              <a href="#features" className={navLinkClasses} onClick={() => setIsOpen(false)}>Features</a>
              <a href="#testimonials" className={navLinkClasses} onClick={() => setIsOpen(false)}>Testimonials</a>
              <a href="#login" className={navLinkClasses} onClick={() => setIsOpen(false)}>Login</a>
              <button className="w-full bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;