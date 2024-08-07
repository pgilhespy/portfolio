
function getPageHeight( height ) {
    if (height < 500)
        return 500; 

    let adjustedHeight = height / 100;
    adjustedHeight = Math.ceil(adjustedHeight);
    adjustedHeight *= 100;

    return adjustedHeight;
};

export default getPageHeight;