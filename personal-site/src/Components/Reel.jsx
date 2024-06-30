import '../Styles/Components.css';
import '../Styles/Globals.css';
import reel from '../Content/WebsiteReel1.1.mp4';
import useWindowDimensions from '../Utils/UseWindowDimensions';

const Reel = ({ scrollPos }) => {
    const { height, width } = useWindowDimensions();
    let reelOpacity;
    let reelBlur;

    // Not at spot yet
    if ( scrollPos < (height * 2.8) ) {
        let gradient = Math.pow( ( scrollPos / (height * 2.8) ), 3 );

        reelOpacity = 100 * gradient;
        reelBlur = 4 * (1 - gradient);
    }
    // At correct spot
    else if ( scrollPos < (height * 3.2) ) {
        reelOpacity = 100;
        reelBlur = 0;
    }
    // Past spot
    else {
        let gradient = Math.pow( ( (height * 3.2) / scrollPos ), 3 );

        reelOpacity = 100 * gradient;
        reelBlur = 4 * (1 - gradient);
    }

    return (
        <video 
            className='Reel Drop-shadow-container' 
            autoPlay 
            loop 
            muted 
            playsInline
            controls
            src={reel}
            style={{
                opacity: `${reelOpacity}%`,
                filter: `blur(${reelBlur}px)`
            }}
        >
        </video>
    );
}

export default Reel;