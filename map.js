function initialize() {
    var fenway = { lat: 39.8341082, lng: -104.6762833 };
    var direction = { heading: 43.06, pitch: 150.44 };
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