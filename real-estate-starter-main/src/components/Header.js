import React from 'react';

//import link
import {Link} from 'react-router-dom';

//import logo
import logoo from '../assets/img/logoo.PNG';

import Login from '../pages/Login.js';
import Register from '../pages/Register.js';
const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link to='/'>
          <img src={logoo} style={{height: 55, width: 190}} alt='' />
        </Link>
        {/* buttons */}
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/'>Home</Link>
          {/* <Link className='hover:text-violet-900 transition' to='/About'>About</Link> */}
          <Link className='hover:text-violet-900 transition' to='/Houses'>Houses</Link>
          <Link className='hover:text-violet-900 transition' to='/Login'>Log in</Link>
          <Link className='bg-green-600 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='Register'>Sign up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
