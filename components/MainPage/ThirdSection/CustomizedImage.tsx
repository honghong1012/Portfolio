// Image
const Portfolio =  "ThirdSection/Portfolio.png"
const AWS = "ThirdSection/aws.png"
const SmartHealth = "ThirdSection/SmartHealth.png"
const Midea = "ThirdSection/Midea.png"
const TickMaster = "ThirdSection/TickMaster.png"

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
            {imgId === 'Midea' && (
                <div>
                    <img className="img-sizing" src={Midea}></img>
                </div>
            )}
            {imgId === 'TickMaster' && (
                <div>
                    <img className="img-sizing" src={TickMaster}></img>
                </div>
            )}
        </>
    )
}

export default CustomizedImage;