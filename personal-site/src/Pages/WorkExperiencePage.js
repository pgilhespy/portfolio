import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Components.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import FadeoutCaptionText from '../Components/FadeoutCaptionText';
import useWindowDimensions from '../Utils/UseWindowDimensions';
import getTextSize from '../Utils/GetTextSize';

function WorkExperiencePage() {
    const {width, height} = useWindowDimensions();
    
    return (
        <div className="Work-pages">
            
            <span className={`Inter-regular Spacing-${getTextSize(width)}-wide Text-${getTextSize(width)}-small Text-white`} >MY EXPERIENCE</span>
            <div className="Centered-container-horz-left-align Middle Margin-to-center Drop-shadow-container" style={{ background: "#C8D2D7", }}>
                <FadeoutCaptionText mainText={"ANTHEM"} subText={"Edited the show reel for a company event"}/>
                <FadeoutCaptionText mainText={`${getTextSize(width) == "phone" ? "STANDARD-FUSION" : "STANDARDFUSION"}`} subText={"Worked as a web developer"} />
                <FadeoutCaptionText mainText={"METROPOLITAN"} subText={"Created a short social media ad"} />
                <FadeoutCaptionText mainText={"CERULEAN SOLUTIONS"} subText={"Developed a new website for the company"} />
                <FadeoutCaptionText mainText={"..."} />
            </div>
        </div>
    );
}

export default WorkExperiencePage;