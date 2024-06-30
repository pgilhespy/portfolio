import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Components.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import Reel from '../Components/Reel';

function ReelExperiencePage({ scrollPos }) {
    
    return (
        <div className="Work-pages">
            <Reel scrollPos={scrollPos} />
        </div>
    );
}

export default ReelExperiencePage;