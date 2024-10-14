import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      {/* Always show the Navbar */}
      <Navbar />

      {/* This is where the content of each route will be displayed */}
      <main>
        <Outlet />
      </main>

      {/* Always show the Navbar */}
      <Footer />
    </div>
  );
};

export default Layout;
