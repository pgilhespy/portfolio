
function getPageHeight( height ) {
    if (height < 500)
        return 500; 

    let adjustedHeight = height / 200;
    adjustedHeight = Math.ceil(adjustedHeight);
    adjustedHeight *= 200;

    return adjustedHeight;
};

export default getPageHeight;