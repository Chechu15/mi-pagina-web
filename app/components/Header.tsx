// src/components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-white text-xl font-bold">Mi Página Web</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white hover:text-blue-200">Home</a></li>
            <li><a href="/about" className="text-white hover:text-blue-200">About</a></li>
            <li><a href="/contact" className="text-white hover:text-blue-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;