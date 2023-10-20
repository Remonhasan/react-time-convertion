export const timeConvert = ({ time24 }) => {
    var ts = time24;
    var H = +ts?.substr(0, 2);
    var h = (H % 12) || 12;
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts?.substr(2, 3) + ampm;
    return ts;
}