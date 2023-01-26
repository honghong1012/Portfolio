import Image from "next/image";
// Assets

import Typewriter from "typewriter-effect";
import Gmail from "public/FirstSection/gmail.svg"
import Linkedin from "public/FirstSection/linkedin.svg"
import Instagram from "public/FirstSection/instagram.svg"
import Github from "public/FirstSection/github.svg"

function FirstSection() {
    return (
        <section  id="home">
                    <main className="calc-height flex w-full items-center py-20">
            <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between gap-20">
                <div className="flex w-full cursor-default flex-col gap-3">
                    <div className="hide text-6xl text-primary-200">
                    <Typewriter
                        options={{
                            strings: ['Hey there', '你好','안녕하세요'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </div>
                    <h1 className="hide title-name text-6xl font-bold text-primary-100">
                        Scarlett Hong.
                    </h1>
                    <p className="hide delay slogan-title text-3xl italic text-primary-300">
                        A Passionate Front-End Developer
                    </p>
                    <p className="hide delay slogan-title-down text-3xl italic text-primary-300">
                        A Self-Taught Full-Stack Developer
                    </p>
                    <p className="hide delay my-4 text-justify text-lg font-semibold text-primary-300">
                        I'm a front-end developer and also a self-motivated full-stack
                        engineer building scalable, cross-browser compatible,
                        performant, and responsive websites.
                        Feel free to take a look at my latest projects a little
                        bit below this page. 
                    </p>
                    <h2 className="hide text-primary-100 text-3xl">
                        <a href="mailto:honghonghh1012@gmail.com" target="_blank"><Image src={Gmail}/> Gmail</a> / {" "}
                        <a href="https://www.linkedin.com/in/hong-hong-7b283321b/" target="_blank"><Image src={Linkedin}/> LinkedIn</a> / {" "}
                        <a href="https://github.com/honghong1012" target="_blank"><Image src={Github}/> GitHub</a> / {" "}
                        <a href="https://www.instagram.com/scarlett_hong1012/" target="_blank"><Image src={Instagram}/> Instagram </a>  
                    </h2>
                </div>
            </div>
        </main>
        </section>

    );
}

export default FirstSection;
