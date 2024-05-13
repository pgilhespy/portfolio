import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import ButtonBoxHighlight from '../Components/ButtonBoxHighlight';
import video from '../Content/test.mp4';
import FloatingVideo from '../Components/FloatingVideo';

function LandingPage({ mousePos }) {

    // console.log(`Mouse Position: ${JSON.stringify(mousePos)}`);

    return (
        <div className="Landing-page">
            <FloatingVideo video={video} x={200} y={150} mousePos={mousePos} />
            <FloatingVideo video={video} x={1000} y={-40} mousePos={mousePos} />
            <div className="Centered-container-horz-vert">
                <span className="Inter-black Text-large Text-white Drop-shadow-black Letters-seperate">PHILIP GILHESPY</span>
                <div className='Even-spread-to-edges'>
                    <ButtonBoxHighlight displayText={"WEB DESIGN"} />
                    <ButtonBoxHighlight displayText={"PROJECTS"} />
                    <ButtonBoxHighlight displayText={"CONTACT"} />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;