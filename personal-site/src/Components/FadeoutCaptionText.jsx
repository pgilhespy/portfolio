import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Components.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import { useState, useRef, useEffect } from 'react';
import MobileDetect from 'mobile-detect';
import getTextSize from '../Utils/GetTextSize';
import useWindowDimensions from '../Utils/UseWindowDimensions';

const FadeoutCaptionText = ({ mainText, subText, pageHeight }) => {
    const [isHovered, setIsHovered] = useState(false);
    const {height, width} = useWindowDimensions();
    const md = new MobileDetect(navigator.userAgent);
    const mainTextRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (md.mobile())
                if (mainTextRef.current) {
                    const mainTextBoundingBox = mainTextRef.current.getBoundingClientRect();
                    const isVisible = (
                        mainTextBoundingBox.top >= (pageHeight - 2*mainTextBoundingBox.height) / 2 &&
                        mainTextBoundingBox.bottom <= (pageHeight + 2*mainTextBoundingBox.height) / 2
                    );
                    setIsHovered(isVisible);
                }
        };
    
        window.addEventListener('scroll', handleScroll);
        // Initial check on component mount
        handleScroll();
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pageHeight]);

    const handleMouseEnter = () => {
        if ( !md.mobile() )
            setIsHovered(true);
    };
 
    const handleMouseLeave = () => {
        if ( !md.mobile() )
            setIsHovered(false);
    };
 
    const maintextOpacity = isHovered ? '0.2' : '1';
    const maintextBlur = isHovered ? '2px' : '0px';
    const subtextOpacity = isHovered ? '1' : '0';
    const subtextBlur = isHovered ? '0px' : '2px';

    return (
        <div className='Even-spread-to-edges Position-relative'>
            <span 
                ref={mainTextRef}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                className={`Inter-black Spacing-${getTextSize(width, pageHeight)}-tight Line-height-${getTextSize(width, pageHeight)} Text-${getTextSize(width, pageHeight)}-large Text-white Tight-fadeout-text`}
                style={{opacity: `${maintextOpacity}`, filter: `blur(${maintextBlur})`}}
            >
                { mainText }
            </span>
            <span 
                className={`Inter-regular Spacing-${getTextSize(width, pageHeight)}-normal Line-height-subtext-${getTextSize(width, pageHeight)} Text-${getTextSize(width, pageHeight)}-small Text-white Tight-fadeout-subText`}
                style={{opacity: `${subtextOpacity}`, filter: `blur(${subtextBlur})`}}
            >
                { subText }
            </span>
        </div>
    );
}

export default FadeoutCaptionText;