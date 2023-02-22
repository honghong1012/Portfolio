import { useState } from "react";
// Components
import Categories from "./Categories";
import ProjectItems from "./ProjectItems";

function ThirdSection() {
    const [category, setCategory] = useState("next");

    return (
        <section
            className="min-h-full w-full bg-white py-20"
            id="projects"
        >
            <div className="mx-auto w-11/12 max-w-7xl">
                <p className="project-hide project-title font-bold text-primary-100">
                    Projects
                </p>
                <div className="grid grid-cols-1 project-container gap-x-30 gap-y-32 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
                    {category === "next" && (
                        <>
                            <ProjectItems
                                imgId="Portfolio"
                                title="Portfolio(Ongoing)"
                                website="https://scarletthong.top"
                                source="https://github.com/honghong1012/Portfolio"
                                description={<>My self-coded technical website build with <b>TypeScript</b>, <b>Next.js</b> and <b>tailwindCSS</b>. 
                                It is mainly used to demonstrate my introduction, my projects and my other experience.
                                <br/>I design and optimize
                                the styles of the whole website as well as encapsulate certain components for better developments. It can also 
                                be used as a portfolio template.</>}
                                stack={
                                    <>
                                        <li>NextJS</li>
                                        <li>TypeScript</li>
                                        <li>TailwindCSS</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                imgId="AWS"
                                title="Amazon PRISM"
                                resume="Resume.pdf"
                                description={<>I built up a front-end and user-interactive data visualization project during the
                                internship at <strong>AWS Fintech PRISM team</strong> to demonstrate PnL records to clients.
                                <br/>By using<strong> React.js</strong>, <strong>TypeScript</strong> and <strong>Apache ECharts</strong>
                                , I successfully implemented four kinds of responsive data charts according to complicated use
                                 cases, including Line Chart, Stacked Bar Chart, Sunburst Chart and Treemap Chart.</>}
                                stack={
                                    <>
                                        <li>ReactJS</li>
                                        <li>TypeScript</li>
                                        <li>Apache ECharts</li>
                                        <li>Amazon CDK</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                imgId="smartHealth"
                                title="SmartHealth"
                                source="https://github.com/honghong1012/SmartHealth"
                                description={<>SmartHealth is a full-stack application used for reporting and
                                 managing students' health status during Covid-19 pandemic. It is based on <b>Vue.js</b>
                                 , <b>JavaScript</b> and back-end server provided by <b>Alibaba Cloud</b>.
                                 <br/>The project have two login tabs for teacher and student type of users. Student can
                                 fill out forms to report health information and check-in for courses. Teacher can view through
                                 the summary to manage.
                                 <br/>The project was constrained by policies from Tecent neighbours and did not put into production,
                                  but it was tested and implemented successfully within the WeChat developer tools.
                                 </>}
                                stack={
                                    <>
                                        <li>Vue</li>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                    </>
                                }
                            />
                        </>
                    )}

                    {/* {category === "react" && (
                        <>
                            <ProjectItems
                                img={img}
                                title="Create Blog Posts"
                                website="https://serdargokhan-blog.netlify.app/"
                                source="https://github.com/serdargokhan/react-projects/tree/main/5-blog-website"
                                description="I have completed this blog website. It has sign in and sign up utilities. User can sign up, sign in, and create a blog post. sign in and sign up credentials is stored on firebase real-time database. After blog post is created, it will be shown on the home page. I also experienced framer-motion library with this project."
                                stack={
                                    <>
                                        <li>ReactJS</li>
                                        <li>TailwindCSS</li>
                                        <li>Framer-Motion</li>
                                        <li>JavaScript</li>
                                    </>
                                }
                            />
                            
                            
                        </>
                    )} */}

                </div>
            </div>
        </section>
    );
}

export default ThirdSection;
