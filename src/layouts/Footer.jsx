import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/key-system-logo.png'; // Assuming the same logo as the navbar
import { Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="w-full bg-white dark:bg-gray-900 shadow-inner mt-auto">
    <div className="container mx-auto px-6 py-12">
      {/* Main footer content with columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Column 1: Branding & Logo */}
        <div className="space-y-4">
          <Link to="/" className="inline-block">
            <img src={logo} alt="Key Kissan Logo" className="h-12" />
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Empowering farmers with the financial knowledge to grow and prosper.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="font-bold text-gray-800 dark:text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a></li>
            <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</a></li>
            <li><a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</a></li>
            <li><a href="#testimonials" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Testimonials</a></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="space-y-4">
          <h4 className="font-bold text-gray-800 dark:text-white">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#privacy" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="space-y-4">
          <h4 className="font-bold text-gray-800 dark:text-white">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Key Kissan. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;