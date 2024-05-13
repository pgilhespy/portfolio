import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import ButtonBoxHighlight from '../Components/ButtonBoxHighlight';

function LandingPage() {
    return (
        <div className="Landing-page">
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