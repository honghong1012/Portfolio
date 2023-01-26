import Image from "next/image";
// Image
const Portfolio =  "ThirdSection/Portfolio.png"
const AWS = "ThirdSection/aws.png"
const SmartHealth = "ThirdSection/SmartHealth.png"

import t from "public/ThirdSection/Portfolio.png"

interface ImageProps {
    imgId?: string;
}

function CustomizedImage ({ imgId }: ImageProps) {
    return(
        <>
            {imgId === 'Portfolio' && (
                <div>
                    <img className="img-sizing" src={Portfolio}></img>
                </div>
            )}
            {imgId === 'AWS' && (
                <div>
                    <img className="img-sizing" src={AWS}></img>
                </div>
            )}
            {imgId === 'smartHealth' && (
                <div>
                    <img className="img-sizing" src={SmartHealth}></img>
                </div>
            )}
        </>
    )
}

export default CustomizedImage;