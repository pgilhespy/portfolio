import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import ButtonBoxHighlight from '../Components/ButtonBoxHighlight';
import useWindowDimensions from '../Utils/UseWindowDimensions';

const MenuBar = ({ scrollPos }) => {
    const {height, width} = useWindowDimensions();
    var visibility = "hidden";

    if (scrollPos > (0.53 * height) )
        visibility = "visible";

    return (
        <div className='Menu-bar Even-spread-to-edges Menu-front' style={{visibility:`${visibility}`}}>
                <div className='Even-spread-to-edges' style={{width: "723.1px"}}>
                    <ButtonBoxHighlight displayText={"ABOUT"} scrollPos={scrollPos} sectionNumber={1} />
                    <ButtonBoxHighlight displayText={"WORK"} scrollPos={scrollPos} sectionNumber={2} />
                    <ButtonBoxHighlight displayText={"CONTACT"} scrollPos={scrollPos} sectionNumber={3} />
                </div>
        </div>
    );
}

export default MenuBar;