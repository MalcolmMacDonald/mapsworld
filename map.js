function initialize() {
    var fenway = { lat: 49.269459, lng: -123.181103 };
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
        position: fenway,
        disableDefaultUI: true,
        clickToGo: false,
        linksControl: false
    });
}