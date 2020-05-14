function initialize() {
    var location = { lat: 39.8341082, lng: -104.6762833 };

    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
        position: location,
        disableDefaultUI: true,
        clickToGo: false,
        linksControl: false
    });
}