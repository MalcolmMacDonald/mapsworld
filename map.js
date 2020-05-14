function initialize() {
    var fenway = { lat: 43.6537984, lng: -79.4003736 };
    var direction = { heading: 46.2, pitch: 151.69 };
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
        position: fenway,
        pov: direction,
        zoom: 29,
        disableDefaultUI: true,
        clickToGo: false,
        linksControl: false
    });
}