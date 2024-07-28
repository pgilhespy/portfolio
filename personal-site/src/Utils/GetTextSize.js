
function getTextSize( width ) {
    if (width > 1100)
        return "window";

    if (width > 600) 
        return "ipad";

    return "phone";
};

export default getTextSize;