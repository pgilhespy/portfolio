import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import ButtonBoxHighlight from '../Components/ButtonBoxHighlight';

const MenuBar = ({ scrollPos }) => {

    return (
        <div className='Menu-bar Even-spread-to-edges Menu-front'>
            <div className="Centered-container-horz-vert Middle">
                <div className='Even-spread-to-edges'>
                    <ButtonBoxHighlight displayText={"ABOUT"} scrollPos={scrollPos} />
                    <ButtonBoxHighlight displayText={"WORK"} scrollPos={scrollPos} />
                    <ButtonBoxHighlight displayText={"CONTACT"} scrollPos={scrollPos} />
                </div>
                <span className="Inter-black Spacing-tight Text-large Text-white Drop-shadow-black Inactive" style={{visibility: "hidden"}}>PHILIP GILHESPY</span>
            </div>
        </div>
    );
}

export default MenuBar;