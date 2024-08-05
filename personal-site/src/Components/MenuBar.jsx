import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import ButtonBoxHighlight from '../Components/ButtonBoxHighlight';
import useWindowDimensions from '../Utils/UseWindowDimensions';
import { useState, useEffect } from 'react';
import getTextSize from '../Utils/GetTextSize';
import getPageHeight from '../Utils/GetPageHeight';

const MenuBar = ({ scrollPos }) => {
    const {height, width} = useWindowDimensions();
    const pageHeight = getPageHeight(height);
    const [gradientColour, setGradientColour] = useState("rgba(200, 210, 215, 1)");
    var visibility = "hidden";
    const screenSize = getTextSize(width, height);
    var menuWidth;
    var visibilityToggleHeight;

    if (screenSize == "window") {
        menuWidth = 723.1;
        visibilityToggleHeight = 0.54;
    }
    else if (screenSize == "ipad") {
        menuWidth = 484.6;
        visibilityToggleHeight = 0.51;
    }
    else {
        menuWidth = 295;
        visibilityToggleHeight = 0.5;
    }

    if (scrollPos > (visibilityToggleHeight * pageHeight) )
        visibility = "visible";

    useEffect(() => {
        var gradientPixelSize = 0.2*pageHeight;

        // Page 1
        if (scrollPos < (0.8*pageHeight))
            setGradientColour("rgba(200, 210, 215, 1)");
        else if (scrollPos < (pageHeight)) {
            var countUp = scrollPos - (0.8*pageHeight);
            var progress = countUp / gradientPixelSize;

            setGradientColour(`rgba(${200 - (progress * 135)}, ${210 - (progress * 134)}, ${215 - (progress * 133)}, 1)`);
        }

        // Pages 2,3
        else if (scrollPos < (2.8*pageHeight))
            setGradientColour("rgba(65, 76, 82, 1)");
        else if (scrollPos < (3*pageHeight)) {
            var countUp = scrollPos - (2.8*pageHeight);
            var progress = countUp / gradientPixelSize;

            setGradientColour(`rgba(${65 + (progress * 135)}, ${76 + (progress * 134)}, ${82 + (progress * 133)}, 1)`);
        }

        // Pages 4,5
        else if (scrollPos < (4.8*pageHeight))
            setGradientColour("rgba(200, 210, 215, 1)");
        else if (scrollPos < (5*pageHeight)) {
            var countUp = scrollPos - (4.8*pageHeight);
            var progress = countUp / gradientPixelSize;

            setGradientColour(`rgba(${200 - (progress * 135)}, ${210 - (progress * 134)}, ${215 - (progress * 133)}, 1)`);
        }

        // Pages 6
        else
            setGradientColour("rgba(65, 76, 82, 1)");
    }, [scrollPos]);

    return (
        <div className='Menu-bar Even-spread-to-edges Menu-front' style={{visibility:`${visibility}`, top: `${pageHeight <= 500 ? "20px" : "4vh"}`}}>
                <div className='Even-spread-to-edges' style={{width: `${menuWidth}px`}}>
                    <ButtonBoxHighlight displayText={"ABOUT"} scrollPos={scrollPos} sectionNumber={1} />
                    <ButtonBoxHighlight displayText={"WORK"} scrollPos={scrollPos} sectionNumber={2} />
                    <ButtonBoxHighlight displayText={"CONTACT"} scrollPos={scrollPos} sectionNumber={3} />
                </div>
                <div 
                    className="Fadeout-gradient Inactive" 
                    style={{
                        backgroundImage:`linear-gradient(to top, rgba(65, 76, 82, 0), ${gradientColour})`,
                    }}
                />
        </div>
    );
}

export default MenuBar;