import type { NextPage } from "next";

const MoreAboutMe: NextPage = () => {
    return (
           <section id="more-about" className="hide flex ">
            <div className="mx-auto more-about-container">
                <div className="ml-20 flex gap-4">
                    <h1 className="bold text-6xl">Hey there</h1>
                    <img className="more-about-title-icon" src="https://github.com/honghong1012/honghong1012/blob/main/images/wave.gif?raw=true"></img>
                </div>
                <div className="more-about-image-text-container items-center justify-between gap-10 max-w-7xl px-20">
                    <div className="flex flex-col more-about-text gap-8" >
                        <p className="text-lg font-semibold text-black">
                            💜 I was born in Shunde, Guangdong twenty-two years ago. 
                            Since then I have been growing up in the city and living with my mother. 
                            I grew up exploring places far from home, so I spent my high school and college in new cities. 
                            One of my favorites was Xiamen, Fujian, where I spent four wonderful years of university, 
                            met great friends, and made unique memories. 
                        </p>
                        <p className="text-lg font-semibold text-black">
                            💼 For my master's degree, I chose to spend it in a completely new country, 
                            the United States. 
                            Now, I have just finished my studies at Northwestern University 
                            and am facing the important stage of my life.
                        </p>
                        <p className="text-lg font-semibold text-black">
                        🏃🏻‍♀️ Outside of work, I am an avid fan of fitness. 
                        When I have free time, I can work out five days a week. 
                        For me, fitness, like writing code, is something that I can see the results of my efforts. 
                        In addition to working out, I also enjoy all kinds of sports, especially outdoor hiking. 
                        I have to say, Seattle is still the best city for me in a sense, 
                        with the lake in summer and snow in winter, it's perfect for a wild child like me!
                        </p>
                           
                    </div>
                    <div className="delay hide flex flex-col more-about-image items-center">
                        <img width="70%" src="https://github.com/honghong1012/Portfolio/blob/main/public/MoreAboutSection/self1.JPG?raw=true"></img>
                        <p className="text-primary-300">Photo taken on Mount Rainier</p>
                    </div>
                </div>
                <div className="more-about-image-text-container reverse items-center justify-between gap-10 max-w-7xl px-20">
                    <div className="delay hide flex flex-col more-about-image items-center">
                        <img width="70%" src="https://github.com/honghong1012/Portfolio/blob/main/public/MoreAboutSection/self2.JPG?raw=true"></img>
                        <p className="text-primary-300">Baking egg yolk souffle...</p>
                    </div>
                    <div className="flex flex-col more-about-text gap-8">
                        <p className="text-lg font-semibold text-black">
                            🍰 I am also a lover of cooking food. 
                            I love to make Chinese desserts as well as bread. 
                            What gives me the most satisfaction is not only the process of making it, 
                            but also the joy of letting others eat delicious food.But when I think about it, 
                            my hands-on hobby is not limited to cooking either, all craft tasks can attract me.
                        </p>
                        <p className="text-lg font-semibold text-black">
                            🤔 The MBTI, which I have only taken once, shows that I am an ESFJ personality type. 
                            (Although I don't know much about it.) 
                            I am in fact a people-person, but I also enjoy and need my alone time. 
                            Anyway, feel free to make friends with me!
                        </p>
                           
                    </div>
                    
                </div>
            </div>
            
           </section>
    );
};

export default MoreAboutMe;
