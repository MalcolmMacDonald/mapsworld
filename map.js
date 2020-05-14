function initialize() {
    var fenway = { lat: 39.8341082, lng: -104.6762833 };
    var direction = { heading: 150.44, pitch: 43.06 };
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