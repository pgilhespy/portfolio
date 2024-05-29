import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';

function AboutIntroPage({ scrollPos }) {
    
    return (
        <div className="About-intro-page">
            <div className="Centered-container-horz-vert Middle">
                <span className="Inter-black Spacing-medium Text-medium Text-white Drop-shadow-black">
                    I’m a web designer with computer science and video editing skills who can take your site to the next level.
                </span>
            </div>
        </div>
    );
}

export default AboutIntroPage;