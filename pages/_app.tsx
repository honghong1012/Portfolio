import type { AppProps } from "next/app";
import Head from "next/head";
// CSS
import "../styles/globals.css";
// Assets
import Icon from "public/Navbar/icon.png";
// Components
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";


if (typeof window !== 'undefined'){
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show')
                console.log(entry)
            }
        })
    });
    const titleObserver = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('project-show')
                console.log(entry)
            }
        })
    });

    const hiddenElements = document.querySelectorAll('.hide');
    const titleHideElements = document.querySelectorAll('.project-hide');

    hiddenElements.forEach((el) => observer.observe(el));
    titleHideElements.forEach((el) => titleObserver.observe(el));
};


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href={Icon.src}
                />
                <link
                    rel="apple-touch-icon"
                    type="image/x-icon"
                    href={Icon.src}
                />
                <title>Hong Hong</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,viewport-fit=cover"
                />
                <meta property="og:type" content="website" />
            </Head>

            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
