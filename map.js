function initialize() {
    var fenway = { lat: 45.8258283, lng: 9.0964658 };
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
        position: fenway,
        disableDefaultUI: true,
        clickToGo: false,
        linksControl: false
    });
}