import '../Styles/Components.css';
import '../Styles/Globals.css';

const FloatingVideo = ({video, top, bottom, left, right, rotation, scale, scrollPos, invertParalax}) => {
    let adjustedTop = top;
    let adjustedBottom = bottom;

    if (adjustedTop != null)
        adjustedTop = (top - 2*Math.sqrt(scrollPos)) * invertParalax;

    if (adjustedBottom != null)
        adjustedBottom = (bottom + 2*Math.sqrt(scrollPos)) * invertParalax;

    return (
        <video 
            className='Floating-video Back' 
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
                transform: `scale(${scale}, ${scale}) rotate(${rotation}deg)`
            }}
            src={video}
        >
        </video>
    );
}

export default FloatingVideo;