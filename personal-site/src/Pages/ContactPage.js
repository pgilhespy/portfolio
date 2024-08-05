import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import PaperPlane from '../Components/PaperPlane';
import dashedSide from '../Content/dashedLine1.1.png';
import dashedBottom from '../Content/dashedLine2.0.png';
import FloatingImage from '../Components/FloatingImage';
import useWindowDimensions from '../Utils/UseWindowDimensions';
import getTextSize from '../Utils/GetTextSize';
import getPageHeight from '../Utils/GetPageHeight';

function ContactPage({ scrollPos }) {
    const {width, height} = useWindowDimensions();
    const pageHeight = getPageHeight(height);
    const screenSize = getTextSize(width, height);
    var floatingImage1;
    var floatingImage2;
    var floatingVideo; 

    if (screenSize == "window") {
        floatingImage1 = [1, 1, 1];
        floatingImage2 = [1, 1, 1, 0];
        floatingVideo = [1, 1, 1, 0];
    }
    else if (screenSize == "ipad") {
        floatingImage1 = [-70, 70, 0.7];
        floatingImage2 = [-150, 40, 0.7, 0];
        floatingVideo = [-125, 1, 0.7, 0];
    }
    else {
        floatingImage1 = [-120, 70, 0.5];
        floatingImage2 = [-350, 70, 0.5, -25];
        floatingVideo = [-220, -30, 0.5, -15];
    }
    
    return (
        <div className="Contact-page" style={{ height: `${pageHeight}px`}}>
            <FloatingImage 
                image={dashedSide} 
                left={70+floatingImage1[0]} 
                top={-100+floatingImage1[1]} 
                rotation={0} 
                scale={1.5*floatingImage1[2]} 
                scrollPos={scrollPos} 
                invertParalax={-1} 
                pageNumber={4} 
            />
            <FloatingImage 
                image={dashedBottom} 
                right={370+floatingImage2[0]} 
                bottom={-100+floatingImage2[1]} 
                rotation={0+floatingImage2[3]} 
                scale={1.5*floatingImage2[2]} 
                scrollPos={scrollPos} 
                invertParalax={-1} 
                pageNumber={4} 
            />
            <PaperPlane 
                right={20+floatingVideo[0]} 
                bottom={-40+floatingVideo[1]} 
                rotation={0+floatingVideo[3]} 
                scale={1.2*floatingVideo[2]} 
                scrollPos={scrollPos}
                zInd={5}
            />
            <div className="Centered-container-horz-vert Middle">
                <span className={`Inter-black Spacing-${getTextSize(width, height)}-tight Text-${getTextSize(width, height)}-large Text-white Drop-shadow-black`} >LET'S CONNECT</span>
                <div className='Even-spread-to-edges'>
                    <a href='https://www.instagram.com/p_gilhespy/' target='_blank' >
                        <FontAwesomeIcon icon={faInstagram} className='Social-icon' />
                    </a>
                    <a href="mailto:philip@gilhespy.net" target='_blank' >
                        <FontAwesomeIcon icon={faEnvelope}  className='Social-icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/philip-gilhespy-7601132a1/' target='_blank' >
                        <FontAwesomeIcon icon={faLinkedinIn} className='Social-icon' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;