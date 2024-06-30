import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Components.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import FadeoutCaptionText from '../Components/FadeoutCaptionText';
import FloatingVideo from '../Components/FloatingVideo';
import bubbleVideo from '../Content/chrome2.0.webm';

function AboutWhatIDoPage( {scrollPos} ) {
    
    return (
        <div className="About-pages">
            <FloatingVideo video={bubbleVideo} right={-200} bottom={450} rotation={30} scale={1.3} scrollPos={scrollPos} invertParalax={1} zInd={25} pageNumber={1} />
            <span className='Inter-regular Spacing-wide Text-small Text-white'>WHAT I DO</span>
            <div className="Centered-container-horz-left-align Middle Margin-to-center Drop-shadow-container" style={{ background: "#414C52", }}>
                <FadeoutCaptionText mainText={"WEB DESIGN"} subText={"Create and optimize website content with code and other tools"}/>
                <FadeoutCaptionText mainText={"MOCK UPS"} subText={"See how your designs look on screen"} />
                <FadeoutCaptionText mainText={"MOTION DESIGN"} subText={"Use animation to bring your images to life"} />
                <FadeoutCaptionText mainText={"CONTENT CREATION"} subText={"Make a variety of graphics and media for your business"} />
                <FadeoutCaptionText mainText={"VIDEO EDITING"} subText={"Edit professional videos for use anywhere"} />
            </div>
        </div>
    );
}

export default AboutWhatIDoPage;