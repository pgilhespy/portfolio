import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Components.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import FadeoutCaptionText from '../Components/FadeoutCaptionText';

function WorkExperiencePage() {
    
    return (
        <div className="Work-pages">
            <div className='Fadeout-gradient-light Inactive' />
            <span className='Inter-regular Spacing-wide Text-small Text-white'>MY EXPERIENCE</span>
            <div className="Centered-container-horz-left-align Middle Margin-to-center Drop-shadow-container">
                <FadeoutCaptionText mainText={"ANTHEM"} subText={"Edited the show reel for a company event"}/>
                <FadeoutCaptionText mainText={"STANDARDFUSION"} subText={"Worked as a web developer"} />
                <FadeoutCaptionText mainText={"METROPOLITAN"} subText={"Created a short social media ad"} />
                <FadeoutCaptionText mainText={"CERULEAN SOLUTIONS"} subText={"Developed a new website for the company"} />
                <FadeoutCaptionText mainText={"..."} />
            </div>
            <div className='Fadeout-gradient-compensation' />
        </div>
    );
}

export default WorkExperiencePage;