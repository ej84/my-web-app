import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2 flex items-center justify-center mt-5">
      <div className="mx-auto p-4 md:flex items-center justify-center">
        <span className="mb-3 px-3 text-sm sm:text-center">&copy; {new Date().getFullYear()} Your Website. All rights reserved.</span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li><p class="mr-4 md:mr-6">Email Address: jmw9871@gmail.com</p></li>
          <li><p class="mr-4 md:mr-6">Contact Number: 1 + (000) - 000 - 0000</p></li>
          <li><p class="mr-4 md:mr-6">Created by Richard Jeong</p></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
