
function getTextSize( width ) {
    if (width > 1200)
        return "window";

    if (width > 600) 
        return "ipad";

    return "phone";
};

export default getTextSize;