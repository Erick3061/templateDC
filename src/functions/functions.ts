export const hextToRgb = (hex: string) => {
    const con: RegExpMatchArray | null = hex.replace('#', '').match(/.{1,2}/g);
    if (!con) return '0,0,0';

    return `${parseInt(con[0], 16)},${parseInt(con[1], 16)},${parseInt(con[2], 16)}`
}

export const LightenDarkenColor = (col: string, amt: number) => {

    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);

}