// Components
import SourceButton from "components/Utils/SourceButton";
import WebsiteButton from "components/Utils/WebsiteButton";
import Image from "next/image";
import CustomizedImage from "./CustomizedImage";
import CustomizedButton from "components/Utils/CustomizedButton";

interface ItemProps {
    title?: string;
    description?: string | JSX.Element;
    website?: string;
    source?: string;
    stack?: JSX.Element;
    imgId?: string;
    resume?: string;
}

function ProjectItems({
    title,
    imgId,
    description,
    website,
    source,
    stack,
    resume
}: ItemProps) {
    return (
        <article className="project-item flex cursor-default flex-col gap-6 bg-white px-14 transition-all  ">
            <div className="project-hide img-flex flex justify-center hover:scale-110 md:hover:translate-x-4 md:hover:-translate-y-4 duration-300">
            <CustomizedImage imgId={imgId}/>
            </div>
            <div className="project-hide w-fit bg-white text-primary-100 text-4xl text-left font-bold">
                {title}
            </div>
            <p className="project-hide flex-1 text-justify text-primary-100 ">
                {description}
            </p>
            <ul className="project-hide flex flex-wrap gap-4 text-primary-300 font-bold">{stack}</ul>
            <div className="project-hide flex align-left gap-5">
                {website && (<CustomizedButton buttonType="website" href={website} />)}
                {source && (<CustomizedButton buttonType="source" href={source} />)}
                {resume && (<CustomizedButton buttonType="resume" href={resume} />)}
            </div>
        </article>
    );
}

export default ProjectItems;
