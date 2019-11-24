window.onscroll = function() {myFunction()};
                
var navbar = document.getElementById("StickyNav");

var sticky = 128;
            
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("Scrolled");
        navbar.classList.remove("Unscrolled");
    } else {
        navbar.classList.remove("Scrolled");
        navbar.classList.add("Unscrolled");
            }
    }