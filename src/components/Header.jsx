import React, { useRef } from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import useSticky from 'hooks/useSticky';

const Header = () => {
  const stickyRef = useRef(null);
  const isSticky = useSticky(350);

  return (
    <div className={`sticky-wrapper ${isSticky ? 'is-sticky' : ''}`} ref={stickyRef}>
      <Topbar />
      <Navbar />
    </div>
  );
};

export default Header;
