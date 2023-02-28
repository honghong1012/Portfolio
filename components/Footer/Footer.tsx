function Footer() {
    return (
        <footer
            className="flex justify-center mt-32 mb-16 footer "
        >
            <div className="flex flex-col footer-container gap-3">
                <div className="flex gap-1 text-primary-300 flex justify-center">
                    <a href="mailto:sc.hong1999@gmail.com" className="hover:text-primary-200">Email</a> / 
                    <a href="https://www.linkedin.com/in/scarlett-h-7b283321b/" target="_blank" className="hover:text-primary-200">LinkedIn</a> /
                    <a href="https://github.com/honghong1012" target="_blank" className="hover:text-primary-200">GitHub</a> /
                    <a href="https://www.instagram.com/scarlett_hong1012/" target="_blank" className="hover:text-primary-200">Instagram</a>
                </div>
                <p className="flex text-primary-300 footer-text">
                © 2023 Hong Hong All Rights Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;
