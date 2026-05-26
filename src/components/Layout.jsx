import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Add specific class to body based on route for navigation styling
    if (location.pathname === '/') {
      document.body.classList.add('home');
      document.body.classList.remove('not-home');
    } else {
      document.body.classList.add('not-home');
      document.body.classList.remove('home');
    }
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
