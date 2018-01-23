// Global Dependencies
import jQuery from 'jquery';
import 'popper.js';
import 'bootstrap';
const $ = jQuery;

<<<<<<< HEAD
// Increases height of textarea to fit container to content
var textarea = null;
window.addEventListener("load", function() {
    textarea = window.document.querySelector("textarea");
    textarea.addEventListener("keypress", function() {
        if(textarea.scrollTop != 0){
            textarea.style.height = textarea.scrollHeight + "px";
        }
    }, false);
}, false);
=======
// Google Maps
import initializeMap from './map';


window.initializeMap = initializeMap;
>>>>>>> bf9a168c69553f216cf1388018702943d38d758d
