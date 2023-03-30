import React from 'react';
import user from '../../assets/image/user.png'
import './navbar.css'
const Navbar = () => {
    return (
        <nav className='container mx-auto px-4 '>
            <div className="navbar bg-base-100 ">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">DEV TIPS</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <ul className='flex gap-3'>
        <li className='hover:text-[#6047EC]'>Home</li>
        <li className='hover:text-[#6047EC]'>Blog</li>
        <li className='hover:text-[#6047EC]'>About Us</li>
      </ul>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user} />
        </div>
      </label>
    </div>
  </div>
</div>
        </nav>
    );
};

export default Navbar;