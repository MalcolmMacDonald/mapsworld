function initialize() {
    var fenway = { lat: 51.2790807, lng: 1.0815471 };
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
        position: fenway,
        disableDefaultUI: true,
        clickToGo: false,
        linksControl: false
    });
}