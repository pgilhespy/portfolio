import '../Styles/Components.css';

const FloatingVideo = ({video, x, y, mousePos}) => {
    let offsetX = 0;
    let offsetY = 0;

    if (mousePos.x)
        offsetX = (x - mousePos.x) / 100;

    if (mousePos.y)
        offsetY = (y - mousePos.y) / 100;

    return (
        <video className='Floating-bottom-left' width="750" height="500" autoPlay loop muted style={{top: y + offsetY, left: x + offsetX}}>
            <source src={video} type="video/mp4" autoPlay/>
        </video>
    );
}

export default FloatingVideo;