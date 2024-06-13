import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Components.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import FadeoutCaptionText from '../Components/FadeoutCaptionText';
import FloatingVideo from '../Components/FloatingVideo';
import video from '../Content/chrome1.1.webm';

function WorkExperiencePage( {scrollPos} ) {
    
    return (
        <div className="Work-pages">
            <FloatingVideo video={video} right={0} bottom={-550} rotation={30} scale={0.6} scrollPos={scrollPos} invertParalax={-1} zInd={3} />
            <span className='Inter-regular Spacing-wide Text-small Text-white'>MY EXPERIENCE</span>
            <div className="Centered-container-horz-left-align Middle Margin-to-center Drop-shadow-container" style={{ background: "#C8D2D7", }}>
                <FadeoutCaptionText mainText={"ANTHEM"} subText={"Edited the show reel for a company event"}/>
                <FadeoutCaptionText mainText={"STANDARDFUSION"} subText={"Worked as a web developer"} />
                <FadeoutCaptionText mainText={"METROPOLITAN"} subText={"Created a short social media ad"} />
                <FadeoutCaptionText mainText={"CERULEAN SOLUTIONS"} subText={"Developed a new website for the company"} />
                <FadeoutCaptionText mainText={"..."} />
            </div>
        </div>
    );
}

export default WorkExperiencePage;