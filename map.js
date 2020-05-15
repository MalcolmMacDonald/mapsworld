var scrambledOrder = [9, 10, 6, 0, 7, 2, 5, 4, 3, 1, 8];
var unscrambleOrder = [3, 9, 5, 8, 7, 6, 2, 4, 10, 0, 1];
//82471338900,33632076418
function initialize() {

    var paramsString = window.location.href.split("?l=")[1];

    var location = {};// lat: 39.8341082, lng: -104.6762833 };


    if (paramsString != "") {
        location = unscrambleURL(paramsString);
    }
    console.log(location);


    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
        position: location,
        disableDefaultUI: true,
        clickToGo: false,
        linksControl: false
    });
}

function createURL(location) {

    var latString = getScrambledPosition(location.lat);
    var lngString = getScrambledPosition(location.lng);

    return latString + ',' + lngString;
}

function unscrambleURL(scrambledURL) {
    var splitURL = scrambledURL.split(',');
    var scrambledLat = splitURL[0];
    var scrambledLng = splitURL[1];

    return { lat: Number(unscrambleString(scrambledLat)), lng: Number(unscrambleString(scrambledLng)) };
}

function getScrambledPosition(position) {

    var positionString = position.toString();
    //-100,-99,99,100
    //   4,  3, 2, 3
    //  12, 11,10,11
    if (positionString.length < 12) {

        if (positionString.length == 10) {
            positionString = "+0" + positionString;
        }
        else {
            if (position < 0) {
                positionString = "-0" + positionString.slice(1);
            }
            else {
                positionString = "+" + positionString;
            }
        }
    }

    var scrambledPosition = scrambleString(positionString);
    return scrambledPosition;
}

function scrambleString(input) {
    if (input[0] == '+') {
        input = '7' + input.slice(1);
    }
    else {
        input = '3' + input.slice(1);
    }
    input = input.split('.')[0] + input.split('.')[1];
    var output = "";
    for (var i = 0; i < 11; i++) {
        output += input[scrambledOrder[i]];
    }
    return output;
}

function unscrambleString(input) {
    var output = "";

    for (var i = 0; i < 11; i++) {

        output += input[unscrambleOrder[i]];
    }

    if (output[0] == '7') {
        output = '+' + output.slice(1);
    }
    else {
        output = '-' + output.slice(1);
    }

    output = output.substring(0, 4) + '.' + output.slice(4);

    return output;
}