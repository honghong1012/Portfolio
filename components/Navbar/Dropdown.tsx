import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='hamburger-menu'>
      {/* <button className="menu-toggle" onClick={toggleDropdown}>Menu</button> */}
      <div className="hamburger" onClick={toggleDropdown}>
        <div className={`bar1${isOpen ? ' open' : ''}`}></div>
        <div className={`bar2${isOpen ? ' open' : ''}`}></div>
        <div className={`bar3${isOpen ? ' open' : ''}`}></div>
      </div>
      <nav>
        <ul className={`dropdown-menu${isOpen ? ' open' : ''}`}>
          <li>
            <a href="/#home" className="cursor-pointer hover:text-primary-200 hover:underline hover:underline-offset-4">Home</a>
          </li>
          <li>
          <a href="/#about" className="cursor-pointer hover:text-primary-200 hover:underline hover:underline-offset-4">About</a>
          </li>
          <li>
            <a href="Resume.pdf" rel="noopener noreferrer" target="_blank">
              <button className="rounded-md border-2 border-primary-200 px-3 py-1 font-semibold text-primary-100 transition-all hover:bg-primary-200 hover:text-white">
                  Resume
              </button>
            </a>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Dropdown;
