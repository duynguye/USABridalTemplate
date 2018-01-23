// Global Dependencies
import jQuery from 'jquery';
import 'popper.js';
import 'bootstrap';
const $ = jQuery;

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
