import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2 flex items-center justify-center mt-5">
      <nav className="flex items-center space-x-2 space-y-3 mt-3">
        <ul className="flex space-x-5">
        <li>Created by Richard Jeong</li>
        <li>Email Address: jmw9871@gmail.com</li>
        <li>Contact Number: 1 + (000) - 000 - 0000</li>
        <li>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
