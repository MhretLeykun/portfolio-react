import React from 'react';
import '../assets/Home.scss';
export default function Navbar() {
  return (
    <div>
      {' '}
      <div className='navbar'>
        <div className='navbar__title'> Mhret Moges</div>
        <div className='navbar__job'>
          Currently Junior front end developer,
          <br /> from A.A
        </div>
        <div className='navbar__country'>
          Based in Ethiopia, <br /> Addis Ababa
        </div>
        <div className='navbar__links'>
          <Link to='/works'>Work</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contact</Link>
        </div>
      </div>
    </div>
  );
}
