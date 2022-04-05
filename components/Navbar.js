import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link href='/'>
        <a className='navbar-brand'>All Notes</a>
      </Link>
      <Link href='/new'>
        <a className='create-note'>Create Note</a>
      </Link>
    </nav>
  );
}

export default Navbar;
