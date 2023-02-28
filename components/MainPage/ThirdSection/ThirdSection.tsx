import { useState } from "react";
// Components
import Categories from "./Categories";
import ProjectItems from "./ProjectItems";

function ThirdSection() {
    const [category, setCategory] = useState("next");

    return (
        <section className="min-h-full w-full bg-white py-20" id="projects">
            <div className="mx-auto w-11/12 max-w-7xl">
                <p className="project-hide project-title font-bold text-primary-100">
                    Projects
                </p>
                <div className="project-container gap-x-30 grid grid-cols-1 gap-y-32 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
                    {category === "next" && (
                        <>
                            <ProjectItems
                                imgId="AWS"
                                title="PRISM"
                                resume="Resume.pdf"
                                description={
                                    <>
                                        During the time in <b>PRISM</b>
                                        (PRofitability InSights Manager), I
                                        developed real-time rendering{" "}
                                        <b>data visualizations</b> to showcase
                                        PNL statements and utilized{" "}
                                        <b>AWS CLoudFormation pipeline</b> to
                                        deploy.
                                        <br />
                                        To fetch the data, I integrated multiple
                                        data-requesting <b>Lambda</b> functions
                                        with <b>API Gateway</b> and{" "}
                                        <b>S3 bucket</b> to create secure and
                                        efficient REST APIs.
                                        <br /> I used <b>TypeScript</b> and{" "}
                                        <b>React</b> to transform over 80,000
                                        plain tabular data into user-interactive
                                        and data-adaptive visualized charts.
                                        Also implemented reusable React
                                        components transform data into the
                                        formats that required by <b>Polaris</b>{" "}
                                        and <b>Apache ECharts</b>.
                                    </>
                                }
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
                                imgId="Midea"
                                title="Smart Home Appliances"
                                resume="Resume.pdf"
                                description={
                                    <>
                                        During{" "}
                                        <strong>Smart Home Appliances</strong>{" "}
                                        project, I performed a data filter with{" "}
                                        <b>pandas</b>,<b>R</b> and <b>SQL</b>.
                                        in data processing. To identify the
                                        abnormal data on cloud server, I
                                        employed the <b>KNN</b> algorithm for
                                        multi-classification.
                                        <br /> To automate the whole process, I
                                        implemented a real-time <b>
                                            CI/CD
                                        </b>{" "}
                                        platform that triggered by data updates
                                        as well as a <b>Jenkins</b> pipeline,
                                        which greatly reduced the manual
                                        workload.
                                        <br /> By maintaining team's{" "}
                                        <b>DynamonDB</b> and creating multiple{" "}
                                        <b>REST APIs</b> for retrieval of
                                        historical data, the data analysis
                                        convenience and efficiency is largely
                                        imporved.
                                    </>
                                }
                                stack={
                                    <>
                                        <li>Python</li>
                                        <li>SQL</li>
                                        <li>Jenkins</li>
                                        <li>DynamoDB</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                imgId="TickMaster"
                                title="TickMaster"
                                source="https://github.com/honghong1012/TickMaster"
                                description={
                                    <>
                                        TickMaster is a{" "}
                                        <b>Microservices-based</b> ticket resale
                                        web application.
                                        <br /> The architecture using
                                        event-driven communication is developed
                                        with <b>TypeScript</b>, <b>Node.js</b>{" "}
                                        and <b>Express.js</b>. And the whole
                                        application is configured and deployed
                                        to <b>Kubernetes Cluster</b> on{" "}
                                        <b>Google Cloud Platform</b>.
                                        <br /> Besides, I integrated{" "}
                                        <b>MongoDB</b> for data storage and also
                                        designed a simple frontend UI with{" "}
                                        <b>React</b>, <b>Redux</b> and{" "}
                                        <b>Material UI</b>.
                                    </>
                                }
                                stack={
                                    <>
                                        <li>TypeScript</li>
                                        <li>NodeJS</li>
                                        <li>React</li>
                                        <li>Kubernetes</li>
                                        <li>GCP</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                imgId="smartHealth"
                                title="SmartHealth"
                                source="https://github.com/honghong1012/SmartHealth"
                                description={
                                    <>
                                        SmartHealth is a full-stack application
                                        used for reporting and managing
                                        students' health status during Covid-19
                                        pandemic. It is based on <b>Vue.js</b>,{" "}
                                        <b>JavaScript</b> and back-end server
                                        provided by <b>Alibaba Cloud</b>.
                                        <br />
                                        The project have two login tabs for
                                        teacher and student type of users.
                                        Student can fill out forms to report
                                        health information and check-in for
                                        courses. Teacher can view through the
                                        summary to manage.
                                        <br />
                                        The project was constrained by policies
                                        from Tecent neighbours and did not put
                                        into production, but it was tested and
                                        implemented successfully within the
                                        WeChat developer tools.
                                    </>
                                }
                                stack={
                                    <>
                                        <li>Vue</li>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                imgId="Portfolio"
                                title="Portfolio(Ongoing)"
                                website="https://scarletthong.top"
                                source="https://github.com/honghong1012/Portfolio"
                                description={
                                    <>
                                        My self-coded technical website build
                                        with <b>TypeScript</b>, <b>Next.js</b>{" "}
                                        and <b>tailwindCSS</b>. It is mainly
                                        used to demonstrate my introduction, my
                                        projects and my other experience.
                                        <br />I design and optimize the styles
                                        of the whole website as well as
                                        encapsulate certain components for
                                        better developments. It can also be used
                                        as a portfolio template.
                                    </>
                                }
                                stack={
                                    <>
                                        <li>NextJS</li>
                                        <li>TypeScript</li>
                                        <li>TailwindCSS</li>
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
