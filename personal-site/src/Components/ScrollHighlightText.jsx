import '../Styles/Components.css';
import '../Styles/Text.css';
import useWindowDimensions from '../Utils/UseWindowDimensions';

const ScrollHighlightText = ({ displayText, scrollPos }) => {
    const { height, width } = useWindowDimensions();
    var gradient = 1;
    var ratio = (height - scrollPos)/scrollPos
    if ( ratio < 1)
        gradient = ratio;

    if (gradient < 0)
        gradient = 0;

    return (
        <span 
            style={{
                color: `rgba(65, 76, 82, 1)`,
                backgroundColor: `rgba(255, 255, 255, ${1-(gradient/1.2)})`,
                borderRadius: "16px"
            }}
        >
            { displayText }
        </span>
    );
}

export default ScrollHighlightText;