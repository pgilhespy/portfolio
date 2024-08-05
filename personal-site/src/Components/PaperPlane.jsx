import '../Styles/Components.css';
import '../Styles/Globals.css';
import videoChrome from '../Content/chrome3.1.webm';
import videoApple from '../Content/chrome3.1.webm';
import useWindowDimensions from '../Utils/UseWindowDimensions';
import getPageHeight from '../Utils/GetPageHeight';

const PaperPlane = ({ bottom, right, rotation, scale, scrollPos, zInd }) => {
    const {height, width} = useWindowDimensions();
    const pageHeight = getPageHeight(height);
    let adjustedBottom = bottom - 200;
    let adjustedRight = right + 200;

    if (scrollPos > (pageHeight * 4.5)) {
        let gradient = 1 - Math.pow( ( scrollPos / (pageHeight * 5) ), 3 );

        adjustedBottom = bottom - (180 * gradient);
        adjustedRight = right + (200 * gradient);
    }

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
                bottom: `${adjustedBottom}px`, 
                right: `${adjustedRight}px`, 
                transform: `scale(${scale}, ${scale}) rotate(${rotation}deg)`,
                zIndex: `${zInd}`
            }}
        >
            <source src={videoApple} type='video/mp4; codecs="hvc1"' />
            <source src={videoChrome} type="video/webm" />
        </video>
    );
}

export default PaperPlane;