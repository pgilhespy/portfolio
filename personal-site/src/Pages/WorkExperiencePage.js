import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Components.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import FadeoutCaptionText from '../Components/FadeoutCaptionText';
import useWindowDimensions from '../Utils/UseWindowDimensions';
import getTextSize from '../Utils/GetTextSize';

function WorkExperiencePage({ pageHeight }) {
    const {width, height} = useWindowDimensions();
    
    return (
        <div className="Work-pages" style={{ height: `${pageHeight}px`}}>
            
            <span className={`Inter-regular Spacing-${getTextSize(width, pageHeight)}-wide Text-${getTextSize(width, pageHeight)}-small Text-white`} >MY EXPERIENCE</span>
            <div className="Centered-container-horz-left-align Middle Drop-shadow-container" style={{ background: "#C8D2D7", }}>
                <FadeoutCaptionText mainText={"ANTHEM"} subText={"Edited the show reel for a company event"} pageHeight={pageHeight} />
                <FadeoutCaptionText mainText={`${getTextSize(width, pageHeight) == "phone" ? "STANDARD FUSION" : "STANDARDFUSION"}`} subText={"Worked as a web developer"} pageHeight={pageHeight} />
                <FadeoutCaptionText mainText={"METROPOLITAN"} subText={"Created a short social media ad"} pageHeight={pageHeight} />
                <FadeoutCaptionText mainText={"CERULEAN SOLUTIONS"} subText={"Developed a new website for the company"} pageHeight={pageHeight} />
                <FadeoutCaptionText mainText={"..."} />
            </div>
        </div>
    );
}

export default WorkExperiencePage;