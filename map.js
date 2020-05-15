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
    var splitURL = scrambledURL.split('&');
    var scrambledLat = splitURL[0];
    var scrambledLng = splitURL[1];

    return { lat: Number(unscrambleString(scrambledLat)), lng: Number(unscrambleString(scrambledLng)) };
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