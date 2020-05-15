var scrambledOrder = [9, 10, 6, 0, 7, 2, 5, 4, 3, 1, 8];



function presentLink() {

    var link = document.locationForm.location.value;
    console.log(link);
    console.log("link presented: " + link);

    var positionData = getPositionFromLink(link);

    var newLink = "https://malcolmmacdonald.github.io/mapsworld/spot" + "?l=" + createURL(positionData);

    document.getElementById("outputLink").href = newLink;
    document.getElementById("outputLink").innerHTML = newLink;

}


function getPositionFromLink(link) {

    var posString = link.split('@')[1];
    var position = { lat: posString.split(',')[0], lng: posString.split(',')[1] };
    console.log(position);
    return position;
}


function createURL(location) {

    var latString = getScrambledPosition(location.lat);
    var lngString = getScrambledPosition(location.lng);

    return latString + ',' + lngString;
}


function getScrambledPosition(position) {

    var positionString = position.toString();

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
