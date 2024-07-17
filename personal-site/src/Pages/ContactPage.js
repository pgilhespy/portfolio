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

function ContactPage({ scrollPos }) {
    const {width, height} = useWindowDimensions();
    
    return (
        <div className="Contact-page">
            <FloatingImage image={dashedSide} left={70} top={-100} rotation={0} scale={1.5} scrollPos={scrollPos} invertParalax={-1} pageNumber={4} />
            <FloatingImage image={dashedBottom} right={370} bottom={-100} rotation={0} scale={1.5} scrollPos={scrollPos} invertParalax={-1} pageNumber={4} />
            <PaperPlane right={20} bottom={-40} rotation={0} scale={1.2} scrollPos={scrollPos} zInd={5} />
            <div className="Centered-container-horz-vert Middle">
                <span className={`Inter-black Spacing-tight Text-${getTextSize(width)}-large Text-white Drop-shadow-black Letters-seperate`} >LET'S CONNECT</span>
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