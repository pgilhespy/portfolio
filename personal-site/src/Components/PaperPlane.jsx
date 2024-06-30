import '../Styles/Components.css';
import '../Styles/Globals.css';
import video from '../Content/chrome3.1.webm';
import useWindowDimensions from '../Utils/UseWindowDimensions';

const PaperPlane = ({ bottom, right, rotation, scale, scrollPos, zInd }) => {
    const {height, width} = useWindowDimensions();
    let adjustedBottom = bottom - 200;
    let adjustedRight = right + 200;

    if (scrollPos > (height * 4.5)) {
        let gradient = 1 - Math.pow( ( scrollPos / (height * 5) ), 3 );

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
            src={video}
        >
        </video>
    );
}

export default PaperPlane;