import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import ButtonBoxHighlight from '../Components/ButtonBoxHighlight';
import video from '../Content/chrome1.1.webm';
import FloatingVideo from '../Components/FloatingVideo';

function LandingPage({ scrollPos }) {
    
    return (
        <div className="Landing-page">
            <FloatingVideo video={video} left={-170} bottom={-150} rotation={0} scale={1} scrollPos={scrollPos} invertParalax={1} zInd={25} pageNumber={0} />
            <FloatingVideo video={video} right={0} top={50} rotation={200} scale={0.4} scrollPos={scrollPos} invertParalax={-1} zInd={5} pageNumber={0} />
            <div className="Centered-container-horz-vert Middle">
                <span className="Inter-black Spacing-tight Text-large Text-white Drop-shadow-black Letters-seperate">PHILIP GILHESPY</span>
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