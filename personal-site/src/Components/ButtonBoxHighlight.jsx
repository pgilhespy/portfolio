import { useEffect, useState } from 'react';
import '../Styles/Components.css';
import useWindowDimensions from '../Utils/UseWindowDimensions';
import getTextSize from '../Utils/GetTextSize';
import MobileDetect from 'mobile-detect';

const ButtonBoxHighlight = ({ displayText, scrollPos, sectionNumber, pageHeight }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [hoverColour, setHoverColour] = useState("#C8D2D7");
    const {height, width} = useWindowDimensions();
    const [inSection, setInSection] = useState(false);
    const md = new MobileDetect(navigator.userAgent);

    const handleMouseEnter = () => {
        if ( !md.mobile() )
            setIsHovered(true);
    };
    const handleMouseLeave = () => {
        if ( !md.mobile() )
            setIsHovered(false);
    };

    const OnClick = () => {
        if (sectionNumber === 1)
            window.scrollTo(0, pageHeight);
        else if (sectionNumber === 2)
            window.scrollTo(0, 3*pageHeight);
        else
            window.scrollTo(0, 5*pageHeight);
    }

    useEffect(() => {
        // Page 1
        if (scrollPos < (0.95*pageHeight)) {
            setHoverColour("#C8D2D7");
            setInSection(false);
        }
        // Pages 2,3
        else if (scrollPos < (2.95*pageHeight)) {
            setHoverColour("#414C52");
            if (sectionNumber === 1)
                setInSection(true);
            else
                setInSection(false);
        }
        // Pages 4,5
        else if (scrollPos < (4.95*pageHeight)) {
            setHoverColour("#C8D2D7");
            if (sectionNumber === 2)
                setInSection(true);
            else
                setInSection(false);
        }
        // Page 6
        else {
            setHoverColour("#414C52");
            if (sectionNumber === 3)
                setInSection(true);
            else
                setInSection(false);
        }
    }, [scrollPos, pageHeight]);

    return (
        <>
            <button 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                onClick={OnClick}
                className={`Inter-regular Spacing-${getTextSize(width, pageHeight)}-normal Text-${getTextSize(width, pageHeight)}-small Text-white Button-box-highlight`}
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