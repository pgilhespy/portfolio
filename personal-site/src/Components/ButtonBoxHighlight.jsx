import '../Styles/Components.css';

const ButtonBoxHighlight = ({ displayText }) => {
    const OnClick = () => {
        console.log(`Button ${displayText} clicked`);
    }

    return (
        <>
            <button className="Inter-regular Spacing-normal Text-small Text-white Button-box-highlight" onClick={OnClick}>{displayText}</button>
        </>
    );
}

export default ButtonBoxHighlight;