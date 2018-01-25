// Global Dependencies
import jQuery from 'jquery';
import 'popper.js';
import 'bootstrap';
const $ = jQuery;

//  Swiper Sliders
import Swiper from 'swiper';
import {sliderProductParams} from "./sliders";
var yourBridalSlider = new Swiper('#home-slider-your-bridal', sliderProductParams);

// Google Maps
import initializeMap from './map';

window.initializeMap = initializeMap;

// Increases height of textarea to fit container to content
var textarea = null;
window.addEventListener("load", function() {
    textarea = window.document.querySelector("textarea");
    if (textarea) {
        textarea.addEventListener("keypress", function() {
            if(textarea.scrollTop != 0){
                textarea.style.height = textarea.scrollHeight + "px";
            }
        }, false);
    }
}, false);

let parallaxObjects = document.querySelectorAll('[data-enigma-speed]');
let parallaxArray = [];

if (parallaxObjects) {
    parallaxObjects.forEach((object) => {
        parallaxArray.push({
            object,
            y: 0 + parseInt(object.dataset.enigmaOffset),
            offset: parseFloat(object.dataset.enigmaSpeed),
        });
    });

    window.addEventListener('scroll', handleScroll);
    requestAnimationFrame(animate);
}

function handleScroll (e) {
    requestAnimationFrame(animate);
}

function animate () {
    parallaxArray.map((item) => {
        let rect = item.object.getBoundingClientRect();
        let windowMiddle = window.innerHeight / 2;
        let imageCenter = rect.top + (item.object.offsetHeight / 2);
        let imageY = item.y + (imageCenter * item.offset);
        item.object.style.transform = 'translateY(' + imageY + 'px)';
    });
}
