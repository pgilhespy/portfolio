
function getTextSize( width, height ) {
    if (width > 1100 && height > 620)
        return "window";

    if (width > 620) 
        return "ipad";

    return "phone";
};

export default getTextSize;