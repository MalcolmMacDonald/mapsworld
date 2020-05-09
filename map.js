function initialize() {
    var fenway = { lat: 52.3744677, lng: 4.9004073 };
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
        position: fenway,
        disableDefaultUI: true
    });
    map.setStreetView(panorama);
}