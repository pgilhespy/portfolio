import '../Styles/Pages.css';
import '../Styles/Containers.css';
import '../Styles/Components.css';
import '../Styles/Text.css';
import '../Styles/Animations.css';
import '../Styles/Globals.css';
import Reel from '../Components/Reel';
import FloatingVideo from '../Components/FloatingVideo';
import starVideo from '../Content/chrome1.1.webm';

function ReelExperiencePage({ scrollPos }) {
    
    return (
        <div className="Work-pages">
            <FloatingVideo video={starVideo} left={-230} top={400} rotation={-10} scale={1.2} scrollPos={scrollPos} invertParalax={1} zInd={25} pageNumber={2.2}/>
            <Reel scrollPos={scrollPos} />
        </div>
    );
}

export default ReelExperiencePage;