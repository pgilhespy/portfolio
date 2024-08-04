import '../Styles/Components.css';
import '../Styles/Globals.css';
import reel from '../Content/WebsiteReel1.1.mp4';
import useWindowDimensions from '../Utils/UseWindowDimensions';
import getTextSize from '../Utils/GetTextSize';
import getPageHeight from '../Utils/GetPageHeight';

const Reel = ({ scrollPos }) => {
    const { height, width } = useWindowDimensions();
    const pageHeight = getPageHeight(height);
    let reelOpacity;
    let reelBlur;
    const screenSize = getTextSize(width);
    let reelHeight;
    let reelWidth;

    if (screenSize == "window") {
        reelHeight = "75%";
        reelWidth = "auto";
    }

    else if (screenSize == "ipad") {
        reelHeight = "auto";
        reelWidth = "95%";
    }

    else {
        reelHeight = "auto";
        reelWidth = "100%";
    }


    // Not at spot yet
    if ( scrollPos < (pageHeight * 2.8) ) {
        let gradient = Math.pow( ( scrollPos / (pageHeight * 2.8) ), 3 );

        reelOpacity = 100 * gradient;
        reelBlur = 4 * (1 - gradient);
    }
    // At correct spot
    else if ( scrollPos < (pageHeight * 3.2) ) {
        reelOpacity = 100;
        reelBlur = 0;
    }
    // Past spot
    else {
        let gradient = Math.pow( ( (pageHeight * 3.2) / scrollPos ), 3 );

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
                height: reelHeight,
                width: reelWidth,
                opacity: `${reelOpacity}%`,
                filter: `blur(${reelBlur}px)`
            }}
        >
        </video>
    );
}

export default Reel;