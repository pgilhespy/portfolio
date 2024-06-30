import '../Styles/Components.css';
import '../Styles/Globals.css';
import useWindowDimensions from '../Utils/UseWindowDimensions';

const FloatingImage = ({image, top, bottom, left, right, rotation, scale, scrollPos, invertParalax, pageNumber}) => {
    const {height, width} = useWindowDimensions();
    let adjustedTop = top;
    let adjustedBottom = bottom;

    if (adjustedTop != null)
        adjustedTop = (top - 2.2*Math.sqrt(scrollPos - (pageNumber * height))) * invertParalax;

    if (adjustedBottom != null)
        adjustedBottom = (bottom + 2.2*Math.sqrt(scrollPos - (pageNumber * height))) * invertParalax;

    return (
        <img 
            className='Floating-image Back' 
            width="300" 
            height="300" 
            style={{
                top: `${adjustedTop}px`, 
                bottom: `${adjustedBottom}px`, 
                left: `${left}px`, 
                right: `${right}px`, 
                transform: `scale(${scale}, ${scale}) rotate(${rotation}deg)`
            }}
            src={image}
        >
        </img>
    );
}

export default FloatingImage;