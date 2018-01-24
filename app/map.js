import ScrollMagic from 'scrollmagic';
import { TweenLite, Power2 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

let map, marker, controller, scene;
let locations = document.querySelectorAll('.location__column--node');
const MINIMUM_WIDTH = 992;

// let googleMapClient = GoogleMaps.createClient({
//     key: 'AIzaSyCrARAoL8w7xRmzkslFHK979yEEQ_fQEtw'
// });

// Minimum Width Size: 768px

if (document.getElementById('mapTrigger')) {
    let timeout = false;
    let locationColumn = document.querySelector('.location__column');

    controller = new ScrollMagic.Controller();
    scene = new ScrollMagic.Scene({
        triggerElement: "#mapTrigger",
        duration: locationColumn.offsetHeight - 660
    }).setPin("#mapPin", { pushFollowers: false })
        .setClassToggle("#mapPin", "map--moving")
        .addTo(controller);

    if (window.innerWidth <= MINIMUM_WIDTH) {
        controller.enabled(false);
    }

    window.addEventListener('resize', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (window.innerWidth <= MINIMUM_WIDTH && controller.enabled()) {
                controller.enabled(false);
                controller.update(true);
                scene.setTween(TweenLite.to('#mapTrigger', 1, { x: 0 }));
            } else if (window.innerWidth > MINIMUM_WIDTH && !controller.enabled()) {
                controller.enabled(true);
                controller.update(true);
            }
        }, 100);
    });
}

function initializeMap () {
    if (document.getElementById('map')) {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: { lat: 38.22098, lng: -85.582809 }
        });
    
        marker = new google.maps.Marker({
            position: { lat: 38.22098, lng: -85.582809 },
            map
        });
    }
}

if (locations) {
    locations.forEach((location) => {
        location.addEventListener('click', () => {
            let latitude = parseFloat(location.dataset.lat);
            let longitude = parseFloat(location.dataset.lng);
            let newLocation = new google.maps.LatLng(latitude, longitude);
            map.panTo(newLocation);
            
            marker = new google.maps.Marker({
                position: newLocation,
                map
            });

            if (window.innerWidth <= MINIMUM_WIDTH) {
                TweenLite.to(window, 1, { scrollTo: { y: "#mapScroll", offsetY: 100 }, ease: Power2.easeOut });
            }
        });
    });
}

export default initializeMap;