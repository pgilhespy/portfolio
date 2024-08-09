import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Components.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import Reel from '../Components/Reel';
import FloatingVideo from '../Components/FloatingVideo';
import starVideoChrome from '../Content/chrome1.1.webm';
import useWindowDimensions from '../Utils/UseWindowDimensions';
import getTextSize from '../Utils/GetTextSize';

function ReelExperiencePage({ scrollPos, pageHeight }) {
    const {width, height} = useWindowDimensions();
    const screenSize = getTextSize(width, pageHeight);
    var floatingVideo; 

    if (screenSize == "window")
        floatingVideo = [1, 1.1, 1];

    else if (screenSize == "ipad")
        floatingVideo = [1, 1.2, 0.5];

    else
        floatingVideo = [1, 1.2, 0.4];
    
    return (
        <div className="Work-pages" style={{ height: `${pageHeight}px`}}>
            <FloatingVideo 
                videoChrome={starVideoChrome} 
                left={-230*floatingVideo[0]} 
                bottom={-250*floatingVideo[1]} 
                rotation={-10} 
                scale={1*floatingVideo[2]} 
                scrollPos={scrollPos} 
                invertParalax={1} 
                zInd={25} 
                pageNumber={2}
                pageHeight={pageHeight}
            />
            <Reel scrollPos={scrollPos} pageHeight={pageHeight} />
        </div>
    );
}

export default ReelExperiencePage;