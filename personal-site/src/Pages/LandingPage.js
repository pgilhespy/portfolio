import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import ButtonBoxHighlight from '../Components/ButtonBoxHighlight';
import video from '../Content/chrome1.1.webm';
import FloatingVideo from '../Components/FloatingVideo';
import useWindowDimensions from '../Utils/UseWindowDimensions';
import getTextSize from '../Utils/GetTextSize';

function LandingPage({ scrollPos }) {
    const {width, height} = useWindowDimensions();
    const screenSize = getTextSize(width);
    var floatingVideo1; 
    var floatingVideo2; 

    if (screenSize == "window") {
        floatingVideo1 = [1, 1, 1];
        floatingVideo2 = [1, 1, 1];
    }
    else if (screenSize == "ipad") {
        floatingVideo1 = [1.1, 1.2, 0.7];
        floatingVideo2 = [10, 1.2, 0.7];
    }
    else {
        floatingVideo1 = [1.2, 1.3, 0.5];
        floatingVideo2 = [17, 1.2, 0.5];
    }
    
    return (
        <div className="Landing-page">
            <FloatingVideo 
                video={video} 
                left={-170*floatingVideo1[0]} 
                bottom={-150*floatingVideo1[1]} 
                rotation={0} 
                scale={1*floatingVideo1[2]} 
                scrollPos={scrollPos} 
                invertParalax={1} 
                zInd={25} 
                pageNumber={0} 
            />
            <FloatingVideo 
                video={video} 
                right={-10*floatingVideo2[0]} 
                top={50*floatingVideo2[1]} 
                rotation={200} 
                scale={0.4*floatingVideo2[2]} 
                scrollPos={scrollPos} 
                invertParalax={-1} 
                zInd={5} 
                pageNumber={0} 
            />
            <div className="Centered-container-horz-vert Middle">
                <span className={`Inter-black Spacing-${getTextSize(width)}-tight Text-${getTextSize(width)}-large Text-white Drop-shadow-black Letters-${getTextSize(width)}-seperate`} >PHILIP GILHESPY</span>
                <div className='Even-spread-to-edges'>
                    <ButtonBoxHighlight displayText={"ABOUT"} scrollPos={scrollPos} sectionNumber={1} />
                    <ButtonBoxHighlight displayText={"WORK"} scrollPos={scrollPos} sectionNumber={2} />
                    <ButtonBoxHighlight displayText={"CONTACT"} scrollPos={scrollPos} sectionNumber={3} />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;