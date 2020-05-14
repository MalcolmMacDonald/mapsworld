function initialize() {
    var fenway = { lat: 43.6537984, lng: -79.4003736 };
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
        position: fenway,
        disableDefaultUI: true,
        clickToGo: false,
        linksControl: false
    });
}