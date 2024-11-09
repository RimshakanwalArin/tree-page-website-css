
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h3 className="logo">CODER</h3>
      <nav>
        <ul className="navList">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contect">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
