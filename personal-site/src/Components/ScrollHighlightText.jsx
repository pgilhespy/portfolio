import '../Styles/Components.css';
import '../Styles/Text.css';

const ScrollHighlightText = ({ displayText, scrollPos, pageHeight }) => {
    var gradient = 1;
    var ratio = (pageHeight - scrollPos)/scrollPos
    if ( ratio < 1)
        gradient = ratio;

    if (gradient < 0)
        gradient = 0;

    return (
        <span 
            className='Next-level'
            style={{
                color: `rgba(65, 76, 82, 1)`,
                backgroundColor: `rgba(255, 255, 255, ${1-(gradient/1.2)})`
            }}
        >
            { displayText }
        </span>
    );
}

export default ScrollHighlightText;