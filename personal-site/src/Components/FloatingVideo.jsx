import '../Styles/Components.css';
import '../Styles/Globals.css';
import useWindowDimensions from '../Utils/UseWindowDimensions';

const FloatingVideo = ({video, top, bottom, left, right, rotation, scale, scrollPos, invertParalax, zInd, pageNumber}) => {
    const {height, width} = useWindowDimensions();
    let adjustedTop = top;
    let adjustedBottom = bottom;

    let offset = 2.2*Math.sqrt(scrollPos - (pageNumber * height));

    if (adjustedTop != null)
        adjustedTop = (top -  offset) * invertParalax;

    if (adjustedBottom != null)
        adjustedBottom = (bottom + offset) * invertParalax;

    console.log(adjustedTop);

    return (
        <video 
            className='Floating-video Inactive' 
            width="500" 
            height="500" 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{
                top: `${adjustedTop}px`, 
                bottom: `${adjustedBottom}px`, 
                left: `${left}px`, 
                right: `${right}px`, 
                transform: `scale(${scale}, ${scale}) rotate(${rotation}deg)`,
                zIndex: `${zInd}`
            }}
            src={video}
        >
        </video>
    );
}

export default FloatingVideo;