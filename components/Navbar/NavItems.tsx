function NavItems() {
    return (
        <nav className="menu">
            <ul className="flex font-semibold gap-8 items-center justify-between">
                <li>
                    <a href="/#home" className="cursor-pointer hover:text-primary-200 hover:underline hover:underline-offset-4">Home</a>
                </li>
                <li>
                    <a href="/#about" className="cursor-pointer hover:text-primary-200 hover:underline hover:underline-offset-4">About</a>
                </li>
                <li>
                    <a href="/#projects" className="cursor-pointer hover:text-primary-200 hover:underline hover:underline-offset-4">Projects</a>
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
    );
}

export default NavItems;
