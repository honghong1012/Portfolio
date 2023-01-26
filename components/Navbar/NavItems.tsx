import Link from "next/link";

function NavItems() {
    return (
        <div className="flex gap-8 font-semibold items-center justify-between">
            <a href="/#home" className="cursor-pointer hover:text-primary-200 hover:underline hover:underline-offset-4">Home</a>
            <a href="/#about" className="cursor-pointer hover:text-primary-200 hover:underline hover:underline-offset-4">About</a>
            <a href="/#projects" className="cursor-pointer hover:text-primary-200 hover:underline hover:underline-offset-4">Projects</a>
            <a href="Resume.pdf" rel="noopener noreferrer" target="_blank">
                <button className="rounded-md border-2 border-primary-200 px-3 py-1 font-semibold text-primary-100 transition-all hover:bg-primary-200 hover:text-white">
                    Resume
                </button>
            </a>
        </div>
    );
}

export default NavItems;
