// Components
import Dropdown from "./Dropdown";
import NavItems from "./NavItems";

function Navbar() {
    return (
        <div className="navigation-bar">
            <div className="mx-auto w-11/12 max-w-7xl pt-6 flex items-center justify-between">
                <div className="sduration-300 hover:-translate-y-1 hover:cursor-pointer sm:inline-block">
                    <span className="navbar-icon"><a href="/">Scarlett H.</a></span>
                </div>
                <NavItems />
                <Dropdown />
            </div>
        </div>
    );
}

export default Navbar;
