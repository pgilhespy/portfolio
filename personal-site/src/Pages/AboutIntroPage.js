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

function AboutIntroPage({ scrollPos }) {
    const {width, height} = useWindowDimensions();
    
    return (
        <div id="about" className="About-pages">
            <FloatingImage image={image} left={30} top={10} rotation={0} scale={0.6} scrollPos={scrollPos} invertParalax={-1} pageNumber={0} />
            <FloatingImage image={image} left={160} top={10} rotation={0} scale={-0.6} scrollPos={scrollPos} invertParalax={-1} pageNumber={0} />
            <div className="Centered-container-horz-vert Middle Margin-to-center">
                <span className={`Inter-black Spacing-medium Text-${getTextSize(width)}-medium Text-white Drop-shadow-black`}>
                    I’m a web designer with computer science and video editing skills who can take your site to the <ScrollHighlightText scrollPos={scrollPos} displayText={"next level."} />
                </span>
            </div>
        </div>
    );
}

export default AboutIntroPage;