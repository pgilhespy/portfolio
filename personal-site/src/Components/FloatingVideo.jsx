import '../Styles/Components.css';
import '../Styles/Globals.css';
import getPageHeight from '../Utils/GetPageHeight';
import useWindowDimensions from '../Utils/UseWindowDimensions';

const FloatingVideo = ({videoChrome, videoApple, top, bottom, left, right, rotation, scale, scrollPos, invertParalax, zInd, pageNumber}) => {
    const {height, width} = useWindowDimensions();
    const pageHeight = getPageHeight(height);
    let adjustedTop = top;
    let adjustedBottom = bottom;

    let offsetInternalValue = scrollPos - (pageNumber * pageHeight);
    if (offsetInternalValue <= 0 )
        offsetInternalValue = 0.001;

    let offset = 2.2*Math.sqrt(offsetInternalValue);

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
        >
            <source src={videoApple} type='video/mp4; codecs="hvc1"' />
            <source src={videoChrome} type="video/webm" />
        </video>
    );
}

export default FloatingVideo;