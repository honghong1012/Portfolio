import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='hamburger-menu'>
      <div className="hamburger" onClick={toggleDropdown}>
        <div className={`bar1${isOpen ? ' open' : ''}`}></div>
        <div className={`bar2${isOpen ? ' open' : ''}`}></div>
        <div className={`bar3${isOpen ? ' open' : ''}`}></div>
      </div>
      <nav>
        <ul className={`dropdown-menu${isOpen ? ' open' : ''}`}>
            <a href="/#home" className="cursor-pointer font-semibold text-primary-100 hover:text-primary-200 hover:underline hover:underline-offset-4"><li>Home</li></a>
          <a href="/#about" className="cursor-pointer font-semibold text-primary-100 hover:text-primary-200 hover:underline hover:underline-offset-4"><li>About</li></a>
          <a href="/#projects" className="cursor-pointer font-semibold text-primary-100 hover:text-primary-200 hover:underline hover:underline-offset-4"><li>Projects</li></a>
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
