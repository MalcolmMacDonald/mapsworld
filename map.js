function initialize() {
    var fenway = { lat: 39.8341082, lng: -104.6762833 };
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