import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, pullUser] = useState('');
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };


  useEffect(() => {
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header
        id="navbar"
        className="fixed inset-x-0 top-0 z-10 transition duration-100 ease-in-out bg-gray-900 bg-opacity-0 backdrop-filter backdrop-blur-md"
      >
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <h1 className="text-3xl font-bold hover:text-[#DFA175] hover:scale-105 transition duration-200 ease-in-out text-gray-200">
              <Link to="/">
                TightRope
              </Link>
            </h1>
          </div>
  
        </nav>
      </header>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
