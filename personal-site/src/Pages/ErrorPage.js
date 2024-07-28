import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';

function ErrorPage() {
    
    return (
        <div className="Error-page">
            <div className="Centered-container-horz-vert Middle">
                <span className={`Inter-black Spacing-phone-tight Text-phone-large Text-white Drop-shadow-black`} >!</span>
                <div className='Even-spread-to-edges'>
                    <span className={`Inter-regular Spacing-phone-normal Text-phone-small Text-white Drop-shadow-black`} >Rotate phone or enlarge screen</span>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;