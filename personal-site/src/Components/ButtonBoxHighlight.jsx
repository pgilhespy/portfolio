import { useState } from 'react';
import '../Styles/Components.css';
import useWindowDimensions from '../Utils/UseWindowDimensions';

const ButtonBoxHighlight = ({ displayText, scrollPos }) => {
    const [isHovered, setIsHovered] = useState(false);
    var hoverColour = "#C8D2D7";
    const {height, width} = useWindowDimensions();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const OnClick = () => {
        console.log(`Button ${displayText} clicked`);
    }

    console.log(scrollPos)

    // Page 1
    if (scrollPos < (0.95*height))
        hoverColour = "#C8D2D7";
    // Pages 2,3
    else if (scrollPos < (2.95*height))
        hoverColour = "#414C52";
    // Pages 4,5
    else if (scrollPos < (4.95*height))
        hoverColour = "#C8D2D7";
    // Pages 6
    else
        hoverColour = "#414C52";

    return (
        <>
            <button 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                onClick={OnClick}
                className="Inter-regular Spacing-normal Text-small Text-white Button-box-highlight" 
                style={{
                    color: `${isHovered ? hoverColour : "#FFFFFF"}`
                }}
            >
                {displayText}
            </button>
        </>
    );
}

export default ButtonBoxHighlight;