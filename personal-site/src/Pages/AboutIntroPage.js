import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Components.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import image from '../Content/quotation-mark-1.0.png';
import FloatingImage from '../Components/FloatingImage';
import ScrollHighlightText from '../Components/ScrollHighlightText';
import useWindowDimensions from '../Utils/UseWindowDimensions';
import getTextSize from '../Utils/GetTextSize';

function AboutIntroPage({ scrollPos, pageHeight }) {
    const {width, height} = useWindowDimensions();
    const screenSize = getTextSize(width, pageHeight);
    var floatingImage1;
    var floatingImage2; 

    if (screenSize == "window") {
        floatingImage1 = [1, 1, 1];
        floatingImage2 = [1, 1, 1];
    }
    else if (screenSize == "ipad") {
        floatingImage1 = [-70, 20, 0.7];
        floatingImage2 = [-100, 20, 0.7];
    }
    else {
        floatingImage1 = [-130, 50, 0.5];
        floatingImage2 = [-190, 50, 0.5];
    }
    
    return (
        <div id="about" className="About-pages" style={{ height: `${pageHeight}px`}}>
            <FloatingImage 
                image={image} 
                left={30+floatingImage1[0]} 
                top={10+floatingImage1[1]} 
                rotation={0} 
                scale={0.6*floatingImage1[2]} 
                scrollPos={scrollPos} 
                invertParalax={-1} 
                pageNumber={0} 
                pageHeight={pageHeight}
            />
            <FloatingImage 
                image={image} 
                left={160+floatingImage2[0]} 
                top={10+floatingImage2[1]} 
                rotation={0} 
                scale={-0.6*floatingImage2[2]} 
                scrollPos={scrollPos} 
                invertParalax={-1} 
                pageNumber={0} 
                pageHeight={pageHeight}
            />
            <div className="Centered-container-horz-vert Middle Margin-to-center">
                <span className={`Inter-black Spacing-${getTextSize(width, pageHeight)}-medium Text-${getTextSize(width, pageHeight)}-medium Text-white Drop-shadow-black`}>
                    I’m a web designer with computer science and video editing skills who can take your site to the <ScrollHighlightText scrollPos={scrollPos} displayText={"next level."} pageHeight={pageHeight} />
                </span>
            </div>
        </div>
    );
}

export default AboutIntroPage;