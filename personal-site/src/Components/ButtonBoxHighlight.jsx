import { useEffect, useState } from 'react';
import '../Styles/Components.css';
import useWindowDimensions from '../Utils/UseWindowDimensions';

const ButtonBoxHighlight = ({ displayText, scrollPos, sectionNumber }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [hoverColour, setHoverColour] = useState("#C8D2D7");
    const {height, width} = useWindowDimensions();
    const [inSection, setInSection] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const OnClick = () => {
        if (sectionNumber === 1)
            window.scrollTo(0, height);
        else if (sectionNumber === 2)
            window.scrollTo(0, 3*height);
        else
            window.scrollTo(0, 5*height);
    }

    useEffect(() => {
        // Page 1
        if (scrollPos < (0.95*height)) {
            setHoverColour("#C8D2D7");
            setInSection(false);
        }
        // Pages 2,3
        else if (scrollPos < (2.95*height)) {
            setHoverColour("#414C52");
            if (sectionNumber === 1)
                setInSection(true);
            else
                setInSection(false);
        }
        // Pages 4,5
        else if (scrollPos < (4.95*height)) {
            setHoverColour("#C8D2D7");
            if (sectionNumber === 2)
                setInSection(true);
            else
                setInSection(false);
        }
        // Pages 6
        else {
            setHoverColour("#414C52");
            if (sectionNumber === 3)
                setInSection(true);
            else
                setInSection(false);
        }
    }, [scrollPos]);

    return (
        <>
            <button 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                onClick={OnClick}
                className="Inter-regular Spacing-normal Text-small Text-white Button-box-highlight" 
                style={{
                    color: `${(isHovered || inSection) ? hoverColour : "#FFFFFF"}`,
                    backgroundColor: `${(isHovered || inSection) ? "white" : "transparent"}`,
                    padding: `${(isHovered || inSection) ? "2px 4px 6px 4px" : "4px"}`
                }}
            >
                {displayText}
            </button>
        </>
    );
}

export default ButtonBoxHighlight;