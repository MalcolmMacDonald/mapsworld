function initialize() {
    var fenway = { lat: 42.345573, lng: -71.098326 };
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
        position: fenway,
        disableDefaultUI: true
    });
    map.setStreetView(panorama);
}