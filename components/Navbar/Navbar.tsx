import Image from "next/image";
// Assets
import LogoS from "public/Navbar/LogoS.svg";
import LogoG from "public/Navbar/LogoG.svg";
// Components
import NavItems from "./NavItems";

function Navbar() {
    return (
        <nav>
            <div className="mx-auto w-11/12 max-w-7xl pt-6 sm:flex sm:items-center sm:justify-between">
                <div className="sduration-300 hover:-translate-y-1 hover:cursor-pointer sm:inline-block">
                    <span className="navbar-icon">Scarlett H.</span>
                </div>
                <NavItems />
                <button className="hamburger" type="button" name="menu button">
				    <div className="menu-bar">
				    </div>
			    </button>
            </div>
        </nav>
    );
}

export default Navbar;
