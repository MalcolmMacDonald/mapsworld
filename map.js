function initialize() {
    var fenway = { lat: 49.0292818, lng: -122.8015831 };
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
        position: fenway,
        disableDefaultUI: true,
        clickToGo: false,
        linksControl: false
    });
}