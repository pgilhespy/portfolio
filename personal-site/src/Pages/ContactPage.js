import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function ContactPage() {
    
    return (
        <div className="Contact-page">
            <div className='Fadeout-gradient-dark Inactive' />
            <div className="Centered-container-horz-vert Middle">
                <span className="Inter-black Spacing-tight Text-large Text-white Drop-shadow-black Letters-seperate">LET'S CONNECT</span>
                <div className='Even-spread-to-edges'>
                    <FontAwesomeIcon icon={faInstagram} className='Social-icon' />
                    <FontAwesomeIcon icon={faEnvelope}  className='Social-icon' />
                    <FontAwesomeIcon icon={faLinkedinIn} className='Social-icon' />
                </div>
            </div>
            <div className='Fadeout-gradient-compensation' />
        </div>
    );
}

export default ContactPage;