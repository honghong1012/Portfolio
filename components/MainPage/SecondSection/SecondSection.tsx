import Image from "next/image";
// Assets
import AboutGif from "public/SecondSection/About.gif";

function SecondSection() {
    return (
        <section
            className=" flex min-h-screen w-full items-center"
            id="about"
        >
            <div className="mx-auto flex-col ">
                <div className="pb-20">
                    <h1 className="hide aboutMe-title text-8xl text-primary-100 font-bold">
                        About me
                    </h1>
                </div>
                <div className=" mx-auto flex max-w-7xl cursor-default items-center justify-between gap-5">
                    <div className="hide md:inline-block">
                        <Image
                            src={AboutGif}
                            width={800}
                            height={600}
                            alt="About Me Section"
                        />
                    </div>
                    <div className="hide delay flex w-full flex-col gap-6 text-justify">
                        <p className="text-lg font-semibold text-black">
                            Hello! My name is Hong Hong and you can call me Scarlett.
                            I am a software developer who graduated from Northwestern University. 
                            Right now I am living in Seattle.
                        </p>
                        <p className="text-lg font-semibold text-black">
                            In June 2017, I started my computer science journey. I was 
                            a school-taught student during my undergraduate 
                            study. However, at that time, I did not fall in love with programming. 
                            After I started my master degree in Northwestern, I get crush with web development.

                        </p>
                        <p className="text-lg font-semibold text-black">
                            I have first started learning HTML, CSS and JavaScript, and try to 
                            complete some projects by myself.
                            Then I participated the industrial process at <a href="https://www.aboutamazon.com/" target="_blank" className="hover:text-primary-200"><u>Amazon</u></a> using TypeScript, which gave me 
                            a deeper understanding of development as well as so much precious memory of working within a team. 
                        </p>
                        <p className="text-lg font-semibold text-black">
                            Thanks to having a good foundation of programming
                            basics, It was not that much hard to learn new things for me. ReactJS, AngularJs,
                            TypeScript... All the knowledge excite me and I would definitely keep purchasing along this way.

                        </p>
                    </div>
                </div>
                <div className="hide more-about flex justify-content-center">
                    <a
                        href="/new"
                        rel="noopener noreferrer"
                        className="flex justify-center text-2xl rounded-lg border-2 border-primary-100 px-3 py-2 text-primary-100 hover:bg-primary-300 hover:text-white md:w-1/3"
                    >More about me...</a>
                </div>
            </div>
        </section>
    );
}

export default SecondSection;
